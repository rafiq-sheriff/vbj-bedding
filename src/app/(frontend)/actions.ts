'use server'

export type EnquiryState = {
  success: boolean
  message: string
  errors?: Record<string, string>
}

const interests = ['beds', 'sofas', 'curtains', 'multiple'] as const

function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? '').trim()
}

export async function submitEnquiry(
  _previousState: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  // Silently accept honeypot triggers without forwarding a submission.
  if (value(formData, 'company')) {
    return {
      success: true,
      message: 'Thank you. Your enquiry has been received and the VBJ team can follow up.',
    }
  }

  const name = value(formData, 'name')
  const phone = value(formData, 'phone')
  const email = value(formData, 'email')
  const interest = value(formData, 'interest')
  const message = value(formData, 'message')
  const errors: Record<string, string> = {}

  if (name.length < 2 || name.length > 100) {
    errors.name = 'Please enter your name (2–100 characters).'
  }
  if (!/^[+\d][\d\s()-]{7,24}$/.test(phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!interests.includes(interest as (typeof interests)[number])) {
    errors.interest = 'Please choose an area of interest.'
  }
  if (message.length < 10 || message.length > 2000) {
    errors.message = 'Please tell us a little more (10–2000 characters).'
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: 'Please review the highlighted fields.', errors }
  }

  const payload = {
    name,
    phone,
    email: email || undefined,
    interest: interest as (typeof interests)[number],
    message,
    submittedAt: new Date().toISOString(),
  }

  try {
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        throw new Error(`Enquiry webhook returned ${response.status}`)
      }
    }

    return {
      success: true,
      message: 'Thank you. Your enquiry has been received and our Chennai team will follow up.',
    }
  } catch {
    return {
      success: false,
      message: 'We could not send your enquiry right now. Please try again in a moment.',
    }
  }
}
