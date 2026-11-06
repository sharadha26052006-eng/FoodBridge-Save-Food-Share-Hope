import { BarChart3, Building2, LifeBuoy, Truck, UtensilsCrossed, Users, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const FEATURES: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Easy Food Donation',
    text: 'Describe what you have in under a minute. Categories, quantities and pickup details are all it takes.',
    icon: UtensilsCrossed,
  },
  {
    title: 'NGO Partnerships',
    text: 'Vetted charities and community kitchens are ready to receive food that matches their capacity.',
    icon: Building2,
  },
  {
    title: 'Pickup Coordination',
    text: 'Agree on a convenient window so collection fits around your service and keeps food fresh.',
    icon: Truck,
  },
  {
    title: 'Community Participation',
    text: 'Neighbours, students and local businesses can help sort, pack and deliver meals.',
    icon: Users,
  },
  {
    title: 'Food Rescue Opportunities',
    text: 'Be alerted when extra food is available nearby, from last-minute event leftovers to bakery close-outs.',
    icon: LifeBuoy,
  },
  {
    title: 'Transparent Impact Tracking',
    text: 'See where donated food went, with clear records that help donors report their contribution.',
    icon: BarChart3,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">Platform features</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Everything a good rescue needs, in one place.</h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 120}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ivory-300 bg-white p-8 transition duration-500 hover:-translate-y-1.5 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-900/10">
                <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sage-100 transition-transform duration-700 group-hover:scale-150" aria-hidden="true" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-100 text-forest-700 transition-colors duration-500 group-hover:bg-orange-500 group-hover:text-white">
                  <feature.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="relative mt-8 text-2xl">{feature.title}</h3>
                <p className="relative mt-3 text-ivory-700">{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
