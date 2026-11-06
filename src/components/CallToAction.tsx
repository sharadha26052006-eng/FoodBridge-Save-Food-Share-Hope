import { Handshake, HeartHandshake, UtensilsCrossed, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { PHOTOS } from '@/data/siteContent';
import type { ModalKind } from '@/types';

const ACTIONS: { kind: ModalKind; title: string; text: string; cta: string; icon: LucideIcon; primary: boolean }[] = [
  {
    kind: 'donate',
    title: 'Donate Food',
    text: 'Tell us what surplus you have and when it can be collected.',
    cta: 'Donate Food',
    icon: UtensilsCrossed,
    primary: true,
  },
  {
    kind: 'volunteer',
    title: 'Become a Volunteer',
    text: 'Give time to sort, pack, drive or serve at community meals.',
    cta: 'Sign Up to Volunteer',
    icon: HeartHandshake,
    primary: false,
  },
  {
    kind: 'partner',
    title: 'Partner With Us',
    text: 'Bring your charity, business or event network into the bridge.',
    cta: 'Start a Partnership',
    icon: Handshake,
    primary: false,
  },
];

type CallToActionProps = {
  onOpen: (kind: ModalKind) => void;
};

export function CallToAction({ onOpen }: CallToActionProps) {
  return (
    <section id="get-involved" className="relative isolate overflow-hidden py-24 sm:py-32">
      <img
        src={PHOTOS.ctaBackground}
        alt=""
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-forest-900/90" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">Join the movement</p>
          <h2 className="mt-4 text-4xl text-ivory-50 sm:text-5xl lg:text-6xl">Be the Reason Someone Eats Today.</h2>
          <p className="mt-6 text-lg text-sage-100">
            Your surplus food can become someone else's next meal. Join the movement to make a difference.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ACTIONS.map((action, index) => (
            <Reveal key={action.kind} delay={index * 120}>
              <div className="flex h-full flex-col rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sage-100">
                  <action.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-8 text-3xl text-ivory-50">{action.title}</h3>
                <p className="mt-3 flex-1 text-sage-100">{action.text}</p>
                <button
                  type="button"
                  onClick={() => onOpen(action.kind)}
                  className={`mt-8 w-full rounded-full px-6 py-4 text-sm font-semibold transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 ${
                    action.primary
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/30 hover:bg-orange-700 focus-visible:ring-orange-300'
                      : 'bg-ivory-50 text-forest-900 hover:bg-white focus-visible:ring-sage-300'
                  }`}
                >
                  {action.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
