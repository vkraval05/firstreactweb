import About from './About';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import {
  Routes, // instead of "Switch"
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from './Navbar';
import Services from './Services';
import Contect from './Contect';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/service' Component={Services} />
        <Route exact path='/contect' Component={Contect} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
