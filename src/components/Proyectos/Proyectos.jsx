import './Proyectos.css';

// Cambia estos datos por tus proyectos reales y agrega tus enlaces.
const proyectos = [
  {
    id: 1,
    titulo: 'App de login en Android Studio',
    descripcion:
      'Aplicación móvil con flujo de inicio de sesión y varias pantallas conectadas con Navigation Component.',
    tecnologias: ['Android Studio', 'Java/Kotlin', 'Navigation'],
    linkCodigo: 'https://github.com/tu-usuario/tu-repositorio',
  },
  {
    id: 2,
    titulo: 'Servo controlado por temperatura',
    descripcion:
      'Circuito en Arduino UNO con sensor de temperatura, servo, LED y pantalla LCD que reaccionan según un umbral de 30 °C.',
    tecnologias: ['Arduino', 'Tinkercad', 'C++'],
    linkCodigo: 'https://github.com/tu-usuario/tu-repositorio',
  },
  {
    id: 3,
    titulo: 'Directorio de alumnos con React',
    descripcion:
      'Pequeña app con tarjetas de alumnos y un contador de seleccionados, hecha con componentes y useState.',
    tecnologias: ['React', 'Vite', 'Bootstrap'],
    linkCodigo: 'https://github.com/tu-usuario/tu-repositorio',
  },
];

const Proyectos = () => (
  <section id="proyectos" className="section proyectos">
    <div className="section-wrap">
      <div className="section-heading">
        <span className="section-kicker">Trabajo seleccionado</span>
        <h2 className="section-title">Proyectos destacados</h2>
      </div>

      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <article key={proyecto.id} className="proyecto-card">
            <span className="proyecto-indice">PROYECTO 0{proyecto.id}</span>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <div className="proyecto-tags">
              {proyecto.tecnologias.map((tec) => (
                <span key={tec}>{tec}</span>
              ))}
            </div>
            <a
              href={proyecto.linkCodigo}
              target="_blank"
              rel="noreferrer"
              className="proyecto-boton"
            >
              Ver código
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Proyectos;
