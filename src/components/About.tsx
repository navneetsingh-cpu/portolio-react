import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code2, Palette, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful interfaces with attention to detail"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and exceptional user experience"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur-2xl opacity-20" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEyMjQwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Navneet - Frontend Developer"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-slate-300">
                I'm a passionate frontend developer with expertise in building modern, 
                responsive web applications. With a strong foundation in React, Next.js, 
                and Angular, I transform ideas into elegant, user-friendly interfaces.
              </p>
              <p className="text-slate-400">
                My approach combines technical excellence with creative problem-solving. 
                I believe in writing clean, maintainable code and staying up-to-date with 
                the latest web technologies to deliver exceptional digital experiences.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'UI/UX'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-violet-400" size={24} />
                </div>
                <h3 className="text-slate-100 mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
