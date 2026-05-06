export function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-800/70">About</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-brand-950 sm:text-5xl">
            Hospitality, the Filipino way
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-800/90">
            <p>
              A&S Filipino Kitchen was built around one idea: food tastes better when it is shared. Our
              menu pulls from regional classics — sour soups, slow braises, bright pickles, and the
              smoke-kissed dishes you crave after a long week.
            </p>
            <p>
              In the dining room, we aim for the polish of a brasserie with the warmth of a family
              kitchen. Whether it is your first bowl of sinigang or your hundredth plate of pancit, our
              team is here to guide you.
            </p>
          </div>
        </div>

        <aside className="rounded-2xl border border-brand-900/10 bg-white p-8 shadow-sm">
          <p className="font-display text-xl font-semibold text-brand-950">From the founders</p>
          <blockquote className="mt-4 text-sm italic leading-relaxed text-brand-800/85">
            “We wanted a place that feels both celebratory and everyday — where students, neighbors, and
            families can afford to order generously and leave satisfied.”
          </blockquote>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-800/55">
            — A&S Family
          </p>
        </aside>
      </div>

      <section className="mt-16 rounded-2xl bg-brand-900 px-6 py-10 text-[#faf8f5] sm:px-10">
        <h2 className="font-display text-2xl font-semibold">Visit us</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#f5f0e8]/85">
          Street parking can be limited — reservations recommended Thursday through Sunday. For large
          parties, email{' '}
          <a href="mailto:events@example.com" className="font-semibold underline-offset-4 hover:underline">
            events@example.com
          </a>
          .
        </p>
      </section>
    </div>
  )
}
