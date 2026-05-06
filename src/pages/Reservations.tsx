import { useState, type FormEvent } from 'react'

export function Reservations() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-800/70">
            Reservations
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-brand-950 sm:text-5xl">
            Book a table
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-800/90">
            Share your preferred date and party size — we will confirm by phone or email. For same-day
            seating, call{' '}
            <a href="tel:+12125550199" className="font-semibold text-brand-900 underline-offset-4 hover:underline">
              (212) 555-0199
            </a>
            .
          </p>

          <dl className="mt-10 space-y-4 rounded-2xl border border-brand-900/10 bg-white p-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-brand-800/80">Location</dt>
              <dd className="text-right font-medium text-brand-950">123 Sample St, New York, NY</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-brand-800/80">Large parties</dt>
              <dd className="text-right">
                <a
                  href="mailto:events@example.com"
                  className="font-medium text-brand-900 hover:underline"
                >
                  events@example.com
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-brand-900/10 bg-[#faf8f5] p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center">
              <p className="font-display text-xl font-semibold text-brand-950">Request received</p>
              <p className="mt-3 text-sm text-brand-800/85">
                Thank you — we will reach out shortly to confirm your reservation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-brand-900">
                  Name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border border-brand-900/15 bg-white px-3 py-2.5 text-brand-950 outline-none ring-brand-900/20 placeholder:text-brand-800/40 focus:ring-2"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-medium text-brand-900">
                  Phone
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-1.5 w-full rounded-xl border border-brand-900/15 bg-white px-3 py-2.5 text-brand-950 outline-none ring-brand-900/20 placeholder:text-brand-800/40 focus:ring-2"
                    placeholder="(555) 555-0100"
                  />
                </label>
              </div>
              <label className="block text-sm font-medium text-brand-900">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-xl border border-brand-900/15 bg-white px-3 py-2.5 text-brand-950 outline-none ring-brand-900/20 placeholder:text-brand-800/40 focus:ring-2"
                  placeholder="you@example.com"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-brand-900">
                  Date
                  <input
                    required
                    name="date"
                    type="date"
                    className="mt-1.5 w-full rounded-xl border border-brand-900/15 bg-white px-3 py-2.5 text-brand-950 outline-none ring-brand-900/20 focus:ring-2"
                  />
                </label>
                <label className="block text-sm font-medium text-brand-900">
                  Time
                  <input
                    required
                    name="time"
                    type="time"
                    className="mt-1.5 w-full rounded-xl border border-brand-900/15 bg-white px-3 py-2.5 text-brand-950 outline-none ring-brand-900/20 focus:ring-2"
                  />
                </label>
              </div>
              <label className="block text-sm font-medium text-brand-900">
                Party size
                <select
                  required
                  name="party"
                  className="mt-1.5 w-full rounded-xl border border-brand-900/15 bg-white px-3 py-2.5 text-brand-950 outline-none ring-brand-900/20 focus:ring-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                  <option value="9+">9+ (private dining)</option>
                </select>
              </label>
              <label className="block text-sm font-medium text-brand-900">
                Notes <span className="font-normal text-brand-800/60">(optional)</span>
                <textarea
                  name="notes"
                  rows={3}
                  className="mt-1.5 w-full resize-y rounded-xl border border-brand-900/15 bg-white px-3 py-2.5 text-brand-950 outline-none ring-brand-900/20 placeholder:text-brand-800/40 focus:ring-2"
                  placeholder="Allergies, occasion, seating preference…"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-900 py-3.5 text-sm font-semibold text-[#faf8f5] shadow-sm transition hover:bg-brand-800"
              >
                Submit request
              </button>
              <p className="text-center text-xs text-brand-800/60">
                You can later connect this form to email, OpenTable, Resy, or your POS — this UI is ready.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
