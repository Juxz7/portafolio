import './Habilidades.css';

// Cada habilidad lleva su porcentaje dentro del mismo objeto.
// Ajusta los niveles según lo que realmente dominas.
const habilidades = [
  { id: 1, titulo: 'HTML5', descripcion: 'Estructura semántica de páginas web.', nivel: 'En práctica', porcentaje: 70 },
  { id: 2, titulo: 'CSS3', descripcion: 'Flexbox, Grid y diseño adaptable.', nivel: 'En práctica', porcentaje: 65 },
  { id: 3, titulo: 'JavaScript', descripcion: 'Variables, funciones, arreglos y eventos.', nivel: 'En aprendizaje', porcentaje: 55 },
  { id: 4, titulo: 'React', descripcion: 'Componentes, props y estado con useState.', nivel: 'En aprendizaje', porcentaje: 50 },
  { id: 5, titulo: 'Git y GitHub', descripcion: 'Commits, ramas y repositorios remotos.', nivel: 'En práctica', porcentaje: 60 },
  { id: 6, titulo: 'Android Studio', descripcion: 'Pantallas, login y navegación en apps.', nivel: 'En aprendizaje', porcentaje: 50 },
  { id: 7, titulo: 'Arduino', descripcion: 'Sensores, servos y pantallas LCD.', nivel: 'En práctica', porcentaje: 60 },
];

const Habilidades = () => (
  <section id="habilidades" className="section habilidades">
    <div className="section-wrap">
      <div className="section-heading">
        <span className="section-kicker">Tecnologías</span>
        <h2 className="section-title">Habilidades y herramientas</h2>
        <p className="section-sub">Lo que uso y lo que estoy aprendiendo.</p>
      </div>

      <div className="habilidades-grid">
        {habilidades.map((hab, indice) => (
          <article key={hab.id} className="habilidad-card">
            <div className="habilidad-cabecera">
              <span className="habilidad-numero">0{indice + 1}</span>
              <span className="habilidad-nivel">{hab.nivel}</span>
            </div>
            <h3>{hab.titulo}</h3>
            <p>{hab.descripcion}</p>
            <div className="habilidad-barra">
              <span style={{ width: `${hab.porcentaje}%` }}></span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Habilidades;
