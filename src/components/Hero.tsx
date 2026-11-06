import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { PHOTOS } from '@/data/siteContent';
import type { ModalKind } from '@/types';

type HeroProps = {
  onOpen: (kind: ModalKind) => void;
};

export function Hero({ onOpen }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:min-h-screen lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -right-32 -top-24 h-[32rem] w-[32rem] rounded-full bg-sage-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-sage-300 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest-700">
            <Leaf className="h-3.5 w-3.5 text-sage-600" aria-hidden="true" />
            Every Meal Matters. Every Action Counts.
          </p>

          <h1 className="animate-fade-in mt-8 text-5xl font-medium sm:text-6xl lg:text-7xl">
            Good Food Deserves
            <span className="mt-2 block text-forest-600 italic">A Second Chance.</span>
          </h1>

          <p className="animate-fade-in mt-8 max-w-xl text-lg text-ivory-700 sm:text-xl">
            Every day, perfectly good food goes to waste while communities go hungry. FoodBridge brings donors and
            people together to turn surplus into shared hope.
          </p>

          <div className="animate-fade-in mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => onOpen('donate')}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
            >
              Donate Surplus Food
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <a
              href="#problem"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-300 bg-white/60 px-8 py-4 text-base font-semibold text-forest-800 transition hover:border-forest-500 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-forest-100"
            >
              Discover Our Mission
            </a>
          </div>

          <p className="animate-fade-in mt-10 flex items-center gap-2 text-sm font-semibold text-forest-700">
            <Sparkles className="h-4 w-4 text-orange-500" aria-hidden="true" />
            Rescue food. Share hope. Create impact.
          </p>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-sage-200 shadow-2xl shadow-forest-900/15 sm:max-w-lg">
            <img
              src={PHOTOS.hero}
              alt="Prepared meals packed in lunch boxes, ready to be shared with people in need"
              className="h-full w-full object-cover"
              width={1200}
              height={1500}
            />
          </div>

          <div className="animate-float absolute -left-4 bottom-12 max-w-[15rem] rounded-2xl border border-ivory-200 bg-white/95 p-5 shadow-xl backdrop-blur sm:-left-10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                <Leaf className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-forest-900">Surplus in. Meals out.</p>
            </div>
            <p className="mt-3 text-sm leading-normal text-ivory-700">
              Edible food from kitchens and events, delivered to the people who need it most.
            </p>
          </div>

          <div className="absolute -right-2 top-10 hidden rounded-full border border-ivory-200 bg-ivory-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-orange-700 shadow-lg sm:block">
            Surplus rescued and shared
          </div>
        </div>
      </div>
    </section>
  );
}
