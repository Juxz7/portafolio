import './Servicios.css';

const servicios = [
  { id: 1, titulo: 'Páginas web', texto: 'Sitios adaptables hechos con React, HTML y CSS.' },
  { id: 2, titulo: 'Apps móviles', texto: 'Prototipos de aplicaciones en Android Studio.' },
  { id: 3, titulo: 'Electrónica con Arduino', texto: 'Circuitos con sensores y actuadores para proyectos escolares y técnicos.' },
  { id: 4, titulo: 'Automatizaciones', texto: 'Scripts sencillos que ahorran tareas repetitivas.' },
];

const Servicios = () => (
  <section id="servicios" className="section servicios">
    <div className="section-wrap">
      <div className="section-heading">
        <span className="section-kicker">Servicios</span>
        <h2 className="section-title">¿Qué puedo construir?</h2>
        <p className="section-sub">
          Proyectos acotados, acompañados y acordes a mi nivel actual.
        </p>
      </div>

      <div className="servicios-grid">
        {servicios.map((servicio) => (
          <article key={servicio.id} className="servicio-card">
            <span className="servicio-numero">0{servicio.id}</span>
            <h3>{servicio.titulo}</h3>
            <p>{servicio.texto}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Servicios;
