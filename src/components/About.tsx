import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant solutions',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams to deliver exceptional results',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate MERN Stack Developer with a love for creating 
                innovative web applications that solve real-world problems. With expertise 
                in MongoDB, Express.js, React, and Node.js, I bring ideas to life through 
                clean, efficient code.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey in web development has been driven by curiosity and a constant 
                desire to learn. I specialize in building full-stack applications with 
                modern technologies like Three.js, Framer Motion, and Tailwind CSS, 
                creating experiences that are both beautiful and functional.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-foreground/70">Location</span>
                  <span className="font-semibold">Dharashiv, Maharashtra</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-foreground/70">Experience</span>
                  <span className="font-semibold">Fresher</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-foreground/70">Projects</span>
                  <span className="font-semibold">3+ Completed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Availability</span>
                  <span className="font-semibold text-primary">Open to work</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-xl text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
