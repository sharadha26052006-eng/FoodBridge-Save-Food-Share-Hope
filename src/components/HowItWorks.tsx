import { CalendarClock, HeartHandshake, Handshake, PackagePlus, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const STEPS: { number: string; title: string; text: string; icon: LucideIcon }[] = [
  {
    number: '01',
    title: 'Share Surplus Food',
    text: 'Donors provide details about available edible food.',
    icon: PackagePlus,
  },
  {
    number: '02',
    title: 'Connect With NGOs',
    text: 'Suitable community organisations are connected with donors.',
    icon: Handshake,
  },
  {
    number: '03',
    title: 'Coordinate Pickup',
    text: 'Food collection is arranged conveniently.',
    icon: CalendarClock,
  },
  {
    number: '04',
    title: 'Deliver Hope',
    text: 'Food reaches communities and people who need it.',
    icon: HeartHandshake,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-forest-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">How it works</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Small Steps. Meaningful Change.</h2>
        </Reveal>

        <div className="relative mt-20 grid gap-12 md:grid-cols-4 md:gap-6">
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-px border-t-2 border-dashed border-sage-400 md:block"
            aria-hidden="true"
          />
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 140} className="relative">
              <div className="group flex flex-col items-center text-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-sage-300 bg-white shadow-lg shadow-forest-900/5 transition duration-500 group-hover:-translate-y-1 group-hover:border-orange-400 group-hover:shadow-xl">
                  <step.icon className="h-8 w-8 text-forest-700 transition-colors duration-500 group-hover:text-orange-600" aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-forest-800 font-display text-sm text-ivory-50">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl">{step.title}</h3>
                <p className="mt-3 max-w-xs text-ivory-700">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
