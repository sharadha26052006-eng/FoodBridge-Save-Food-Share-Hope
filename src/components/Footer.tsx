import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Logo } from '@/components/Logo';
import type { ModalKind } from '@/types';

const SITE_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Our Impact', href: '#impact' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: Instagram },
  { label: 'Facebook', icon: Facebook },
  { label: 'LinkedIn', icon: Linkedin },
];

type FooterProps = {
  onOpen: (kind: ModalKind) => void;
};

export function Footer({ onOpen }: FooterProps) {
  return (
    <footer id="contact" className="bg-ivory-100 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-ivory-700">
              FoodBridge connects surplus food with the NGOs and communities that need it, so good food is shared
              instead of wasted.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <span
                  key={social.label}
                  role="img"
                  aria-label={`${social.label} link placeholder`}
                  title={`${social.label} (coming soon)`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory-300 bg-white text-forest-800"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-forest-900">Explore</h2>
            <ul className="mt-5 space-y-3">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-ivory-700 transition hover:text-orange-600 focus:outline-none focus-visible:text-orange-600">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-forest-900">Contact</h2>
            <p className="mt-5 text-ivory-700">Interested in working with us? Send us a partnership enquiry.</p>
            <button
              type="button"
              onClick={() => onOpen('partner')}
              className="mt-4 font-semibold text-orange-700 underline-offset-4 transition hover:text-orange-800 hover:underline focus:outline-none focus-visible:underline"
            >
              Start a partnership enquiry
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory-300 pt-8 text-sm text-ivory-600 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} FoodBridge. All rights reserved.</p>
          <p>Demonstration website. Forms on this page do not send data to any NGO or database.</p>
        </div>
      </div>
    </footer>
  );
}
