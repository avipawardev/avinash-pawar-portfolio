import styles from './ProjectsStyles.module.css';
import investment from '../../assets/investment.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={investment}
          link="https://github.com/avipawardev/investment-portfolio-tracker/tree/main/investment-portfolio"
          h3="Investments Tracker"
          p="Stocks and Crypto"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/avipawardev/Recipe-Sharing-App"
          h3="Recipe Sharing App"
          p="Share Your Recipes"
        />
        
        <ProjectCard
          src={fitLift}
          link=""
          h3="Working"
          p="In Progress..."
        />
      </div>
    </section>
  );
}

export default Projects;
