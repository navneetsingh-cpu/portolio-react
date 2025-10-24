import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/navneetsingh-cpu",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/navneetskahlon/",
    },
    { name: "Email", icon: Mail, url: "mailto:navneet17736@gmail.com" },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-100 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-slate-100 mb-6">Let's Connect</h3>
              <p className="text-slate-400 mb-8">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center">
                  <Mail className="text-violet-400" size={20} />
                </div>
                <div>
                  <div className="text-slate-400">Email</div>
                  <a
                    className="text-slate-300"
                    href="mailto:navneet17736@gmail.com"
                  >
                    navneet17736@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center">
                  <MapPin className="text-violet-400" size={20} />
                </div>
                <div>
                  <div className="text-slate-400">Location</div>
                  <div className="text-slate-300">Toronto Area, Canada</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-slate-100 mb-4">Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <Icon
                        className="text-slate-400 group-hover:text-violet-400 transition-colors"
                        size={20}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
