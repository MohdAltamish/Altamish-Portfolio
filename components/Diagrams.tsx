/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Terminal, Cpu, Globe, Award, ExternalLink, Activity } from 'lucide-react';

interface CardProps {
  title: string;
  subtitle?: string;
  date?: string;
  description: string[];
  tags?: string[];
  link?: string;
  isDark?: boolean;
}

export const ProjectCard: React.FC<CardProps> = ({ title, subtitle, date, description, tags, link, isDark }) => {
  // If isDark prop is passed explicitly (like in the projects section which is always dark theme), use it.
  // Otherwise rely on tailwind 'dark:' classes which inherit from parent.
  // However, the project section in App.tsx is permanently dark-styled via generic classes, 
  // but if we reuse this component in a light section, it needs to adapt.
  
  // Note: The projects section in App.tsx has `bg-slate-900`. 
  // So the card should be styled for dark mode there regardless of global theme? 
  // Actually, usually portfolios have consistency. 
  // In the App.tsx I made the Project section dark themed *always* or reactive?
  // In App.tsx I made project section `bg-slate-900 dark:bg-black`. It's always dark.
  // So we should style this card to look good on dark backgrounds always if isDark is true, 
  // or use dark variants if it's based on system.
  
  // Let's use class based approach compatible with the section it is in.
  // Since the parent section in App.tsx passes `isDark={true}`, we can force dark styles.

  const baseClasses = isDark 
    ? "bg-slate-800 border-slate-700 text-slate-100" 
    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100";

  const subTextClasses = isDark
    ? "text-slate-400"
    : "text-slate-600 dark:text-slate-400";
    
  const tagClasses = isDark
    ? "bg-slate-700 text-slate-300 border-slate-600"
    : "bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-100 dark:border-slate-600";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`${baseClasses} rounded-xl shadow-lg border p-6 h-full flex flex-col relative overflow-hidden group`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Code size={48} />
      </div>

      <div className="flex justify-between items-start mb-3 relative z-10">
         <div>
            <h3 className="text-xl font-bold group-hover:text-primary-500 transition-colors">{title}</h3>
            {subtitle && <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">{subtitle}</p>}
         </div>
         {date && <span className={`text-xs font-mono px-2 py-1 rounded ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>{date}</span>}
      </div>
      
      <div className="space-y-2 mb-6 flex-grow relative z-10">
          {description.map((desc, i) => (
             <p key={i} className={`text-sm leading-relaxed ${subTextClasses}`}>• {desc}</p>
          ))}
      </div>
      
      <div className="mt-auto relative z-10">
        {tags && (
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(tag => (
                    <span key={tag} className={`text-xs font-medium px-2 py-1 border rounded-md ${tagClasses}`}>
                        {tag}
                    </span>
                ))}
            </div>
        )}
        
        {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                View Project <ExternalLink size={14} />
            </a>
        )}
      </div>
    </motion.div>
  );
};

export const SkillSection: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
    const skills = [
        { name: "Python", icon: <Terminal size={18} />, category: "Language" },
        { name: "Java", icon: <Code size={18} />, category: "Language" },
        { name: "React / JS", icon: <Globe size={18} />, category: "Web" },
        { name: "HTML / CSS", icon: <Globe size={18} />, category: "Web" },
        { name: "Git & GitHub", icon: <Code size={18} />, category: "Tools" },
        { name: "Google Cloud", icon: <Server size={18} />, category: "Cloud" },
        { name: "CI/CD", icon: <Activity size={18} />, category: "DevOps" },
        { name: "Kubernetes", icon: <Server size={18} />, category: "DevOps" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary-200 dark:hover:border-primary-700 transition-all"
                >
                    <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        {skill.icon}
                    </div>
                    <div>
                        <div className="font-bold text-slate-800 dark:text-slate-100 text-sm">{skill.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">{skill.category}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export const TimelineItem: React.FC<{
    title: string;
    org: string;
    date: string;
    description?: string;
    icon?: React.ReactNode;
    isDark?: boolean;
}> = ({ title, org, date, description, icon, isDark }) => {
    return (
        <div className="relative pl-8 pb-8 border-l-2 border-slate-200 dark:border-slate-700 last:border-0 last:pb-0 group">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-600 dark:border-primary-400 flex items-center justify-center group-hover:scale-125 transition-transform">
            </div>
            <div>
                <span className="text-xs font-mono font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wide bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 rounded">{date}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{title}</h3>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{org}</div>
                {description && <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>}
            </div>
        </div>
    )
}

export const CertificationCard: React.FC<{ name: string; issuer: string; date: string; isDark?: boolean }> = ({ name, issuer, date, isDark }) => (
     <motion.div 
        whileHover={{ y: -5 }}
        className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all"
     >
        <div className="p-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
            <Award size={24} />
        </div>
        <div>
            <h4 className="font-bold text-slate-900 dark:text-white leading-tight mb-1">{name}</h4>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="uppercase tracking-wide">{issuer}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <span>{date}</span>
            </div>
        </div>
     </motion.div>
)