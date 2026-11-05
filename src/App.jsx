import Navbar from './components/Navbar/Navbar.jsx';
import Banner from './components/Banner/Banner.jsx';
import Perfil from './components/Perfil/Perfil.jsx';
import Habilidades from './components/Habilidades/Habilidades.jsx';
import Proyectos from './components/Proyectos/Proyectos.jsx';
import Servicios from './components/Servicios/Servicios.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Perfil />
        <Habilidades />
        <Proyectos />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
