import Badge from './Badge.jsx';

function ProjectCard({ tag, title, desc, badges, liveUrl, repoUrl }) {
  return (
    <article className="card">
      <div className="tag">{tag}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="badge-row">
        {badges.map((b) => (
          <Badge key={b}>{b}</Badge>
        ))}
      </div>
      {(liveUrl || repoUrl) && (
        <div className="card-actions">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Ver projeto
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              Repositório
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
