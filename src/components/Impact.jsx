import { Trophy, Users, Target, Star } from 'lucide-react';

const achievements = [
  {
    icon: <Target className="h-5 w-5" />, title: '100+ critical findings remediated',
    desc: 'Led remediation across web, API, and cloud misconfigurations with measurable risk reduction.'
  },
  {
    icon: <Star className="h-5 w-5" />, title: 'Top 1% on private bug bounty programs',
    desc: 'Delivered reproducible PoCs and collaborated closely with engineering teams.'
  },
  {
    icon: <Trophy className="h-5 w-5" />, title: 'CTF podium finishes',
    desc: 'Placed in multiple CTFs focusing on web exploitation, forensics, and reversing.'
  }
];

const memberships = [
  { name: 'OWASP', role: 'Community Member', link: 'https://owasp.org' },
  { name: 'DEF CON Groups', role: 'Participant', link: 'https://defcon.org' },
  { name: 'HackerOne', role: 'Researcher', link: 'https://www.hackerone.com' },
  { name: 'Bugcrowd', role: 'Researcher', link: 'https://www.bugcrowd.com' },
  { name: 'Anonymous', role: 'Community Supporter', link: '#' }
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Achievements */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-50">Achievements</h2>
            <p className="text-neutral-400 mt-2 max-w-2xl">Highlights from security research, assessments, and competitive events.</p>

            <div className="mt-6 space-y-4">
              {achievements.map((a) => (
                <div key={a.title} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-emerald-500/10 border border-emerald-400/20 text-emerald-300">
                      {a.icon}
                    </div>
                    <div>
                      <h3 className="text-neutral-100 font-medium">{a.title}</h3>
                      <p className="text-neutral-400 text-sm mt-1">{a.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Member Of */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-50">Member of</h2>
            <p className="text-neutral-400 mt-2 max-w-2xl">Communities and platforms I collaborate with to advance security.</p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {memberships.map((m) => (
                <li key={m.name} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-700 transition">
                  <a href={m.link} target={m.link !== '#' ? '_blank' : undefined} rel={m.link !== '#' ? 'noreferrer' : undefined} className="block">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-neutral-100 font-medium">{m.name}</p>
                        <p className="text-neutral-400 text-sm">{m.role}</p>
                      </div>
                      <Users className="h-5 w-5 text-emerald-300" />
                    </div>
                    <span className="text-emerald-300 text-sm inline-block mt-3">{m.link !== '#' ? 'Visit →' : '—'}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
