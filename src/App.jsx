import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Sobre from './components/Sobre.jsx';
import Contato from './components/Contato.jsx';
import Footer from './components/Footer.jsx';

const email = 'Gustavoh2029@gmail.com';

const heroBadges = ['Front-end', 'Design System', 'UX/UI', 'Freelance'];

const projects = [
  {
    tag: 'Sistema web/desktop de gestão',
    title: 'Sistema de Gestão de Lavanderia - Vasconcelos',
    desc: 'Sistema completo para lavanderias com controle de pedidos, fluxo de status, login por niveis, relatórios financeiros e geração automática de DANFE em PDF.',
    badges: ['Python', 'Gradio', 'SQLite3', 'pdfkit', 'wkhtmltopdf', 'CSV', 'Datetime'],
    repoUrl: 'https://github.com/gustavoh-dev/Sistema-Lavanderia-Vasconcelos',
  },
  {
    tag: 'E-commerce / Catalogo digital / Front-end',
    title: 'Loja de Joias — E.V Pratas & Acessorios',
    desc: 'Catálogo de joias e bijuterias com filtros por categoria, sacola interativa e finalização de pedido via WhatsApp.',
    badges: ['React 18', 'Vite', 'Tailwind CSS', 'React Icons'],
    liveUrl: 'https://loja-de-bijuteria.vercel.app/',
    repoUrl: 'https://github.com/gustavoh-dev/Loja-De-Bijuteria',
  },
];

function App() {
  return (
    <>
      <Header email={email} />
      <main>
        <Hero email={email} badges={heroBadges} />
        <Projects projects={projects} />
        <Sobre />
        <Contato email={email} />
      </main>
      <Footer />
    </>
  );
}

export default App;
