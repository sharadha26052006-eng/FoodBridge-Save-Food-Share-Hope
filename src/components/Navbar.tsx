import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { NAV_LINKS } from '@/data/siteContent';
import type { ModalKind } from '@/types';

type NavbarProps = {
  onOpen: (kind: ModalKind) => void;
};

export function Navbar({ onOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openFromMenu = (kind: ModalKind) => {
    setMenuOpen(false);
    onOpen(kind);
  };

  const surface = scrolled || menuOpen
    ? 'bg-ivory-50/95 shadow-[0_1px_0_rgba(36,74,56,0.12)] backdrop-blur-md'
    : 'bg-transparent';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${surface}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main">
        <a href="#home" className="rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-forest-100" onClick={() => setMenuOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-2 text-sm font-semibold text-forest-900 transition-colors hover:text-orange-600 focus:outline-none focus-visible:text-orange-600"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-orange-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpen('donate')}
            className="hidden rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-900/15 transition hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:inline-flex"
          >
            Donate Food
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-200 bg-white text-forest-900 transition hover:border-forest-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-forest-100 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-500 ease-out lg:hidden ${
          menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-5 mb-5 space-y-1 rounded-2xl border border-ivory-200 bg-white p-4 shadow-lg sm:mx-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-forest-900 transition hover:bg-forest-50 hover:text-orange-600"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => openFromMenu('donate')}
            className="mt-2 w-full rounded-full bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            Donate Food
          </button>
        </div>
      </div>
    </header>
  );
}
