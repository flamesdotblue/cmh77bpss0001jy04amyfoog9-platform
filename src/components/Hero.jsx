import Spline from '@splinetool/react-spline';
import { ShieldCheck, Github, Mail, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="w-full max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 px-3 py-1 text-xs border border-emerald-400/20 mb-4">
            <ShieldCheck className="h-4 w-4" />
            <span>Cybersecurity • Ethical Hacking • Defense-First</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-50">
            Building trustworthy systems and breaking them to make them stronger
          </h1>
          <p className="mt-4 text-neutral-300 max-w-2xl">
            I’m a cybersecurity specialist and ethical hacker focused on web app security, network defense, and cloud hardening. I help teams find vulnerabilities before adversaries do and turn insights into resilient controls.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#skills"
              className="inline-flex items-center gap-2 bg-emerald-500 text-neutral-900 px-5 py-3 rounded-md font-medium hover:bg-emerald-400 transition"
            >
              Explore Skills
            </a>
            <a
              href="#certs"
              className="inline-flex items-center gap-2 border border-neutral-700 bg-neutral-900/70 px-5 py-3 rounded-md font-medium hover:border-neutral-600 transition"
            >
              View Certificates
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-neutral-300">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:you@example.com" className="hover:text-white transition" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
