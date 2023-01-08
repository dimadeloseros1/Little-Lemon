import './App.css';
import "./Css/Nav.css";
import "./Css/Header.css";
import "./Css/Main.css";
import "./Css/Footer.css";
import "./Css/Testimonials.css";
import "./Css/About.css";
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Nav } from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import { About } from './Components/About';
import { Layout } from './Components/Layout';


function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
