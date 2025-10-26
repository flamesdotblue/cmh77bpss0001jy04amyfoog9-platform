import { Lock, Bug, Network, Cloud, Terminal } from 'lucide-react';

const skills = [
  {
    icon: <Bug className="h-5 w-5" />, title: 'Offensive Security',
    items: ['Web App Pentesting (OWASP Top 10)', 'API Security Testing', 'Mobile & Thick Client Recon', 'Red Team TTPs (MITRE ATT&CK)']
  },
  {
    icon: <Lock className="h-5 w-5" />, title: 'Defensive Security',
    items: ['Threat Modeling', 'SIEM & Log Analytics', 'Identity & Access Hardening', 'Incident Response Playbooks']
  },
  {
    icon: <Network className="h-5 w-5" />, title: 'Network & Infra',
    items: ['Network Pentesting', 'Firewall/WAF Tuning', 'Zero Trust Patterns', 'Container & Kubernetes Security']
  },
  {
    icon: <Cloud className="h-5 w-5" />, title: 'Cloud & DevSecOps',
    items: ['Cloud Posture (AWS/Azure/GCP)', 'IaC Scanning (TF, K8s)', 'CI/CD Security', 'Secrets Management']
  },
  {
    icon: <Terminal className="h-5 w-5" />, title: 'Tooling',
    items: ['Burp Suite Pro', 'Nmap, Wireshark', 'Metasploit, Impacket', 'Python, Bash, Go basics']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.08),rgba(0,0,0,0))]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-50">Core Skills</h2>
          <p className="text-neutral-400 mt-2 max-w-2xl">Breadth across the kill chain with depth in web, cloud, and network security.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.title} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-700 transition">
              <div className="flex items-center gap-2 text-emerald-400">
                <div className="p-2 rounded-md bg-emerald-500/10 border border-emerald-400/20">
                  {s.icon}
                </div>
                <h3 className="font-medium text-neutral-100">{s.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300 list-disc list-inside">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
