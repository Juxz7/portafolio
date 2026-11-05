import { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [enviado, setEnviado] = useState(false);

  // Envío simulado: no se guarda ni se envía nada.
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setEnviado(true);
    evento.target.reset();
  };

  return (
    <section id="contacto" className="section contacto">
      <div className="section-wrap">
        <div className="section-heading">
          <span className="section-kicker">¿Tienes una idea?</span>
          <h2 className="section-title">Trabajemos juntos</h2>
        </div>

        <div className="contacto-grid">
          <div className="contacto-info">
            <h3>Contacto directo</h3>
            <p>Escríbeme y conversamos sobre tu proyecto.</p>
            <ul>
              <li>
                <span>Correo</span>
                <a href="mailto:jccumpally@gmail.com">jesus.dev.2005@gmail.com</a>
              </li>
              <li>
                <span>Ubicación</span>
                <strong>Perú</strong>
              </li>
              <li>
                <span>GitHub</span>
                <a href="https://github.com/Juxz7" target="_blank" rel="noreferrer">
                  github.com/Juxz7
                </a>
              </li>
            </ul>
          </div>

          <form className="contacto-form" onSubmit={manejarEnvio}>
            <label>
              Nombre
              <input type="text" placeholder="Escribe tu nombre" required />
            </label>
            <label>
              Correo electrónico
              <input type="email" placeholder="tu@email.com" required />
            </label>
            <label>
              Mensaje
              <textarea rows="5" placeholder="Cuéntame brevemente tu idea" required></textarea>
            </label>
            <button type="submit">Enviar mensaje</button>
            <p className="contacto-nota">
              {enviado
                ? '¡Gracias! El envío es simulado: no se guardan ni se envían los datos.'
                : 'El envío es simulado; no se guardan ni se envían los datos.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
