'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitEnquiry, type EnquiryState } from '@/app/(frontend)/actions'
import { ArrowUpRight } from './icons'

const initialState: EnquiryState = { success: false, message: '' }

type EnquiryFormProps = {
  defaultInterest?: 'beds' | 'sofas' | 'curtains' | 'multiple' | ''
  defaultMessage?: string
}

export function EnquiryForm({ defaultInterest = '', defaultMessage = '' }: EnquiryFormProps) {
  const [state, action, pending] = useActionState(submitEnquiry, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const interestRef = useRef<HTMLSelectElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (state.success) formRef.current?.reset()
  }, [state.success])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const interestParam = params.get('interest')
    const productParam = params.get('product')

    if (
      interestParam &&
      ['beds', 'sofas', 'curtains', 'multiple'].includes(interestParam) &&
      interestRef.current &&
      !interestRef.current.value
    ) {
      interestRef.current.value = interestParam
    }

    if (productParam && messageRef.current && !messageRef.current.value) {
      messageRef.current.value = `I would like to enquire about the ${productParam} (dimensions, upholstery options and availability).`
    }
  }, [])

  return (
    <form ref={formRef} action={action} className="enquiry-form" noValidate>
      {/* Honeypot field to filter automated spam submissions */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="name">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your full name"
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? 'name-error' : undefined}
        />
        {state.errors?.name && (
          <span id="name-error" role="alert">
            {state.errors.name}
          </span>
        )}
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="phone">
            Phone number <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 98XXX XXXXX"
            aria-invalid={Boolean(state.errors?.phone)}
            aria-describedby={state.errors?.phone ? 'phone-error' : undefined}
          />
          {state.errors?.phone && (
            <span id="phone-error" role="alert">
              {state.errors.phone}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor="email">
            Email <em>(optional)</em>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? 'email-error' : undefined}
          />
          {state.errors?.email && (
            <span id="email-error" role="alert">
              {state.errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="interest">
          Interested in <span aria-hidden="true">*</span>
        </label>
        <select
          ref={interestRef}
          id="interest"
          name="interest"
          required
          defaultValue={defaultInterest}
          aria-invalid={Boolean(state.errors?.interest)}
          aria-describedby={state.errors?.interest ? 'interest-error' : undefined}
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="beds">Beds</option>
          <option value="sofas">Sofas</option>
          <option value="curtains">Curtains &amp; Sheers</option>
          <option value="multiple">Multiple Categories</option>
        </select>
        {state.errors?.interest && (
          <span id="interest-error" role="alert">
            {state.errors.interest}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          ref={messageRef}
          id="message"
          name="message"
          rows={4}
          required
          defaultValue={defaultMessage}
          placeholder="Tell us about your room dimensions, preferred tones or the piece you have in mind…"
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
        />
        {state.errors?.message && (
          <span id="message-error" role="alert">
            {state.errors.message}
          </span>
        )}
      </div>

      <button className="submit-button" type="submit" disabled={pending}>
        <span>{pending ? 'Sending enquiry…' : 'Send enquiry'}</span>
        <ArrowUpRight className="size-5" />
      </button>

      {state.message && (
        <p
          className={`form-status ${state.success ? 'is-success' : ''}`}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      )}
    </form>
  )
}
