import './Perfil.css';

const formacion = [
  {
    periodo: 'Actualmente',
    titulo: 'Ingeniería de Software con Inteligencia Artificial',
    detalle: 'SENATI. Programación, desarrollo web y fundamentos de IA.',
  },
  {
    periodo: 'En curso',
    titulo: 'Seminario IA 502 · Fullstack Developer Software',
    detalle: 'React, Git, GitHub y despliegue en Vercel.',
  },
  {
    periodo: 'Práctica personal',
    titulo: 'Proyectos propios',
    detalle: 'Apps en Android Studio y circuitos con Arduino.',
  },
];

const Perfil = () => (
  <section id="sobre-mi" className="section perfil">
    <div className="section-wrap">
      <div className="section-heading">
        <span className="section-kicker">Conóceme</span>
        <h2 className="section-title">Sobre mí</h2>
      </div>

      <div className="perfil-grid">
        <article className="perfil-card">
          <h3>Perfil profesional</h3>
          <p>
            Soy Jesus Carlos Cumpally Alanoca, estudiante de Ingeniería de
            Software con Inteligencia Artificial en SENATI, en Perú. Me gusta
            aprender haciendo: construyo pequeños proyectos para entender cómo
            funcionan las aplicaciones por dentro.
          </p>
          <p>
            Actualmente practico React, JavaScript, Git y GitHub, y también
            trabajo con Android Studio y Arduino. Mi meta es llegar a ser
            desarrollador fullstack.
          </p>
          <div className="perfil-etiquetas">
            <span>Curiosidad</span>
            <span>Constancia</span>
            <span>Aprendizaje continuo</span>
          </div>
        </article>

        <article className="perfil-card">
          <h3>Formación</h3>
          <div className="linea-tiempo">
            {formacion.map((item) => (
              <div key={item.titulo} className="linea-item">
                <span className="linea-periodo">{item.periodo}</span>
                <h4>{item.titulo}</h4>
                <p>{item.detalle}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Perfil;
