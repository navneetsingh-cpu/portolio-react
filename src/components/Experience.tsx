import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Tech Innovators Inc.",
      role: "Senior Frontend Developer",
      period: "Jan 2023 - Present",
      description: "Leading frontend development for enterprise SaaS products. Architecting scalable React applications and mentoring junior developers.",
      achievements: [
        "Improved app performance by 40% through code optimization",
        "Led migration from JavaScript to TypeScript",
        "Implemented design system used across 5 products"
      ],
      tags: ["React", "Next.js", "TypeScript"]
    },
    {
      company: "Digital Solutions Co.",
      role: "Frontend Developer",
      period: "Jun 2021 - Dec 2022",
      description: "Developed responsive web applications for clients across various industries using modern frontend technologies.",
      achievements: [
        "Built 15+ client projects from concept to deployment",
        "Reduced bundle size by 35% using code splitting",
        "Integrated headless CMS for content management"
      ],
      tags: ["Angular", "React", "Tailwind CSS"]
    },
    {
      company: "StartupLab",
      role: "Junior Frontend Developer",
      period: "Jan 2020 - May 2021",
      description: "Contributed to building MVP for multiple startup projects. Collaborated with designers to implement pixel-perfect UI components.",
      achievements: [
        "Developed reusable component library",
        "Implemented responsive designs for mobile and desktop",
        "Contributed to open-source projects"
      ],
      tags: ["React", "JavaScript", "SASS"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-100 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey in frontend development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-blue-500 to-violet-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-slate-950 transform md:-translate-x-1/2" />

                {/* Content */}
                <div className="md:w-1/2 ml-8 md:ml-0">
                  <div className={`p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-slate-100 mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-violet-400">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 mb-4">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-slate-300 mb-4">{exp.description}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400">
                          <span className="text-violet-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
