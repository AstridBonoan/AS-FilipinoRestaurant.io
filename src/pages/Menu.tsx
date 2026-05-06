type Item = { name: string; detail: string; price: string }

type Section = { title: string; note?: string; items: Item[] }

const sections: Section[] = [
  {
    title: 'Small plates & starters',
    items: [
      { name: 'Lumpiang Shanghai', detail: 'Crispy pork spring rolls, spiced vinegar', price: '14' },
      { name: 'Ensaladang talong', detail: 'Charred eggplant, tomatoes, cane vinegar', price: '13' },
      { name: 'Kinilaw-style tuna', detail: 'Citrus-cured, chili, radish, crispy shallots', price: '19' },
    ],
  },
  {
    title: 'Soups & noodles',
    note: 'Hearty bowls — ask your server for spice level.',
    items: [
      { name: 'Sinigang na baboy', detail: 'Tamarind broth, pork belly, taro, greens', price: '18' },
      { name: 'Pancit canton', detail: 'Stir-fried egg noodles, shrimp, vegetables', price: '22' },
      { name: 'Arroz caldo', detail: 'Ginger-chicken congee, calamansi, crispy garlic', price: '16' },
    ],
  },
  {
    title: 'From the grill & stove',
    items: [
      {
        name: 'Inihaw na liempo',
        detail: 'Coconut-soy glazed pork belly, pickled papaya',
        price: '28',
      },
      {
        name: 'Chicken inasal',
        detail: 'Citrus-annatto marinade, garlic rice on request',
        price: '26',
      },
      {
        name: 'Kare-kare (share)',
        detail: 'Oxtail & vegetables, peanut sauce, bagoong on the side',
        price: '42',
      },
    ],
  },
  {
    title: 'Rice & vegetables',
    items: [
      { name: 'Garlic fried rice', detail: 'Crispy garlic, scallions', price: '8' },
      { name: 'Ginisang sitaw', detail: 'Long beans, tomato, shrimp paste (optional)', price: '12' },
      { name: 'Laing', detail: 'Taro leaves, coconut cream, mild heat', price: '14' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Leche flan', detail: 'Silky custard, palm sugar caramel', price: '10' },
      { name: 'Halo-halo', detail: 'Shaved ice, ube, jackfruit, sweet beans, leche flan', price: '12' },
    ],
  },
]

export function Menu() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-800/70">Menu</p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-brand-950 sm:text-5xl">
          Taste the islands
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-800/90">
          A curated selection of Filipino favorites — designed for sharing and returning often. Prices
          are sample placeholders you can wire to your POS or PDF menu later.
        </p>
      </header>

      <div className="mt-12 space-y-14">
        {sections.map((section) => (
          <section key={section.title} aria-labelledby={`section-${section.title}`}>
            <div className="border-b border-brand-900/15 pb-4">
              <h2
                id={`section-${section.title}`}
                className="font-display text-2xl font-semibold text-brand-950"
              >
                {section.title}
              </h2>
              {section.note ? (
                <p className="mt-1 text-sm text-brand-800/75">{section.note}</p>
              ) : null}
            </div>
            <ul className="divide-y divide-brand-900/10">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <div>
                    <p className="font-medium text-brand-950">{item.name}</p>
                    <p className="mt-1 text-sm text-brand-800/80">{item.detail}</p>
                  </div>
                  <p className="shrink-0 font-display text-lg font-semibold tabular-nums text-brand-900">
                    ${item.price}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
