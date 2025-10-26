import Hero from './components/Hero';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Impact from './components/Impact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter">
      <Hero />
      <main className="relative z-10">
        <Skills />
        <Certificates />
        <Impact />
      </main>
      <footer className="border-t border-neutral-800 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Your Name — Cybersecurity & Ethical Hacking</p>
          <div className="flex items-center gap-4">
            <a href="#skills" className="hover:text-neutral-200 transition">Skills</a>
            <a href="#certs" className="hover:text-neutral-200 transition">Certificates</a>
            <a href="#impact" className="hover:text-neutral-200 transition">Achievements</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
