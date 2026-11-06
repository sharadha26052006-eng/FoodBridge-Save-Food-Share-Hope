export const PHOTOS = {
  hero: 'https://images.pexels.com/photos/6995260/pexels-photo-6995260.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop',
  wasteSide: 'https://images.pexels.com/photos/7512979/pexels-photo-7512979.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop',
  needSide: 'https://images.pexels.com/photos/9532273/pexels-photo-9532273.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop',
  restaurant: 'https://images.pexels.com/photos/8629083/pexels-photo-8629083.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
  ngo: 'https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
  community: 'https://images.pexels.com/photos/10579215/pexels-photo-10579215.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop',
  ctaBackground: 'https://images.pexels.com/photos/3184182/pexels-photo-3184182.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1100&fit=crop',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'The Problem', href: '#problem' },
  { label: 'Our Solution', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Our Impact', href: '#impact' },
] as const;

export const MODAL_COPY = {
  donate: {
    eyebrow: 'Donation demo',
    title: 'Donate Surplus Food',
  },
  volunteer: {
    eyebrow: 'Volunteer',
    title: 'Become a Volunteer',
  },
  partner: {
    eyebrow: 'Partnership',
    title: 'Partner With Us',
  },
} as const;
