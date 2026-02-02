import Badge from './Badge.jsx';

function Hero({ email, badges }) {
  return (
    <section className="hero">
      <div>
        <h1>Olá, sou Gustavo Henrique.<br />Construo experiências digitais.</h1>
        <p>Desenvolvedor focado em criar produtos ágeis, bonitos e responsivos. Trabalho com front-end moderno, prototipação e soluções focadas em negócio.</p>
        <div className="hero-actions">
          <a className="primary-btn" href="#projetos">Ver projetos</a>
          <a className="secondary-btn" href={`mailto:${email}`}>Vamos conversar</a>
        </div>
        <div className="badge-row">
          {badges.map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
      </div>
      <div className="panel">
        <img className="hero-image" src="/images/LexIA.png" alt="Tela do LexIA — Constituição Inteligente" />
        <h3>Em destaque</h3>
        <p><strong>LexIA — Constituição Inteligente</strong></p>
        <p>Plataforma web que facilita o acesso e o entendimento da Constituição Federal Brasileira com linguagem simplificada e recursos de IA. Inclui busca inteligente, visualização de artigos, resumos por IA e favoritos.</p>
        <div className="meta">
          <span>Web App / IA / GovTech / LegalTech</span>
        </div>
        <div className="badge-row">
          <Badge>React</Badge>
          <Badge>Vite</Badge>
          <Badge>Tailwind CSS</Badge>
          <Badge>Fuse.js</Badge>
          <Badge>Axios</Badge>
          <Badge>Vercel</Badge>
          <Badge>Gemini</Badge>
          <Badge>Node.js</Badge>
        </div>
        <div className="hero-highlight">
          <a href="https://lexia-riseup.vercel.app/" target="_blank" rel="noopener noreferrer">Ver projeto</a>
          <a href="https://github.com/gustavoh-dev/LexIA-RiseUP" target="_blank" rel="noopener noreferrer">Repositório</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
