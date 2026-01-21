/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene';
import { ProjectCard, SkillSection, TimelineItem, CertificationCard } from './components/Diagrams';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Github, ChevronDown, GraduationCap, Briefcase, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const App: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    const scrollToSection = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 font-sans ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} selection:bg-primary-500 selection:text-white`}>



            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-serif font-bold text-lg group-hover:rotate-12 transition-transform">
                            M
                        </div>
                        <span className="font-serif font-bold text-xl tracking-wide dark:text-white text-slate-900">
                            Altamish
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium dark:text-slate-300 text-slate-600">
                        <a href="#about" onClick={scrollToSection('about')} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
                        <a href="#skills" onClick={scrollToSection('skills')} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Skills</a>
                        <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Experience</a>
                        <a href="#projects" onClick={scrollToSection('projects')} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a>

                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            {isDark ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-600" />}
                        </button>

                        <a href="#contact" onClick={scrollToSection('contact')} className="px-5 py-2.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full hover:bg-primary-600 dark:hover:bg-primary-400 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex items-center gap-4 md:hidden">
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            {isDark ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-600" />}
                        </button>
                        <button className="text-slate-900 dark:text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white dark:bg-slate-950 flex flex-col items-center justify-center gap-8 text-2xl font-serif text-slate-900 dark:text-white"
                    >
                        <a href="#about" onClick={scrollToSection('about')}>About</a>
                        <a href="#skills" onClick={scrollToSection('skills')}>Skills</a>
                        <a href="#experience" onClick={scrollToSection('experience')}>Experience</a>
                        <a href="#projects" onClick={scrollToSection('projects')}>Projects</a>
                        <a href="#contact" onClick={scrollToSection('contact')} className="text-primary-600">Contact</a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background gradient blobs for visual interest in dark mode especially */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                <HeroScene isDark={isDark} />

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block mb-4 px-4 py-1.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-primary-700 dark:text-primary-300 text-xs font-bold tracking-widest uppercase rounded-full border border-white/20 dark:border-slate-700 shadow-sm"
                    >
                        Portfolio 2025
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400"
                    >
                        Mohd Altamish
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-light text-xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto"
                    >
                        Crafting Digital Experiences with <span className="font-semibold text-primary-600 dark:text-primary-400">Code</span> & <span className="font-semibold text-primary-600 dark:text-primary-400">Creativity</span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-slate-500 dark:text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed text-lg"
                    >
                        Full Stack Developer • AI Enthusiast • Problem Solver
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#projects" onClick={scrollToSection('projects')} className="min-w-[160px] px-8 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105 shadow-lg shadow-slate-900/20">
                            View Work
                        </a>
                        <a href="#contact" onClick={scrollToSection('contact')} className="min-w-[160px] px-8 py-3 bg-transparent text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-full font-medium hover:border-slate-900 dark:hover:border-white transition-all hover:scale-105">
                            Let's Talk
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce"
                    >
                        <ChevronDown className="text-slate-400 dark:text-slate-600 w-8 h-8" />
                    </motion.div>
                </div>
            </header>

            <main>
                {/* About & Education */}
                <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-12 h-1 bg-primary-600 rounded-full"></div>
                                <span className="text-sm font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">About Me</span>
                            </div>
                            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-8 leading-tight">
                                Driven by code,<br />inspired by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">innovation.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300">
                                <p className="leading-relaxed">
                                    Hello! I'm <strong className="text-slate-900 dark:text-white">Mohd Altamish</strong>, an undergraduate student at GL Bajaj Institute of Technology and Management, pursuing B.Tech in Computer Science and Engineering.
                                </p>
                                <p className="leading-relaxed">
                                    I possess a strong foundation in <span className="text-primary-600 dark:text-primary-400 font-medium">Python</span> and <span className="text-primary-600 dark:text-primary-400 font-medium">Java</span>, actively refining my skills in Data Structures and Algorithms. My passion lies in building scalable web applications and exploring the frontiers of Artificial Intelligence.
                                </p>
                                <p className="leading-relaxed">
                                    I am actively seeking <span className="text-slate-900 dark:text-white font-medium">Software Development Intern</span> roles where I can contribute to impactful projects and grow alongside a talented team.
                                </p>
                            </div>

                            <div className="flex gap-4 mt-10">
                                <a href="https://linkedin.com/in/mohd-altamish" target="_blank" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#0077b5] dark:hover:bg-[#0077b5] transition-all"><Linkedin size={24} /></a>
                                <a href="https://github.com/MohdAltamish" target="_blank" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#333] dark:hover:bg-[#333] transition-all"><Github size={24} /></a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                                    <GraduationCap size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
                            </div>
                            <div className="space-y-4">
                                <TimelineItem
                                    date="2025 – 2029"
                                    title="B.Tech – CSE"
                                    org="GL Bajaj Institute of Technology and Management"
                                    description="Greater Noida, India"
                                    isDark={isDark}
                                />
                                <TimelineItem
                                    date="2024 – 2025"
                                    title="Diploma – IT"
                                    org="Government Polytechnic Lucknow"
                                    description="Lucknow, India"
                                    isDark={isDark}
                                />
                                <TimelineItem
                                    date="2022 – 2024"
                                    title="Intermediate – Science"
                                    org="Shirdi Sai Public School"
                                    description="Moradabad, India"
                                    isDark={isDark}
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Skills */}
                <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
                    {/* Background elements */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="font-serif text-3xl md:text-5xl text-slate-900 dark:text-white mb-6">Technical Arsenal</h2>
                                <p className="text-slate-500 dark:text-slate-400 text-lg">A curated collection of tools and technologies I use to turn ideas into reality.</p>
                            </motion.div>
                        </div>
                        <SkillSection isDark={isDark} />

                        <div className="mt-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow"></div>
                                <h3 className="font-serif text-2xl text-slate-900 dark:text-white whitespace-nowrap">Certifications & Learning</h3>
                                <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <CertificationCard
                                    name="OCI 2025 DevOps Professional"
                                    issuer="Oracle"
                                    date="Oct 2025"
                                    isDark={isDark}
                                />
                                <CertificationCard
                                    name="OCI 2025 AI Foundations Associate"
                                    issuer="Oracle"
                                    date="Sep 2025"
                                    isDark={isDark}
                                />
                                <CertificationCard
                                    name="Gen AI Academy 2.0 – DevOps"
                                    issuer="Gen AI Academy"
                                    date="2025"
                                    isDark={isDark}
                                />
                                <CertificationCard
                                    name="Gen AI Academy 2.0 – AI/ML"
                                    issuer="Gen AI Academy"
                                    date="2025"
                                    isDark={isDark}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience & Hackathons */}
                <section id="experience" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="md:w-1/3">
                                <div className="sticky top-32">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center gap-2 mb-6">
                                            <Briefcase className="text-primary-600 dark:text-primary-400" />
                                            <span className="text-sm font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Experience</span>
                                        </div>
                                        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">Hackathons &<br /><span className="text-primary-600 dark:text-primary-400">Ideathons</span></h2>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                            I thrive in competitive environments, participating in hackathons to solve real-world problems under tight deadlines.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="md:w-2/3 space-y-16">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="group relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-500 ring-4 ring-white dark:ring-slate-900"></div>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">MEDHA 2025 - Medical Device Hackathon</h3>
                                        <span className="inline-block mt-2 md:mt-0 text-sm font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">Oct 2025</span>
                                    </div>
                                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                                        <MapPin size={16} /> GL Bajaj + IIT Bombay
                                    </p>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                                        <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                                                <span>Developed <strong>GLB Dental Intellect</strong>, an AI-based web platform for dental image disease assessment.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                                                <span>Implemented secure multi-user login (Patient/Dentist/Admin) and appointment scheduling.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                                                <span>Led frontend development and Vercel deployment.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="group relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-400 dark:bg-indigo-400 ring-4 ring-white dark:ring-slate-900"></div>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">ThinkBlitz Ideathon 2025</h3>
                                        <span className="inline-block mt-2 md:mt-0 text-sm font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">Oct 2025</span>
                                    </div>
                                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                                        <MapPin size={16} /> IIIT Delhi
                                    </p>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                                        <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                                                <span>Designed concept for <strong>WakeMate</strong>, a driver drowsiness detection system.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                                                <span>Proposed comprehensive alert system using haptic and audio feedback.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="py-24 bg-slate-900 dark:bg-black text-white relative overflow-hidden transition-colors duration-300">
                    {/* Decorative background blobs */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                            <div>
                                <div className="inline-block mb-3 px-3 py-1 bg-primary-900/50 text-primary-300 text-xs font-bold tracking-widest uppercase rounded-full border border-primary-800 backdrop-blur-sm">
                                    Portfolio
                                </div>
                                <h2 className="font-serif text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Featured Projects</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ProjectCard
                                title="GLB Dental Intellect"
                                subtitle="Healthcare AI Platform"
                                date="Oct 2025"
                                description={[
                                    "Built an AI-based web platform for dental image disease assessment and recommendations.",
                                    "Implemented multi-user login (Patient/Dentist/Admin) and appointment booking system.",
                                    "Tech Stack: Next.js, JavaScript, Kaggle Dataset, Vercel"
                                ]}
                                tags={['Next.js', 'AI Integration', 'Vercel']}
                                link="#" // Placeholder as URL not provided
                                isDark={true} // Always dark in this section
                            />
                            <ProjectCard
                                title="Portfolio Website"
                                subtitle="Personal Brand"
                                date="Sep 2025"
                                description={[
                                    "Built a responsive personal portfolio website showcasing skills, certifications, and achievements.",
                                    "Created a clean UI using HTML/CSS/React and improved responsiveness for mobile devices.",
                                    "Hosted project online."
                                ]}
                                tags={['React', 'Tailwind', 'Responsive UI']}
                                link="https://github.com/MohdAltamish"
                                isDark={true}
                            />
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-serif text-5xl text-slate-900 dark:text-white mb-8">Let's Connect</h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
                                I'm currently looking for internship opportunities in Software Development.
                                If you have an exciting project or role, I'd love to hear from you.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm mb-4">
                                    <Mail size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">Email</h3>
                                <a href="mailto:altamish6589@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">altamish6589@gmail.com</a>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm mb-4">
                                    <Phone size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">Phone</h3>
                                <a href="tel:+919084145268" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">+91 9084145268</a>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-sm mb-4">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">Location</h3>
                                <span className="text-slate-500 dark:text-slate-400">Noida, Uttar Pradesh, India</span>
                            </motion.div>
                        </div>

                        <div className="flex justify-center gap-6">
                            <a href="https://linkedin.com/in/mohd-altamish" target="_blank" className="flex items-center gap-2 px-8 py-4 bg-[#0077b5] text-white rounded-xl hover:bg-[#006396] transition-all shadow-lg hover:shadow-xl font-medium transform hover:-translate-y-1">
                                <Linkedin size={22} /> Connect on LinkedIn
                            </a>
                            <a href="https://github.com/MohdAltamish" target="_blank" className="flex items-center gap-2 px-8 py-4 bg-[#333] dark:bg-white dark:text-slate-900 text-white rounded-xl hover:bg-[#24292e] dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl font-medium transform hover:-translate-y-1">
                                <Github size={22} /> View GitHub
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="text-center md:text-left">
                        <p>© 2025 Mohd Altamish.</p>
                        <p>Designed with <span className="text-red-500">♥</span> & Code.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>Built with React, Tailwind & Three.js</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;