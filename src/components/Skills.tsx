import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: '/skills-icons/react.svg' },
        { name: 'JavaScript', icon: '/skills-icons/javascript.svg' },
        { name: 'TypeScript', icon: '/skills-icons/typescript.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'HTML5', icon: '/skills-icons/html5.svg' },
        { name: 'CSS3', icon: '/skills-icons/css3.svg' },
        { name: 'Framer Motion', icon: '/skills-icons/framer-motion.svg' },
        { name: 'GSAP', icon: '/skills-icons/gsap.svg' },
      ],
      color: 'from-primary to-accent',
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: '/skills-icons/nodejs.svg' },
        { name: 'Express.js', icon: '/skills-icons/express.svg' },
        { name: 'MongoDB', icon: '/skills-icons/mongodb.svg' },
        { name: 'Firebase', icon: '/skills-icons/firebase.svg' },
        { name: 'Redis', icon: '/skills-icons/redis.svg' },
        { name: 'RESTful API', icon: '/skills-icons/restful-api.svg' },
        { name: 'API Design & Integration', icon: '/skills-icons/api-design.svg' },
      ],
      color: 'from-secondary to-primary',
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: '/skills-icons/git.svg' },
        { name: 'GitHub', icon: '/skills-icons/github.svg' },
        { name: 'VS Code', icon: '/skills-icons/vscode.svg' },
        { name: 'Version Control', icon: '/skills-icons/version-control.svg' },
        { name: 'Problem Solving', icon: '/skills-icons/problem-solving.svg' },
      ],
      color: 'from-accent to-secondary',
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              style={{
                textShadow: '2px 2px 0px #667eea, 4px 4px 0px #764ba2, 6px 6px 10px rgba(0,0,0,0.3)',
                transform: 'perspective(500px) rotateX(10deg)'
              }}
            >
              Skills & Expertise
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="glass-card p-6 rounded-xl"
              >
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      className="flex flex-col items-center p-4 bg-muted/20 rounded-lg border border-foreground/10 hover:border-primary/50 transition-all duration-300"
                      style={{
                        transformStyle: 'preserve-3d',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                      }}
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-12 h-12 mb-2 filter drop-shadow-lg"
                        style={{
                          filter: 'drop-shadow(0 4px 8px rgba(200, 255, 0, 0.3))'
                        }}
                      />
                      <span className="text-sm font-medium text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
