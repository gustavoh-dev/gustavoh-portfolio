function Contato({ email }) {
  return (
    <section id="contato">
      <h2>Contato</h2>
      <p className="lead">Pronto para conversar sobre um projeto ou oportunidade.</p>
      <div className="contact">
        <div className="panel">
          <h3>Disponibilidade</h3>
          <p>Aceito novos projetos freelance e propostas full-time.</p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="panel">
          <h3>Redes</h3>
          <p>
            <a href="https://www.linkedin.com/in/gustavo-henrique-542662365" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
            <a href="https://github.com/gustavoh-dev" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contato;
