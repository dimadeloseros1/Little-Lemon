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


function App() {
  return (
    <>
    <div className='App'>
      <Nav />
      <Header />
      <Main />
      <Footer />  
    </div>
    </>
  );
}

export default App;
