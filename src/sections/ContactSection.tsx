import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { CalendarDays, MapPin, Send } from 'lucide-react'
import { GlassCard } from '../components/GlassCard'
import { MagneticButton } from '../components/MagneticButton'
import { SectionHeading } from '../components/SectionHeading'
import { SocialLinks } from '../components/SocialLinks'
import { contactMethods, portfolioMeta, socialLinks } from '../data/portfolio'

interface ContactFormState {
  name: string
  email: string
  company: string
  message: string
}

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  company: '',
  message: '',
}

const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function ContactSection() {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState)
  const [feedback, setFeedback] = useState(
    'EmailJS is supported when env vars are configured. Without them, the form falls back to a prefilled mail draft.',
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isSubmitDisabled = useMemo(() => {
    return !formState.name || !formState.email || !formState.message || isSubmitting
  }, [formState.email, formState.message, formState.name, isSubmitting])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        const emailjs = (await import('@emailjs/browser')).default
        await emailjs.send(
          emailjsServiceId,
          emailjsTemplateId,
          {
            from_name: formState.name,
            from_email: formState.email,
            company: formState.company,
            message: formState.message,
          },
          emailjsPublicKey,
        )

        setFeedback('Message sent via EmailJS. Expect a reply soon.')
      } else {
        const subject = `Project inquiry from ${formState.name}${
          formState.company ? ` · ${formState.company}` : ''
        }`
        const body = [
          `Hi Aarav,`,
          '',
          `My name is ${formState.name}.`,
          `Email: ${formState.email}`,
          formState.company ? `Company: ${formState.company}` : undefined,
          '',
          formState.message,
          '',
          'Sent from the portfolio contact form.',
        ]
          .filter(Boolean)
          .join('\n')

        window.location.href = `mailto:${portfolioMeta.email}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`
        setFeedback('Opening your email client with a prefilled project brief.')
      }

      setFormState(initialFormState)
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? `Unable to send automatically. ${error.message}`
          : 'Unable to send automatically right now.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Contact"
          title="Email, WhatsApp, Calendly, and a polished brief form in one place."
          description="Built to feel fast and premium for both a recruiter and a founder: direct contact paths, availability status, and a form that works even without extra backend setup."
          titleId="contact-heading"
        />

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <GlassCard glow className="h-full">
            <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--text-muted)]">
              Contact system
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-[color:var(--text-primary)]">
              Reach out directly, schedule a call, or send a structured brief.
            </h3>
            <div className="mt-8 grid gap-4">
              {contactMethods.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)]">
                    <Icon className="h-5 w-5 text-[color:var(--accent-secondary)]" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                      {label}
                    </p>
                    <p className="mt-1 text-base font-medium text-[color:var(--text-primary)]">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                  Availability
                </p>
                <p className="mt-3 text-lg font-semibold text-[color:var(--text-primary)]">
                  Premium collaboration open
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                  Best fit for design-engineering product work, launch pages, AI tools, and frontend architecture upgrades.
                </p>
              </div>
              <div className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                  Quick actions
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${portfolioMeta.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    WhatsApp quick connect
                  </a>
                  <a
                    href={portfolioMeta.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Schedule with Calendly
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                Social links
              </p>
              <SocialLinks links={socialLinks} />
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-[color:var(--border)]">
              <iframe
                title="Bengaluru map"
                src="https://www.google.com/maps?q=Bengaluru&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </GlassCard>

          <GlassCard className="h-full">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-[color:var(--text-secondary)]">
                  Name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={formState.name}
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, name: event.target.value }))
                    }
                    className="input-shell"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm text-[color:var(--text-secondary)]">
                  Email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, email: event.target.value }))
                    }
                    className="input-shell"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm text-[color:var(--text-secondary)]">
                Company
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  value={formState.company}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      company: event.target.value,
                    }))
                  }
                  className="input-shell"
                  placeholder="Studio, startup, or product team"
                />
              </label>

              <label className="grid gap-2 text-sm text-[color:var(--text-secondary)]">
                Project Brief
                <textarea
                  name="message"
                  required
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  className="input-shell min-h-44 resize-y"
                  placeholder="Share context, timeline, product goals, and what kind of premium experience you want to build."
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-7 text-[color:var(--text-muted)]" aria-live="polite">
                  {feedback}
                </p>
                <MagneticButton type="submit" disabled={isSubmitDisabled} className="btn-primary">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="h-4 w-4" />
                </MagneticButton>
              </div>
            </form>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                  Location
                </p>
                <p className="mt-3 inline-flex items-center gap-2 text-[color:var(--text-primary)]">
                  <MapPin className="h-4 w-4 text-[color:var(--accent-secondary)]" />
                  {portfolioMeta.location}
                </p>
              </div>
              <div className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                  Delivery mode
                </p>
                <p className="mt-3 text-[color:var(--text-primary)]">
                  Remote-first, async-friendly, and recruiter-call ready.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
