import React, { useState } from 'react'
import './ContactForm.css'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/placeholder@example.com'

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    contactMethod: '',
    hearAboutUs: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const validate = () => {
    const errs = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.'
    if (!form.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!form.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required.'
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phoneNumber)) {
      errs.phoneNumber = 'Please enter a valid phone number.'
    }
    if (!form.contactMethod) errs.contactMethod = 'Please select a preferred contact method.'
    if (!form.hearAboutUs) errs.hearAboutUs = 'Please let us know how you heard about us.'
    if (!form.message.trim()) {
      errs.message = 'Message is required.'
    } else if (form.message.trim().length > 500) {
      errs.message = 'Message must be 500 characters or fewer.'
    }
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setSubmitting(true)
    setSubmitError(null)

    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form)
      })
      setSubmitted(true)
      setForm({ fullName: '', email: '', phoneNumber: '', contactMethod: '', hearAboutUs: '', message: '' })
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="form-section" className="form-section">
      <div className="container form-section__inner">
        <div className="form-section__header">
          <h2 className="form-section__title">Have Questions About Planetary Science?</h2>
          <p className="form-section__subtitle">
            Interested in learning more about space, astronomy, or how planetary data is
            collected and analyzed? Reach out and we'll get back to you.
          </p>
        </div>

        {submitted ? (
          <div className="form-success">
            <div className="form-success__icon">✓</div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We'll get back to you shortly.</p>
            <button className="btn-reset" onClick={() => setSubmitted(false)}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full name"
                  value={form.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'input-error' : ''}
                />
                {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Please enter a valid phone number"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className={errors.phoneNumber ? 'input-error' : ''}
                />
                {errors.phoneNumber && <span className="error-msg">{errors.phoneNumber}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="contactMethod">How should we contact you? *</label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={form.contactMethod}
                  onChange={handleChange}
                  className={errors.contactMethod ? 'input-error' : ''}
                >
                  <option value="">Select a method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="sms">SMS</option>
                </select>
                {errors.contactMethod && <span className="error-msg">{errors.contactMethod}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="hearAboutUs">How did you hear about us? *</label>
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                value={form.hearAboutUs}
                onChange={handleChange}
                className={errors.hearAboutUs ? 'input-error' : ''}
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="social_media">Social Media</option>
                <option value="friend">Friend or Colleague</option>
                <option value="tsacademy">TSAcademy</option>
                <option value="linkedin">LinkedIn</option>
                <option value="other">Other</option>
              </select>
              {errors.hearAboutUs && <span className="error-msg">{errors.hearAboutUs}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className={errors.message ? 'input-error' : ''}
              />
              <div className="char-count">{form.message.length} / 500 characters</div>
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            {submitError && <p className="error-msg global-error">{submitError}</p>}

            <button type="submit" className="btn-submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Submit →'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}