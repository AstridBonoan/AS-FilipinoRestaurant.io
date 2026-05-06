import { Link } from 'react-router-dom'

export function Order() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-800/70">
          Order online
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-brand-950 sm:text-5xl">
          Pickup & delivery
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-800/90">
          Place your order through our partner — same menu, packed carefully for the trip home. Swap the
          URLs below for DoorDash, Uber Eats, or your direct ordering link when you are ready to go
          live.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <article className="flex flex-col rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-brand-950">Delivery & pickup</h2>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-800/85">
            Order for ASAP or schedule ahead during peak hours — popular on weekends and holidays.
          </p>
          <a
            href="https://example.com/order"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex justify-center rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-[#faf8f5] transition hover:bg-brand-800"
          >
            Open ordering (placeholder)
          </a>
        </article>

        <article className="flex flex-col rounded-2xl border border-brand-900/10 bg-[#faf8f5] p-6">
          <h2 className="font-display text-xl font-semibold text-brand-950">Prefer to dine in?</h2>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-800/85">
            Join us in the dining room for full service and family-style platters fresh from the kitchen.
          </p>
          <Link
            to="/reservations"
            className="mt-6 inline-flex justify-center rounded-full border border-brand-900/20 px-6 py-3 text-sm font-semibold text-brand-900 hover:border-brand-900/40"
          >
            Book a reservation
          </Link>
        </article>
      </div>

      <section className="mt-14 rounded-2xl border border-dashed border-brand-900/25 bg-white/60 px-6 py-8 text-center sm:px-10">
        <h2 className="font-display text-lg font-semibold text-brand-950">Holiday volume</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-brand-800/80">
          During busy seasons, pickup windows can fill quickly — if a slot is unavailable, try another
          time or call the restaurant. We appreciate your patience.
        </p>
      </section>
    </div>
  )
}
