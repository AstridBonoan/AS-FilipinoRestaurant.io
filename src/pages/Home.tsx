import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <section className="relative flex min-h-[calc(100dvh-5rem)] flex-col justify-center overflow-hidden border-b border-brand-900/10 bg-brand-900">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(201,162,39,0.35), transparent 45%), radial-gradient(circle at 80% 30%, rgba(139,46,46,0.25), transparent 40%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:py-14 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-muted/90">
            Filipino cuisine · New York
          </p>
          <h1 className="mt-4 max-w-[18ch] font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[#faf8f5] sm:text-5xl lg:text-6xl">
            Gather around the table.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#f5f0e8]/85 sm:text-lg">
            Bold lechon-inspired flavors, comforting noodles, and vegetable-forward dishes meant to be
            shared — like a Sunday lunch at home, elevated for the city.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/reservations"
              className="inline-flex items-center justify-center rounded-full bg-[#faf8f5] px-8 py-3.5 text-center text-sm font-semibold text-brand-900 shadow-lg shadow-black/20 transition hover:bg-white"
            >
              Book a reservation
            </Link>
            <Link
              to="/order"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-8 py-3.5 text-center text-sm font-semibold text-[#faf8f5] transition hover:border-white/50 hover:bg-white/10"
            >
              Order pickup or delivery
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-brand-950 sm:text-4xl">
              Made for sharing
            </h2>
            <p className="mt-2 max-w-2xl text-brand-800/90">
              Inspired by classic Filipino gatherings — generous platters, balanced sauces, and hospitality
              that lingers after the last bite.
            </p>
          </div>
          <Link
            to="/menu"
            className="text-sm font-semibold text-brand-900 underline-offset-4 hover:underline"
          >
            View full menu
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Family-style portions',
              body: 'Dishes arrive ready to pass — ideal for groups who want to taste everything.',
            },
            {
              title: 'Seasonal & local',
              body: 'We rotate specials around market produce while keeping beloved staples on the menu.',
            },
            {
              title: 'Warm, attentive service',
              body: 'Our team guides first-timers and regulars alike through the menu with ease.',
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold text-brand-950">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-800/85">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-brand-900/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:items-center sm:py-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-brand-950">Tonight at A&S</h2>
            <p className="mt-3 text-brand-800/90">
              Tables fill quickly on weekends — reserve ahead when you can. Need dinner at home? Order
              online for pickup or delivery through our partner platform.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/reservations"
                className="inline-flex justify-center rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-[#faf8f5] hover:bg-brand-800"
              >
                Reserve a table
              </Link>
              <Link
                to="/order"
                className="inline-flex justify-center rounded-full border border-brand-900/20 px-6 py-3 text-sm font-semibold text-brand-900 hover:border-brand-900/40"
              >
                Start an order
              </Link>
            </div>
          </div>
          <dl className="rounded-2xl border border-brand-900/10 bg-[#faf8f5] p-6 sm:p-8">
            <div className="flex justify-between gap-4 border-b border-brand-900/10 py-3 first:pt-0">
              <dt className="text-sm font-medium text-brand-800">Address</dt>
              <dd className="text-right text-sm text-brand-900">123 Sample St, New York</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-brand-900/10 py-3">
              <dt className="text-sm font-medium text-brand-800">Phone</dt>
              <dd className="text-right text-sm">
                <a href="tel:+12125550199" className="font-semibold text-brand-900 hover:underline">
                  (212) 555-0199
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-4 py-3 last:pb-0">
              <dt className="text-sm font-medium text-brand-800">Tonight</dt>
              <dd className="text-right text-sm text-brand-900">Open · 11am – 10pm</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  )
}
