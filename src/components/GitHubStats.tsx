import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const GitHubStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const githubUsername = 'avipawardev';

  return (
    <section id="github-stats" className="py-20 relative">
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
              GitHub Statistics
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-xl"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=0d1117&title_color=c8ff00&icon_color=c8ff00&text_color=ffffff&border_color=30363d&cache_seconds=1800`}
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 rounded-xl"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&bg_color=0d1117&title_color=c8ff00&text_color=ffffff&border_color=30363d&cache_seconds=1800`}
                alt="Top Languages"
                className="w-full rounded-lg"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-6 rounded-xl"
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark&background=0d1117&ring=c8ff00&fire=c8ff00&currStreakLabel=c8ff00&sideLabels=ffffff&currStreakNum=ffffff&dates=ffffff&sideNums=ffffff&border=30363d&cache_seconds=1800`}
              alt="GitHub Streak"
              className="w-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;