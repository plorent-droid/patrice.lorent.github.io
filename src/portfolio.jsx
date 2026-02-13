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
      title: "🎙️ Transcription Audio IA - Whisper",
      description: "Application web de transcription audio utilisant OpenAI Whisper. Interface drag & drop, support multi-formats (MP3, WAV, M4A), déployée sur Hugging Face Spaces",
      tech: ["Python", "Flask", "OpenAI Whisper", "Transformers", "Hugging Face"],
      link: "https://huggingface.co/spaces/[ton-username]/whisper-transcription",
      company: "Projet Personnel",
      period: "2024",
      github: "https://github.com/patricelorent/whisper-transcription"
    },
    {
      title: "📊 Gestionnaire de Tâches VBA Excel",
      description: "Application Excel VBA complète avec dashboard interactif, graphiques de progression, filtres dynamiques et export PDF. Interface utilisateur intuitive avec menu personnalisé",
      tech: ["VBA", "Excel", "Automatisation", "Data Visualization"],
      link: "#",
      company: "Projet Personnel",
      period: "2024",
      github: "https://github.com/patricelorent/vba-task-manager"
    },
    {
      title: "🚀 API REST Blog - Symfony",
      description: "API REST professionnelle avec authentification JWT, gestion d'articles et commentaires, documentation Swagger/OpenAPI. Architecture hexagonale avec tests unitaires",
      tech: ["Symfony 6", "API Platform", "Doctrine ORM", "JWT", "MySQL"],
      link: "#",
      company: "Projet Personnel",
      period: "2024",
      github: "https://github.com/patricelorent/symfony-blog-api"
    },
    {
      title: "📈 Dashboard Analytics React",
      description: "Dashboard moderne avec graphiques interactifs (Recharts), statistiques en temps réel, tableaux de données. Design responsive avec Tailwind CSS",
      tech: ["React 18", "Recharts", "React Query", "Tailwind CSS", "Axios"],
      link: "#",
      company: "Projet Personnel",
      period: "2024",
      github: "https://github.com/patricelorent/react-analytics-dashboard"
    },
    {
      title: "🐳 Application Conteneurisée DevOps",
      description: "Stack complète Node.js + MySQL conteneurisée avec Docker. Déploiement automatisé sur Kubernetes (Minikube). CI/CD avec GitHub Actions, health checks et scaling",
      tech: ["Docker", "Kubernetes", "Node.js", "MySQL", "CI/CD"],
      link: "#",
      company: "Projet Personnel",
      period: "2024",
      github: "https://github.com/patricelorent/devops-kubernetes-app"
    },
    {
      title: "💻 Portfolio IT Moderne",
      description: "Portfolio personnel avec design néo-brutaliste cyberpunk, animations fluides, sections détaillées. Déployé sur GitHub Pages avec workflow automatisé",
      tech: ["React", "Tailwind CSS", "Vite", "GitHub Pages", "GitHub Actions"],
      link: "https://patricelorent.github.io/portfolio",
      company: "Projet Personnel",
      period: "2025",
      github: "https://github.com/patricelorent/portfolio"
    }
  ];

  const skills = [
    { 
      category: "Langages", 
      items: ["PHP 7/8", "Python", "JavaScript", "SQL", "HTML5/CSS3", "VBA"] 
    },
    { 
      category: "Frameworks", 
      items: ["Symfony 2", "Zend Framework", "Struts 1&2", "jQuery", "JPA/EJB"] 
    },
    { 
      category: "Bases de données", 
      items: ["MySQL", "SQL Server", "Oracle", "HSQLDB", "Access"] 
    },
    { 
      category: "DevOps & Cloud", 
      items: ["Docker", "Kubernetes", "Git/GitHub", "CI/CD", "Linux/Windows Server"] 
    },
    { 
      category: "CMS & Outils", 
      items: ["WordPress", "Joomla", "VSCode", "Eclipse", "Maven", "Photoshop"] 
    },
    { 
      category: "Méthodologies", 
      items: ["Agile/Scrum", "UML", "Merise", "Gestion de projet", "Code Reviews"] 
    }
  ];

  const experiences = [
    {
      title: "Ingénieur d'Études & Développeur IT",
      company: "DOCAPOST DPS – La Défense (92)",
      period: "Oct 2015 - Aujourd'hui (10 ans)",
      description: "Développement et maintenance d'applications de traitement de flux éditiques. Migration PHP5→PHP7/8, conception d'algorithmes complexes, modernisation de la stack (Docker, Python, DevOps). Mise en place de bonnes pratiques Git et code reviews.",
      highlights: ["Migration legacy", "Traitement flux éditiques", "Automatisation", "DevOps"]
    },
    {
      title: "Développeur Web Full-Stack",
      company: "SAS AVÉO – Colombes (92)",
      period: "Nov 2010 - Déc 2013 (3 ans)",
      description: "Création site intranet entreprise, dashboard interactif de pilotage chantiers, application gestion chantiers (Zend 2), app iOS expertise terrain, serveur mail automatisé. Développement d'outils Excel/VBA pour automatisation métier.",
      highlights: ["Zend Framework", "App iOS", "Automatisation", "Full-Stack"]
    },
    {
      title: "Analyste Programmeur Freelance",
      company: "Société DIMENSIO – Latour-de-France (66)",
      period: "Mars 2014 - Août 2014 (6 mois)",
      description: "Développement application métier pour diagnostic technique immobilier avec génération automatique de rapports professionnels (Excel/VBA + Word).",
      highlights: ["VBA", "Freelance", "Solution métier"]
    },
    {
      title: "Contrôleur de Gestion & Développeur",
      company: "SARL LORENT – Champigny-sur-Marne (94)",
      period: "Nov 2005 - Oct 2010 (5 ans)",
      description: "Développement d'outils de contrôle de gestion et d'aide à la décision. Création de tableaux de bord, applications Excel/VBA, et site web de la société. Double compétence technique et métier.",
      highlights: ["Contrôle de gestion", "Business Intelligence", "VBA"]
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
            <span className="text-lime-400 font-mono text-sm tracking-wider">DISPONIBLE • 10+ ANS D'EXPÉRIENCE</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none"
            style={{ 
              animation: 'slideInUp 1s ease-out 0.2s both',
              fontFamily: "'Space Mono', monospace"
            }}>
            <span className="block text-white">PATRICE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">
              LORENT
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-mono"
            style={{ animation: 'slideInUp 1s ease-out 0.4s both' }}>
            Ingénieur développement PHP & Python • Expert en traitement de flux éditiques
            <span className="text-lime-400 block mt-2">Migration legacy • Automatisation • Architecture solide</span>
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
            <a href="https://github.com/patricelorent" target="_blank" rel="noopener noreferrer"
              className="p-3 border-2 border-gray-600 hover:border-lime-400 hover:bg-lime-400/10 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/patrice-lorent" target="_blank" rel="noopener noreferrer"
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
                
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold group-hover:text-lime-400 transition-colors flex-1">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex-shrink-0 ml-2">
                      <Github className="w-6 h-6 text-gray-600 group-hover:text-lime-400 transition-colors" />
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4 text-sm font-mono text-cyan-400">
                  <span>{project.company}</span>
                  <span className="text-gray-600">•</span>
                  <span>{project.period}</span>
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

                {(project.link && project.link !== '#') && (
                  <div className="mt-6 pt-6 border-t-2 border-gray-800 group-hover:border-lime-400 transition-colors">
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lime-400 font-mono text-sm 
                        hover:gap-4 transition-all duration-300">
                      VOIR LE PROJET <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Formation & Certifications Section */}
      <section id="formation" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Terminal className="w-12 h-12 text-lime-400" />
            <h2 className="text-5xl md:text-7xl font-black" style={{ fontFamily: "'Space Mono', monospace" }}>
              FORMATION
              <span className="block text-2xl text-gray-500 font-normal mt-2">Certifications & diplômes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-4 border-lime-400 bg-black p-6"
              style={{ animation: 'slideInLeft 0.6s ease-out' }}>
              <div className="bg-lime-400 text-black px-4 py-2 font-black text-lg mb-6 -mx-6 -mt-6">
                CERTIFICATIONS RÉCENTES
              </div>
              <ul className="space-y-4">
                <li className="border-l-4 border-cyan-400 pl-4">
                  <div className="text-cyan-400 font-bold">2026</div>
                  <div className="text-white font-mono">GitHub Copilot</div>
                  <div className="text-gray-500 text-sm">Docaposte Institute</div>
                </li>
                <li className="border-l-4 border-cyan-400 pl-4">
                  <div className="text-cyan-400 font-bold">2025</div>
                  <div className="text-white font-mono">Automatisation avec Python</div>
                  <div className="text-gray-500 text-sm">Docaposte Institute</div>
                </li>
                <li className="border-l-4 border-cyan-400 pl-4">
                  <div className="text-cyan-400 font-bold">2023</div>
                  <div className="text-white font-mono">Initiation Cloud/DevOps</div>
                  <div className="text-gray-500 text-sm">Docaposte Institute</div>
                </li>
              </ul>
            </div>

            <div className="border-4 border-lime-400 bg-black p-6"
              style={{ animation: 'slideInRight 0.6s ease-out 0.2s both' }}>
              <div className="bg-lime-400 text-black px-4 py-2 font-black text-lg mb-6 -mx-6 -mt-6">
                DIPLÔMES
              </div>
              <ul className="space-y-4">
                <li className="border-l-4 border-cyan-400 pl-4">
                  <div className="text-cyan-400 font-bold">2014-2015</div>
                  <div className="text-white font-mono">Développeur Java EE (Niveau II)</div>
                  <div className="text-gray-500 text-sm">AFPA Créteil</div>
                </li>
                <li className="border-l-4 border-cyan-400 pl-4">
                  <div className="text-cyan-400 font-bold">2005-2011</div>
                  <div className="text-white font-mono">DUT Informatique (niveau)</div>
                  <div className="text-gray-500 text-sm">CNAM Paris</div>
                </li>
                <li className="border-l-4 border-cyan-400 pl-4">
                  <div className="text-cyan-400 font-bold">2004</div>
                  <div className="text-white font-mono">BTS Comptabilité & Gestion</div>
                  <div className="text-gray-500 text-sm">Académie de Créteil</div>
                </li>
              </ul>
            </div>
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

                <p className="text-gray-400 leading-relaxed max-w-3xl mb-4">
                  {exp.description}
                </p>

                {exp.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <span key={hIdx}
                        className="px-3 py-1 text-xs font-mono bg-lime-400/10 border border-lime-400/30 text-lime-400">
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
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
            DISCUTONS DE VOTRE PROJET
          </h2>
          <p className="text-black text-xl text-center mb-4 font-mono">
            CDI • Freelance • Mission longue durée
          </p>
          <p className="text-black/80 text-lg text-center mb-12 font-mono">
            📍 Île-de-France + Télétravail • 📧 patrice.lorent@gmail.com • 📞 06.64.03.91.46
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-black font-bold mb-2 font-mono">NOM</label>
                <input type="text" 
                  className="w-full px-4 py-3 border-4 border-black bg-white text-black 
                    focus:outline-none focus:border-black focus:shadow-[4px_4px_0px_rgba(0,0,0,1)]
                    transition-shadow font-mono"
                  placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-black font-bold mb-2 font-mono">EMAIL</label>
                <input type="email" 
                  className="w-full px-4 py-3 border-4 border-black bg-white text-black 
                    focus:outline-none focus:border-black focus:shadow-[4px_4px_0px_rgba(0,0,0,1)]
                    transition-shadow font-mono"
                  placeholder="votre@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-black font-bold mb-2 font-mono">MESSAGE</label>
              <textarea 
                className="w-full px-4 py-3 border-4 border-black bg-white text-black h-40
                  focus:outline-none focus:border-black focus:shadow-[4px_4px_0px_rgba(0,0,0,1)]
                  transition-shadow resize-none font-mono"
                placeholder="Parlez-moi de votre projet, mission ou opportunité..."></textarea>
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
          <p className="text-gray-500 font-mono mb-2">
            © 2025 Patrice Lorent - Ingénieur Développement PHP & Python
          </p>
          <p className="text-gray-600 font-mono text-sm">
            Conçu avec <span className="text-lime-400">{'<3'}</span> et beaucoup de caféine
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
