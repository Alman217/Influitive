import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Employee from './Components/Employee';
import AddDetails from './Components/AddDetails';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route exact path = "/home" element = {<Home />} />
      <Route exact path = "/employee" element = {<Employee />} />
      <Route exact path = "/add" element = {<AddDetails />} />
      <Route exact path = "/contact" element = {<Contact />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;