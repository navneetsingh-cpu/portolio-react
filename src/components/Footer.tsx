import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/navneetsingh-cpu" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/navneetskahlon/" },
    { name: "Email", icon: Mail, url: "mailto:navneet17736@gmail.com" },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-slate-100 mb-3">Navneet</h3>
            <p className="text-slate-400 mb-4">
              Frontend Developer specializing in React, Next.js, and Angular
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon
                      className="text-slate-400 group-hover:text-violet-400 transition-colors"
                      size={18}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-100 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {["about", "projects", "skills", "experience", "contact"].map(
                (section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-slate-400 hover:text-violet-400 transition-colors capitalize"
                    >
                      {section}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-slate-100 mb-3">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Shadcn UI"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-center md:text-left">
            © 2025 Navneet. All rights reserved.
          </p>
          <p className="text-slate-400 flex items-center gap-2"></p>
        </div>
      </div>
    </footer>
  );
}
