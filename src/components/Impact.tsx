import { Reveal } from '@/components/Reveal';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';

const STATS = [
  { label: 'Meals Rescued', target: 1000000, suffix: 'meals' },
  { label: 'Food Donors', target: 5000, suffix: 'donors' },
  { label: 'NGO Partners', target: 250, suffix: 'partners' },
  { label: 'Food Redistributed', target: 2500, suffix: 'tonnes' },
];

const GROWTH_PATH = 'M0 200 C 60 190, 110 176, 160 150 S 260 96, 320 60 S 380 22, 400 12';
const GROWTH_AREA = `${GROWTH_PATH} L 400 240 L 0 240 Z`;
const GROWTH_YEARS = ['2026', '2028', '2030'];

function ImpactStat({ label, target, suffix, delay }: (typeof STATS)[number] & { delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const value = useCountUp(target, inView);

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage-200">{label}</p>
        <p className="mt-4 font-display text-5xl text-ivory-50 tabular-nums sm:text-6xl">
          {value.toLocaleString('en-US')}
        </p>
        <p className="mt-2 text-sm text-sage-200">{suffix}</p>
      </div>
    </Reveal>
  );
}

function GrowthChart() {
  const { ref: containerRef, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div ref={containerRef} className="flex h-full flex-col rounded-3xl border border-white/10 bg-forest-800/60 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage-200">Illustrative growth path</p>
      <p className="mt-2 text-sm text-sage-200/80">Aspirational goal, not a platform result.</p>

      <svg viewBox="0 0 400 240" className="mt-8 h-auto w-full" role="img" aria-label="Illustrative upward growth line from 2026 to 2030">
        <defs>
          <linearGradient id="impact-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e4692c" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#e4692c" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[60, 120, 180].map((y) => (
          <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#ffffff" strokeOpacity="0.08" />
        ))}
        <path
          d={GROWTH_AREA}
          fill="url(#impact-area)"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 1.2s ease 0.8s' }}
        />
        <path
          d={GROWTH_PATH}
          pathLength={1}
          fill="none"
          stroke="#f7894a"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={1}
          strokeDashoffset={inView ? 0 : 1}
          style={{ transition: 'stroke-dashoffset 2.2s cubic-bezier(0.2, 0.7, 0.2, 1)' }}
        />
        <circle cx="400" cy="12" r="6" fill="#fbf7ec" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 2s' }} />
      </svg>

      <div className="mt-4 flex justify-between text-xs font-semibold text-sage-200">
        {GROWTH_YEARS.map((year) => (
          <span key={year}>{year}</span>
        ))}
      </div>
    </div>
  );
}

export function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden bg-forest-900 py-24 text-ivory-50 sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-forest-700/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">Our impact</p>
          <h2 className="mt-4 text-4xl text-ivory-50 sm:text-5xl lg:text-6xl">
            Together, We Can Make Every Meal Count.
          </h2>
          <p className="mt-6 text-lg text-sage-100">
            These are aspirational impact goals, shown as illustrative demo figures. They are not FoodBridge results.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <GrowthChart />
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {STATS.map((stat, index) => (
              <ImpactStat key={stat.label} {...stat} delay={index * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
