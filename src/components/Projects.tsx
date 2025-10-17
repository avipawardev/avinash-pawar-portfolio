import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Recipe Sharing App',
      description: 'Full-stack MERN application for sharing and discovering recipes. Features include user authentication, recipe creation, search functionality, and social interactions.',
      tags: ['HTML','CSS','JavaScript','Firebase','FirebaseAuth'],
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
      github: 'https://github.com/avipawardev/Recipe-Sharing-App',
      demo: 'https://delightful-hotteok-443b24.netlify.app/',
    },
    {
      title: 'Investment Portfolio Tracker',
      description: 'Financial tracking application to monitor investment portfolios, track performance, and analyze market trends with real-time data visualization.',
      tags: ['React', 'Firebase', 'FirebaseAuth', 'Chart.js','Framer Motion'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      github: 'https://github.com/avipawardev/investment-portfolio-tracker',
      demo: 'https://investment-portfolio-tracker-tan.vercel.app/',
    },
    {
      title: 'Loan Management App',
      description: 'Comprehensive loan management system with application processing, approval workflows, payment tracking, and user dashboard for both lenders and borrowers.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express','Nodemailer','JWT','Bcrypt'],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      github: 'https://github.com/avipawardev/loan-app',
      demo: 'https://loan-app-xi-eight.vercel.app',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter uppercase"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              className="h-2 w-40 bg-primary mx-auto border-4 border-foreground"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1 }}
                className="brutal-card overflow-hidden group transition-transform duration-300 w-full max-w-sm h-[600px] flex flex-col"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                </div>

                <div className="p-6 bg-card flex-1 flex flex-col">
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm flex-1 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-muted text-foreground border-2 border-foreground font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-3 border-foreground hover:bg-foreground hover:text-background font-bold uppercase"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-3 border-foreground font-bold uppercase"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
