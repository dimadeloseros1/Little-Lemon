import './App.css';
import "./Css/Nav.css";
import "./Css/Header.css";
import "./Css/Main.css";
import "./Css/Footer.css";
import "./Css/Testimonials.css";
import "./Css/About.css";
import "./Css/Booking.css";
import "./Css/Confirmation.css"
import { Main } from './Components/Main';
import { Route, Routes } from 'react-router-dom';
import { About } from './Components/About';
import { Layout } from './Components/Layout';
import { Menu } from './Components/Menu';
import { Booking } from './Components/Booking.js';
import { Confirmation } from './Components/Confirmation';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path='/Confirmation' element={<Confirmation />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
