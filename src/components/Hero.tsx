import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="text-primary text-lg font-mono">Hi, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-black mb-6 text-foreground tracking-tighter"
          >
            AVINASH<br/>
            <span className="text-primary">PAWAR</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto font-bold uppercase tracking-wide"
          >
            MERN Stack Developer Building Modern Web Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider border-4 border-foreground transition-all hover:translate-x-1 hover:translate-y-1"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <a
              href="/AVINASH-PAWAR-Resume.pdf"
              download="AVINASH-PAWAR-Resume.pdf"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-4 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all font-bold uppercase tracking-wider"
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center"
          >
            {[
              { icon: Github, href: 'https://github.com/avipawardev', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/avinash-pawar-dev/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:avipawar.dev@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border-4 border-foreground bg-background hover:bg-primary hover:border-primary transition-all"
                aria-label={label}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
