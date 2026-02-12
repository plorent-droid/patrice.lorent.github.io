import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown, Terminal, Code, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Système de Gestion Cloud",
      description: "Architecture microservices avec Kubernetes et Docker pour une plateforme SaaS gérant 100k+ utilisateurs",
      tech: ["React", "Node.js", "PostgreSQL", "Kubernetes"],
      link: "#"
    },
    {
      title: "Application Mobile FinTech",
      description: "App de gestion financière avec authentification biométrique et synchronisation en temps réel",
      tech: ["React Native", "Firebase", "TypeScript", "Redux"],
      link: "#"
    },
    {
      title: "Plateforme E-commerce",
      description: "Solution complète avec panier, paiement sécurisé et tableau de bord admin",
      tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      link: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Visualisation de données en temps réel avec graphiques interactifs et exports personnalisés",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      link: "#"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Azure"] },
    { category: "Outils", items: ["Git", "Figma", "Jest", "Webpack", "Linux"] }
  ];

  const experiences = [
    {
      title: "Lead Developer",
      company: "TechCorp International",
      period: "2022 - Présent",
      description: "Direction technique d'une équipe de 8 développeurs. Conception d'architectures scalables et migration vers le cloud."
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Développement de features complètes, de la conception à la production. Amélioration des performances de 40%."
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Développement web et maintenance d'applications client. Apprentissage des meilleures pratiques agiles."
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Cursor glow effect */}
      <div 
        className="pointer-events-none fixed w-96 h-96 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background: 'radial-gradient(circle, rgba(0,255,150,0.15) 0%, transparent 70%)',
          opacity: isVisible ? 1 : 0
        }}
      />

      {/* Grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated grid background */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(rgba(0,255,150,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,150,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              animation: 'gridScroll 20s linear infinite'
            }}
          />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-lime-400 rotate-45"
            style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute bottom-32 right-20 w-24 h-24 border-4 border-cyan-400"
            style={{ animation: 'float 8s ease-in-out infinite 1s' }} />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-lime-400 opacity-20"
            style={{ animation: 'pulse 4s ease-in-out infinite' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 border-2 border-lime-400 bg-lime-400/10 backdrop-blur-sm
            transform -rotate-2"
            style={{ animation: 'slideInLeft 0.8s ease-out' }}>
            <span className="text-lime-400 font-mono text-sm tracking-wider">DISPONIBLE POUR PROJETS</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none"
            style={{ 
              animation: 'slideInUp 1s ease-out 0.2s both',
              fontFamily: "'Space Mono', monospace"
            }}>
            <span className="block text-white">DÉVELOPPEUR</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
              FULL STACK
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-mono"
            style={{ animation: 'slideInUp 1s ease-out 0.4s both' }}>
            Je transforme des idées en expériences digitales exceptionnelles.
            <span className="text-lime-400"> Code propre. Architecture solide. Design impactant.</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12"
            style={{ animation: 'slideInUp 1s ease-out 0.6s both' }}>
            <a href="#contact" 
              className="group px-8 py-4 bg-lime-400 text-black font-bold border-4 border-black
                hover:bg-transparent hover:text-lime-400 hover:border-lime-400 transition-all duration-300
                transform hover:scale-105 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,255,150,1)]">
              DÉMARRER UN PROJET
              <ExternalLink className="inline ml-2 w-5 h-5" />
            </a>
            <a href="#projects" 
              className="px-8 py-4 border-4 border-white text-white font-bold
                hover:bg-white hover:text-black transition-all duration-300
                transform hover:scale-105 shadow-[8px_8px_0px_rgba(255,255,255,0.2)]">
              VOIR MES PROJETS
            </a>
          </div>

          <div className="flex gap-6 justify-center"
            style={{ animation: 'slideInUp 1s ease-out 0.8s both' }}>
            <a href="https://github.com/plorent-droid" target="_blank" rel="noopener noreferrer"
              className="p-3 border-2 border-gray-600 hover:border-lime-400 hover:bg-lime-400/10 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/patrice-lorent-57643683" target="_blank" rel="noopener noreferrer"
              className="p-3 border-2 border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:patrice.lorent@gmail.com"
              className="p-3 border-2 border-gray-600 hover:border-lime-400 hover:bg-lime-400/10 transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-lime-400" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Code className="w-12 h-12 text-lime-400" />
            <h2 className="text-5xl md:text-7xl font-black" style={{ fontFamily: "'Space Mono', monospace" }}>
              PROJETS
              <span className="block text-2xl text-gray-500 font-normal mt-2">Mes réalisations récentes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx}
                className="group border-4 border-white bg-black p-8 
                  hover:border-lime-400 hover:shadow-[12px_12px_0px_rgba(0,255,150,0.5)]
                  transition-all duration-300 transform hover:-translate-y-2"
                style={{ animation: `slideInRight 0.6s ease-out ${idx * 0.1}s both` }}>
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-lime-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-6 h-6 text-gray-600 group-hover:text-lime-400 transition-colors" />
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx}
                      className="px-3 py-1 text-xs font-mono border-2 border-gray-700 
                        group-hover:border-lime-400 group-hover:text-lime-400 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t-2 border-gray-800 group-hover:border-lime-400 transition-colors">
                  <a href={project.link}
                    className="inline-flex items-center gap-2 text-lime-400 font-mono text-sm 
                      hover:gap-4 transition-all duration-300">
                    VOIR LE PROJET →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Terminal className="w-12 h-12 text-cyan-400" />
            <h2 className="text-5xl md:text-7xl font-black" style={{ fontFamily: "'Space Mono', monospace" }}>
              COMPÉTENCES
              <span className="block text-2xl text-gray-500 font-normal mt-2">Technologies & outils maîtrisés</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx}
                className="border-4 border-cyan-400 bg-black p-6"
                style={{ animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both` }}>
                
                <div className="bg-cyan-400 text-black px-4 py-2 font-black text-lg mb-6 -mx-6 -mt-6">
                  {skillGroup.category}
                </div>

                <ul className="space-y-3">
                  {skillGroup.items.map((item, itemIdx) => (
                    <li key={itemIdx}
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 
                        transition-colors cursor-default group">
                      <span className="w-2 h-2 bg-cyan-400 group-hover:animate-pulse" />
                      <span className="font-mono text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Briefcase className="w-12 h-12 text-lime-400" />
            <h2 className="text-5xl md:text-7xl font-black" style={{ fontFamily: "'Space Mono', monospace" }}>
              EXPÉRIENCE
              <span className="block text-2xl text-gray-500 font-normal mt-2">Mon parcours professionnel</span>
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx}
                className="border-l-8 border-lime-400 pl-8 py-6 hover:bg-zinc-950 
                  transition-all duration-300 -ml-4"
                style={{ animation: `slideInLeft 0.6s ease-out ${idx * 0.15}s both` }}>
                
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-3xl font-bold text-lime-400 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-white font-mono">
                      {exp.company}
                    </p>
                  </div>
                  <span className="px-4 py-2 border-2 border-gray-700 font-mono text-sm text-gray-400">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 bg-gradient-to-br from-lime-400 to-cyan-400">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 text-center"
            style={{ fontFamily: "'Space Mono', monospace" }}>
            TRAVAILLONS ENSEMBLE
          </h2>
          <p className="text-black text-xl text-center mb-12 font-mono">
            Un projet en tête ? Discutons-en autour d'un café (virtuel) !
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black font-bold mb-2 font-mono">NOM</label>
                <input type="text" 
                  className="w-full px-4 py-3 border-4 border-black bg-white text-black 
                    focus:outline-none focus:border-black focus:shadow-[4px_4px_0px_rgba(0,0,0,1)]
                    transition-shadow font-mono"
                  placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-black font-bold mb-2 font-mono">EMAIL</label>
                <input type="email" 
                  className="w-full px-4 py-3 border-4 border-black bg-white text-black 
                    focus:outline-none focus:border-black focus:shadow-[4px_4px_0px_rgba(0,0,0,1)]
                    transition-shadow font-mono"
                  placeholder="john@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-black font-bold mb-2 font-mono">MESSAGE</label>
              <textarea 
                className="w-full px-4 py-3 border-4 border-black bg-white text-black h-40
                  focus:outline-none focus:border-black focus:shadow-[4px_4px_0px_rgba(0,0,0,1)]
                  transition-shadow resize-none font-mono"
                placeholder="Parlez-moi de votre projet..."></textarea>
            </div>

            <button type="submit"
              className="w-full md:w-auto px-12 py-4 bg-black text-lime-400 font-black text-lg
                border-4 border-black hover:bg-transparent hover:text-black 
                transition-all duration-300 transform hover:scale-105
                shadow-[8px_8px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
              ENVOYER LE MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-black border-t-4 border-lime-400">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 font-mono">
            © 2024 - Conçu & développé avec{' '}
            <span className="text-lime-400">{'<3'}</span>
          </p>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-20px) rotate(45deg);
          }
        }

        @keyframes gridScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
