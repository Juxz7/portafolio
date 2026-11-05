import './Banner.css';

const Banner = () => (
  <section id="inicio" className="banner">
    <div className="banner-contenido">
      <p className="banner-etiqueta">
        <span className="banner-punto"></span> Estudiante en SENATI
      </p>
      <p className="banner-saludo">Hola, soy</p>
      <h1 className="banner-nombre">
        Jesus Carlos
        <br />
        <span>Cumpally Alanoca</span>
      </h1>
      <h2 className="banner-subtitulo">
        Ingeniería de Software con Inteligencia Artificial
      </h2>
      <p className="banner-texto">
        Estoy aprendiendo a crear aplicaciones web, móviles y proyectos
        electrónicos. Me interesa convertir ideas en soluciones que funcionen.
      </p>

      <div className="banner-botones">
        <a href="#proyectos" className="btn btn-primario">
          Ver mis proyectos
        </a>
        <a href="#contacto" className="btn btn-secundario">
          Contáctame
        </a>
      </div>

      <ul className="banner-tecnologias">
        <li>React</li>
        <li>JavaScript</li>
        <li>Git</li>
        <li>Android Studio</li>
        <li>Arduino</li>
      </ul>
    </div>
  </section>
);

export default Banner;
