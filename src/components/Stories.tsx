import { Reveal } from '@/components/Reveal';
import { PHOTOS } from '@/data/siteContent';

const STORIES = [
  {
    image: PHOTOS.restaurant,
    alt: 'A chef preparing fresh vegetables in a busy restaurant kitchen',
    role: 'A neighbourhood restaurant',
    title: 'The bistro that stopped binning bread',
    text: 'At closing time, the kitchen used to throw away a full tray of bread and vegetables. Now the team sends a quick note through FoodBridge, and the bread is on a neighbour\'s table by morning.',
  },
  {
    image: PHOTOS.ngo,
    alt: 'Volunteers packing food donations into boxes at a community centre',
    role: 'A local NGO',
    title: 'The food bank that got a call at dawn',
    text: 'A volunteer coordinator used to chase donations by phone. With FoodBridge, a hotel\'s breakfast surplus arrives on a scheduled pickup, sorted and ready to share before the first queue forms.',
  },
  {
    image: PHOTOS.community,
    alt: 'Volunteers serving warm meals to people at a community event',
    role: 'A community',
    title: 'A table that fills every evening',
    text: 'Families on a low-income street now gather for a warm dinner made from event leftovers. Nobody asks for proof of need. They simply sit down, eat and talk with their neighbours.',
  },
];

export function Stories() {
  return (
    <section id="stories" className="bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">Community stories</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Every Meal Has a Story.</h2>
          <p className="mt-6 text-lg text-ivory-700">
            Three illustrative examples of how redistribution can look in practice. These are fictional stories, not
            testimonials from real people.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STORIES.map((story, index) => (
            <Reveal key={story.title} delay={index * 140}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ivory-300 bg-ivory-50 shadow-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest-900/10">
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.alt}
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={700}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ivory-50/95 px-3 py-1 text-xs font-semibold text-forest-900">
                    Illustrative example
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">{story.role}</p>
                  <h3 className="mt-3 text-2xl">{story.title}</h3>
                  <p className="mt-4 text-ivory-700">{story.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
