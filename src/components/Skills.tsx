import { 
  Code2, 
  Layers, 
  Wrench, 
  Palette,
  Database,
  GitBranch,
  Terminal,
  Figma
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      icon: Code2,
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Angular", level: 85 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Languages & Core",
      icon: Terminal,
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "SASS/SCSS", level: 85 }
      ]
    },
    {
      title: "Styling & UI",
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Material UI", level: 85 },
        { name: "Styled Components", level: 80 },
        { name: "CSS Modules", level: 90 }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Webpack/Vite", level: 80 },
        { name: "Jest/Testing Library", level: 85 },
        { name: "Figma", level: 85 }
      ]
    }
  ];

  const quickSkills = [
    { name: "React", icon: Layers },
    { name: "Next.js", icon: Code2 },
    { name: "Angular", icon: Code2 },
    { name: "TypeScript", icon: Terminal },
    { name: "Tailwind", icon: Palette },
    { name: "Git", icon: GitBranch },
    { name: "Figma", icon: Figma },
    { name: "REST APIs", icon: Database }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-100 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Icon Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {quickSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <Icon className="text-violet-400 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-slate-300">{skill.name}</span>
              </div>
            );
          })}
        </div>

        {/* Detailed Skills with Progress */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center">
                    <Icon className="text-violet-400" size={20} />
                  </div>
                  <h3 className="text-slate-100">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-violet-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
