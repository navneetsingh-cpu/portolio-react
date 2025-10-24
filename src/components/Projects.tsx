import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import project1 from "../images/project1.png"; // with import
import project2 from "../images/project2.png"; // with import
import project3 from "../images/project3.webp"; // with import

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with cart, checkout, and payment integration. Built with Next.js for optimal performance and SEO.",
      image: project1,
      tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
      demoUrl: "https://avi-ethnic-wear.vercel.app/",
      githubUrl: "https://github.com/navneetsingh-cpu/AviEthnicWear",
    },
    {
      title: "Store App",
      description:
        "Comfy Store - Made in React. An e-commerce web application featuring product listings, filtering, and a shopping cart.",
      image: project2,
      tags: ["React", "Redux", "Styled-Components"],
      demoUrl: "https://github.com/navneetsingh-cpu/react-comfy-store",
      githubUrl: "https://github.com/navneetsingh-cpu/react-comfy-store",
    },
    {
      title: "Google Clone",
      description: "Simple Google Search Clone",
      image: project3,
      tags: ["NextJs", "TailwindCSS", "GoogleAPI"],
      demoUrl: "https://google-navneet.vercel.app/",
      githubUrl: "https://github.com/navneetsingh-cpu/google-clone",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-100 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience in
            building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden group hover:border-violet-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60" />

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-violet-950/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                    aria-label="View demo"
                  >
                    <ExternalLink className="text-white" size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="text-white" size={20} />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-slate-100">{project.title}</h3>
                <p className="text-slate-400">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
