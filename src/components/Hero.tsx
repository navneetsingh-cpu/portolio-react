import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <span className="text-violet-400">👋 Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-slate-100">
            Hi, I'm <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Navneet</span>
          </h1>
          
          <h2 className="text-slate-100">
            Frontend Developer
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto">
            Building interactive web experiences with React, Next.js & Angular. 
            Passionate about creating pixel-perfect, performant applications that users love.
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-8 shadow-lg shadow-violet-500/30"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 text-slate-300 hover:bg-white/5"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-slate-400" size={24} />
        </div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-violet-500/20 rotate-12" />
      <div className="absolute bottom-40 right-20 w-32 h-32 border border-blue-500/20 -rotate-12" />
    </section>
  );
}
