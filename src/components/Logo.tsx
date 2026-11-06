import { Sprout } from 'lucide-react';

type LogoProps = {
  tone?: 'light' | 'dark';
};

export function Logo({ tone = 'dark' }: LogoProps) {
  const textColor = tone === 'light' ? 'text-ivory-50' : 'text-forest-900';
  return (
    <span className="inline-flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 text-ivory-50 shadow-sm">
        <Sprout className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
      </span>
      <span className={`font-display text-xl font-medium tracking-tight ${textColor}`}>
        Food<span className="italic text-orange-600">Bridge</span>
      </span>
    </span>
  );
}
