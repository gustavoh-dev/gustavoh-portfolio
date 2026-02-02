import ProjectCard from './ProjectCard.jsx';

function Projects({ projects }) {
  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <p className="lead">Seleção de trabalhos recentes.</p>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
