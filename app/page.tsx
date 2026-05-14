"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Mail, FileText } from "lucide-react";
import { 
  SiNextdotjs, SiReact, SiVite, SiTailwindcss, 
  SiNodedotjs, SiTypescript, SiExpress, SiPostgresql, 
  SiGit, SiDocker, SiFramer, SiLinux, SiGithub, SiInstagram
} from "react-icons/si";

import sumopowerImg from "../assets/web/sumopower.png";
import cloudreamImg from "../assets/web/cloudream.png";
import foreImg from "../assets/web/fore.png";
import g2mchurchImg from "../assets/web/g2mchurch.png";
import todolistImg from "../assets/web/todolist.png";
import izhadwikaryaImg from "../assets/web/izhadwikarya.png";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const lineReveal = {
  hidden: { y: "110%", rotate: 2, opacity: 0 },
  visible: { y: "0%", rotate: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" as const } }
};

const modalContentStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.04
    }
  }
};

const projects = [
  { 
    id: 1, 
    name: 'sumopower.id', 
    url: 'https://sumopower.id', 
    desc: 'Commercial e-commerce platform architected for speed and seamless UX.', 
    role: 'Web Development',
    image: sumopowerImg,
    imageAlt: 'Sumopower website screenshot'
  },
  { 
    id: 2, 
    name: 'cloudream.id', 
    url: 'https://cloudream.id', 
    desc: 'B2B digital platform offering robust enterprise cloud solutions.', 
    role: 'Web Development',
    image: cloudreamImg,
    imageAlt: 'Cloudream website screenshot'
  },
  { 
    id: 3, 
    name: 'Fore Nico', 
    url: 'https://fore-nico.vercel.app', 
    desc: 'An innovative web project showcasing modern capabilities and clean architecture.', 
    role: 'Web Development',
    image: foreImg,
    imageAlt: 'Fore Nico website screenshot'
  },
  { 
    id: 4, 
    name: 'G2M Church', 
    url: 'https://g2mchurch.vercel.app', 
    desc: 'Digital platform engineered for community engagement, offering a seamless user journey.', 
    role: 'Web Development',
    image: g2mchurchImg,
    imageAlt: 'G2M Church website screenshot'
  },
  { 
    id: 5, 
    name: 'To-Do List by Nico', 
    url: 'https://todolistbynico.vercel.app', 
    desc: 'A high-performance productivity application emphasizing minimalist UX and solid state management.', 
    role: 'Web Development',
    image: todolistImg,
    imageAlt: 'To-Do List by Nico website screenshot'
  },
  { 
    id: 6, 
    name: 'Idzhar Dwi Karya', 
    url: 'https://idzhardwikarya.vercel.app', 
    desc: 'Corporate landing interface built with precision, delivering optimal performance and aesthetics.', 
    role: 'Web Development',
    image: izhadwikaryaImg,
    imageAlt: 'Idzhar Dwi Karya website screenshot'
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-zinc-100 selection:text-[#050505]">
      
      {/* Custom Cursor Light */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 40%)`
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 w-full z-40 border-b border-zinc-900/50 bg-[#050505]/80 backdrop-blur-md"
      >
        <div className="max-w-350 mx-auto px-6 md:px-12 h-24 flex items-center justify-between text-xs tracking-[0.2em] uppercase font-medium">
          <a href="#" className="hover:opacity-60 transition-opacity duration-300 relative group overflow-hidden">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">NICHOLAS EDMUND</span>
            <span className="block absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">NICHOLAS EDMUND</span>
          </a>
          <div className="hidden md:flex items-center gap-12">
            {['About', 'Works', 'Stack', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative group overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
                <span className="block absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">{item}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 px-6 md:px-12 max-w-350 mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="lg:col-span-7">
            <div className="overflow-hidden mb-4">
              <motion.h1 variants={lineReveal} className="text-6xl sm:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85] uppercase">
                NICHOLAS
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-12">
              <motion.h1 variants={lineReveal} className="text-6xl sm:text-8xl lg:text-[9rem] font-bold tracking-tighter text-zinc-500 leading-[0.85] uppercase">
                EDMUND
              </motion.h1>
            </div>
            <motion.div variants={fadeUp} className="max-w-xl">
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
                Fullstack Developer & Software Engineer. Crafting sharp, high-performance web applications with precision engineering and modern tooling.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 group"
          >
            <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 transition-transform duration-700 group-hover:-translate-x-3 group-hover:-translate-y-3" />
            <img 
              src="/DSCF0684.JPG" 
              alt="Nicholas Edmund" 
              className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-700 object-center border border-zinc-800 group-hover:scale-[1.03] group-hover:rotate-[0.3deg]"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-40 px-6 md:px-12 max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10 border-t border-zinc-900/50">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer}
          className="lg:col-span-4"
        >
          <motion.h2 variants={fadeUp} className="text-xs tracking-[0.2em] uppercase font-medium text-zinc-500 flex items-center gap-6">
            <span className="w-12 h-px bg-zinc-700"></span>
            01 / About
          </motion.h2>
        </motion.div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer}
          className="lg:col-span-8"
        >
          <motion.p variants={fadeUp} className="text-3xl md:text-5xl leading-[1.1] font-medium mb-20 text-zinc-100 tracking-tight">
            Engineering scalable systems at the intersection of robust backend architecture and striking frontend execution. Minimalist by design, maximalist in performance.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            <motion.div variants={fadeUp} className="group cursor-default">
              <h3 className="text-zinc-100 font-medium mb-6 uppercase tracking-[0.2em] text-xs flex items-center gap-4">
                <span className="w-2 h-2 bg-zinc-100 group-hover:scale-150 transition-transform duration-300"></span>
                Focus
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg group-hover:text-zinc-300 transition-colors duration-300">Next.js & React ecosystem, backend architecture, and high-performance user interfaces.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="group cursor-default">
              <h3 className="text-zinc-100 font-medium mb-6 uppercase tracking-[0.2em] text-xs flex items-center gap-4">
                <span className="w-2 h-2 bg-zinc-500 group-hover:bg-zinc-100 group-hover:scale-150 transition-all duration-300"></span>
                Education
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light text-lg group-hover:text-zinc-300 transition-colors duration-300">Computer Engineering Student at Universitas Indonesia.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Selected Works Section */}
      <section id="works" className="py-16 md:py-40 px-6 md:px-12 max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10 border-t border-zinc-900/50">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer}
          className="lg:col-span-4"
        >
          <motion.h2 variants={fadeUp} className="text-xs tracking-[0.2em] uppercase font-medium text-zinc-500 flex items-center gap-6">
            <span className="w-12 h-px bg-zinc-700"></span>
            02 / Works
          </motion.h2>
        </motion.div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer}
          className="lg:col-span-8 flex flex-col w-full"
        >
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-12">
            A curated set of shipped products with measurable impact, prioritized for clarity and speed across devices.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.button
                key={project.id}
                variants={fadeUp}
                onClick={() => setSelectedProject(project)}
                className="group text-left border border-zinc-900/60 bg-zinc-950/40 hover:bg-zinc-950/70 transition-colors duration-400"
              >
                <div className="relative w-full aspect-4/3 border-b border-zinc-900/60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-zinc-900/45 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">
                    {project.role}
                  </p>
                  <div className="flex items-center justify-between gap-4 mt-3">
                    <h3 className="text-2xl md:text-3xl font-medium text-zinc-200 group-hover:text-zinc-100 transition-colors duration-300 tracking-tight">
                      {project.name}
                    </h3>
                    <div className="w-10 h-10 rounded-none border border-zinc-800 bg-[#050505] group-hover:bg-zinc-100 flex items-center justify-center transition-all duration-500">
                      <ArrowUpRight className="text-zinc-400 group-hover:text-[#050505] w-5 h-5 transition-colors duration-300" />
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm md:text-base mt-3 leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Pop-up Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 bg-[#050505]/90 backdrop-blur-md flex items-center justify-center p-6 md:p-12 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0a0a0a] border border-zinc-800 w-full max-w-5xl rounded-none flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <motion.div
                variants={modalContentStagger}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-between p-8 border-b border-zinc-900"
              >
                <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100">
                  {selectedProject.name}
                </motion.h3>
                <motion.button 
                  variants={fadeUp}
                  onClick={() => setSelectedProject(null)}
                  className="p-3 bg-zinc-900 hover:bg-zinc-100 hover:text-black transition-colors duration-300 border border-zinc-800"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Modal Content */}
              <motion.div
                variants={modalContentStagger}
                initial="hidden"
                animate="visible"
                className="p-8 md:p-12 flex flex-col lg:flex-row gap-12"
              >
                <motion.div variants={fadeUp} className="flex-1 order-2 lg:order-1">
                  <motion.div variants={fadeUp} className="mb-12">
                    <h4 className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4">About The Project</h4>
                    <p className="text-zinc-300 text-lg leading-relaxed font-light">{selectedProject.desc}</p>
                  </motion.div>
                  
                  <motion.div variants={fadeUp} className="grid grid-cols-1 gap-8 mb-12">
                    <div>
                      <h4 className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-2">Role</h4>
                      <p className="text-zinc-200">{selectedProject.role}</p>
                    </div>
                  </motion.div>

                  <motion.a 
                    variants={fadeUp}
                    href={selectedProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-zinc-100 text-[#050505] px-8 py-4 font-medium uppercase tracking-widest text-sm hover:bg-transparent hover:text-zinc-100 border border-zinc-100 transition-all duration-300 group"
                  >
                    View Live Site
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>
                </motion.div>

                {/* Project Image */}
                <motion.div variants={fadeUp} className="flex-1 order-1 lg:order-2">
                  <div className="w-full aspect-4/3 bg-zinc-900 border border-zinc-800 relative overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-zinc-900/30 to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tools & Stack Section */}
      <section id="stack" className="py-16 md:py-40 px-6 md:px-12 max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10 border-t border-zinc-900/50">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer}
          className="lg:col-span-4"
        >
          <motion.h2 variants={fadeUp} className="text-xs tracking-[0.2em] uppercase font-medium text-zinc-500 flex items-center gap-6">
            <span className="w-12 h-px bg-zinc-700"></span>
            03 / Stack
          </motion.h2>
        </motion.div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer}
          className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-20"
        >
          {[
            {
              label: 'Frontend', items: [
                { name: 'Next.js', icon: SiNextdotjs }, 
                { name: 'React', icon: SiReact }, 
                { name: 'Vite', icon: SiVite }, 
                { name: 'TailwindCSS', icon: SiTailwindcss }
              ]
            },
            { 
              label: 'Backend', items: [
                { name: 'Node.js', icon: SiNodedotjs }, 
                { name: 'TypeScript', icon: SiTypescript }, 
                { name: 'Express', icon: SiExpress }, 
                { name: 'PostgreSQL', icon: SiPostgresql }
              ]
            },
            { 
              label: 'Tooling', items: [
                { name: 'Git', icon: SiGit }, 
                { name: 'Docker', icon: SiDocker }, 
                { name: 'Framer Motion', icon: SiFramer }, 
                { name: 'Linux', icon: SiLinux }
              ]
            }
          ].map((category) => (
            <motion.div key={category.label} variants={fadeUp} className="col-span-1">
              <h3 className="text-zinc-100 font-medium mb-8 md:mb-10 uppercase tracking-[0.2em] text-xs opacity-50">{category.label}</h3>
              <ul className="space-y-5 md:space-y-6">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-4 text-zinc-400 hover:text-zinc-100 transition-all duration-300 w-fit cursor-default group">
                    <item.icon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="font-light tracking-wide">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-40 px-6 md:px-12 max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10 border-t border-zinc-900/50">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer}
          className="lg:col-span-4"
        >
          <motion.h2 variants={fadeUp} className="text-xs tracking-[0.2em] uppercase font-medium text-zinc-500 flex items-center gap-6">
            <span className="w-12 h-px bg-zinc-700"></span>
            04 / Contact
          </motion.h2>
        </motion.div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer}
          className="lg:col-span-8 flex flex-col items-start"
        >
          <motion.h3 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-[7rem] font-medium tracking-tighter mb-16 leading-[0.9] uppercase">
            Let&apos;s build <br/>
            <span className="text-zinc-500">something</span> <br/>
            exceptional.
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-20">
            <motion.a 
              variants={fadeUp}
              href="mailto:nicholasedmund18@gmail.com" 
              className="flex flex-col gap-4 border border-zinc-800 p-8 hover:bg-zinc-900 transition-colors duration-300 group relative overflow-hidden"
            >
              <Mail className="w-6 h-6 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-2">Email</p>
                <p className="text-zinc-100 font-light truncate">nicholasedmund18@gmail.com</p>
              </div>
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-zinc-600 group-hover:text-zinc-100 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
            </motion.a>
            
            <motion.a 
              variants={fadeUp}
              href="https://docs.google.com/document/d/1dUaNO_pSPKbvNvyl_edPrqhIYtYkssZgpJUaWiIGIE4/edit?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-4 border border-zinc-800 p-8 hover:bg-zinc-900 transition-colors duration-300 group relative overflow-hidden"
            >
              <FileText className="w-6 h-6 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 mb-2">Resume</p>
                <p className="text-zinc-100 font-light">View Curriculum Vitae</p>
              </div>
              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-zinc-600 group-hover:text-zinc-100 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      <footer className="py-12 border-t border-zinc-900/50 text-center text-zinc-600 text-xs tracking-[0.2em] uppercase flex flex-col md:flex-row items-center justify-between max-w-350 mx-auto px-6 md:px-12 relative z-10">
        <p>© {new Date().getFullYear()} Nicholas Edmund.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="https://github.com/niconett18" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors flex items-center gap-3 group">
            <SiGithub className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            GitHub
          </a>
          <a href="https://www.instagram.com/niconet18/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors flex items-center gap-3 group">
            <SiInstagram className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}
