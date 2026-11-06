import { Handshake, Store, Users } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const ROLES = [
  {
    icon: Store,
    title: 'Food donors',
    text: 'Restaurants, hotels, event organisers and households share what is still good to eat.',
  },
  {
    icon: Handshake,
    title: 'NGOs and charities',
    text: 'Trusted local partners match each donation with the kitchens and programmes that can use it.',
  },
  {
    icon: Users,
    title: 'Communities',
    text: 'Families, shelters and neighbours receive meals through coordinated, dignified distribution.',
  },
];

const PATH_DONOR_TO_HUB = 'M200 110 L200 168';
const PATH_HUB_TO_NGO = 'M158 296 Q104 336 104 398';
const PATH_HUB_TO_COMMUNITY = 'M242 296 Q296 336 296 398';
const PATH_NGO_TO_COMMUNITY = 'M184 440 L216 440';

export function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">Our solution</p>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">One Connection. A World of Difference.</h2>
            <p className="mt-6 text-lg text-ivory-700">
              FoodBridge links the people with surplus to the people who can get it to a table. Every donation
              becomes a coordinated handover, not a guess.
            </p>
          </Reveal>

          <ul className="mt-12 space-y-6">
            {ROLES.map((role, index) => (
              <li key={role.title}>
                <Reveal delay={index * 120}>
                  <div className="flex gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-forest-700">
                      <role.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-2xl">{role.title}</h3>
                      <p className="mt-2 text-ivory-700">{role.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={150}>
          <div className="relative mx-auto w-full max-w-md rounded-[2.5rem] bg-sage-50 p-6 sm:p-8">
            <svg
              viewBox="0 0 400 540"
              className="h-auto w-full"
              role="img"
              aria-labelledby="ecosystem-title ecosystem-desc"
            >
              <title id="ecosystem-title">FoodBridge connection diagram</title>
              <desc id="ecosystem-desc">
                Food donors send surplus to the FoodBridge hub, which routes it to NGOs and then to communities.
              </desc>

              <path id="p-donor-hub" d={PATH_DONOR_TO_HUB} stroke="#7b9869" strokeWidth="3" fill="none" strokeDasharray="6 8" />
              <path id="p-hub-ngo" d={PATH_HUB_TO_NGO} stroke="#7b9869" strokeWidth="3" fill="none" strokeDasharray="6 8" />
              <path id="p-hub-community" d={PATH_HUB_TO_COMMUNITY} stroke="#7b9869" strokeWidth="3" fill="none" strokeDasharray="6 8" />
              <path d={PATH_NGO_TO_COMMUNITY} stroke="#e4692c" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="2 7" />

              {[
                { href: '#p-donor-hub', dur: '3.2s', begin: '0s' },
                { href: '#p-hub-ngo', dur: '3.6s', begin: '0.8s' },
                { href: '#p-hub-community', dur: '3.6s', begin: '1.6s' },
              ].map((flow) => (
                <circle key={flow.href} r="7" fill="#e4692c">
                  <animateMotion dur={flow.dur} begin={flow.begin} repeatCount="indefinite">
                    <mpath href={flow.href} />
                  </animateMotion>
                </circle>
              ))}

              <g>
                <rect x="90" y="30" width="220" height="82" rx="22" fill="#ffffff" stroke="#d4e0c9" strokeWidth="2" />
                <text x="200" y="66" textAnchor="middle" className="fill-forest-900" fontFamily="Fraunces, serif" fontSize="22">
                  Food donors
                </text>
                <text x="200" y="92" textAnchor="middle" fill="#5f5846" fontFamily="Manrope, sans-serif" fontSize="13">
                  Restaurants, hotels, events, homes
                </text>
              </g>

              <g>
                <circle cx="200" cy="232" r="66" fill="#244a38" />
                <circle cx="200" cy="232" r="82" fill="none" stroke="#b5c9a6" strokeWidth="1.5" strokeDasharray="3 6" />
                <text x="200" y="228" textAnchor="middle" fill="#fbf7ec" fontFamily="Fraunces, serif" fontSize="22">
                  FoodBridge
                </text>
                <text x="200" y="252" textAnchor="middle" fill="#e9dfc6" fontFamily="Manrope, sans-serif" fontSize="12">
                  Matches and routes
                </text>
              </g>

              <g>
                <rect x="20" y="398" width="168" height="84" rx="22" fill="#ffffff" stroke="#d4e0c9" strokeWidth="2" />
                <text x="104" y="432" textAnchor="middle" className="fill-forest-900" fontFamily="Fraunces, serif" fontSize="20">
                  NGO partners
                </text>
                <text x="104" y="456" textAnchor="middle" fill="#5f5846" fontFamily="Manrope, sans-serif" fontSize="12">
                  Verify and collect
                </text>
              </g>

              <g>
                <rect x="216" y="398" width="168" height="84" rx="22" fill="#ffffff" stroke="#d4e0c9" strokeWidth="2" />
                <text x="300" y="432" textAnchor="middle" className="fill-forest-900" fontFamily="Fraunces, serif" fontSize="20">
                  Communities
                </text>
                <text x="300" y="456" textAnchor="middle" fill="#5f5846" fontFamily="Manrope, sans-serif" fontSize="12">
                  Meals reach people
                </text>
              </g>

              <text x="200" y="516" textAnchor="middle" fill="#8c8165" fontFamily="Manrope, sans-serif" fontSize="12">
                Illustrative model of the coordinated flow
              </text>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
