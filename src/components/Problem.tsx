import { Reveal } from '@/components/Reveal';
import { PHOTOS } from '@/data/siteContent';
import { ArrowDownUp, Utensils } from 'lucide-react';

const SPLIT_PANELS = [
  {
    key: 'waste',
    image: PHOTOS.wasteSide,
    alt: 'A ripe banana peel being dropped into a bin, representing edible food being thrown away',
    tag: 'Surplus wasted',
    caption: 'Food that is still safe to eat ends up in the bin every day.',
    tone: 'from-ivory-900/85',
  },
  {
    key: 'need',
    image: PHOTOS.needSide,
    alt: 'A person handing a meal container to someone sitting on a city sidewalk',
    tag: 'Meals needed',
    caption: 'Across our cities, people are still waiting for a simple hot meal.',
    tone: 'from-forest-900/85',
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">The problem</p>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">The Food We Waste Could Change Lives.</h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-lg text-ivory-700">
              The same plates, loaves and crates that end their day as waste could be someone's dinner tonight. The
              gap is as much about connection as it is about food.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 md:gap-6">
          {SPLIT_PANELS.map((panel, index) => (
            <Reveal key={panel.key} delay={index * 150}>
              <figure className="group relative h-full overflow-hidden rounded-[2rem] bg-ivory-300">
                <img
                  src={panel.image}
                  alt={panel.alt}
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={1200}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 md:aspect-[3/4]"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${panel.tone} via-transparent to-transparent`} />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="inline-flex rounded-full bg-ivory-50/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-forest-900">
                    {panel.tag}
                  </span>
                  <p className="mt-4 max-w-sm text-lg leading-normal text-ivory-50">{panel.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-ivory-300 bg-ivory-50 p-8 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <ArrowDownUp className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-6 font-display text-5xl text-forest-900 sm:text-6xl">1.05 billion</p>
              <p className="mt-3 text-lg text-ivory-700">
                tonnes of food were wasted worldwide in 2022, according to the UN Environment Programme.
              </p>
              <p className="mt-auto pt-6 text-xs text-ivory-600">Source: UNEP Food Waste Index Report 2024.</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex h-full flex-col rounded-3xl bg-forest-800 p-8 text-ivory-50 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sage-200">
                <Utensils className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-6 font-display text-3xl leading-[1.2] sm:text-4xl">
                Much surplus is still good to eat. It only needs a route to a table.
              </p>
              <p className="mt-auto pt-6 text-base text-sage-100">
                FoodBridge is that route: fast, local and coordinated.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
