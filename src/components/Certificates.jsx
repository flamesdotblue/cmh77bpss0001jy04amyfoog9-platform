import { BadgeCheck } from 'lucide-react';

const certificates = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    year: '2023',
    id: 'ABC-SECPLUS-1234',
    link: '#'
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    year: '2024',
    id: 'EC-CEH-5678',
    link: '#'
  },
  {
    name: 'eJPT',
    issuer: 'INE/ElearnSecurity',
    year: '2022',
    id: 'EJPT-9012',
    link: '#'
  },
  {
    name: 'AWS Certified Security – Specialty',
    issuer: 'Amazon Web Services',
    year: '2024',
    id: 'AWSSEC-SSP-3456',
    link: '#'
  }
];

export default function Certificates() {
  return (
    <section id="certs" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-50">Certificates</h2>
          <p className="text-neutral-400 mt-2 max-w-2xl">Industry-recognized certifications that validate hands-on security expertise.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c) => (
            <a key={c.name} href={c.link} target={c.link !== '#' ? '_blank' : undefined} rel={c.link !== '#' ? 'noreferrer' : undefined} className="group rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-700 hover:bg-neutral-900/60 transition block">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-neutral-100 font-medium">{c.name}</h3>
                  <p className="text-neutral-400 text-sm">{c.issuer} • {c.year}</p>
                </div>
                <BadgeCheck className="h-5 w-5 text-emerald-400" />
              </div>
              <p className="mt-3 text-xs text-neutral-500">Credential ID: {c.id}</p>
              <span className="mt-4 inline-block text-emerald-300 text-sm opacity-0 group-hover:opacity-100 transition">View credential →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
