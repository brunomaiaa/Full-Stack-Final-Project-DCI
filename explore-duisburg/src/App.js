
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Routes/Home';
import PlacesToVisit from './Routes/PlacesToVisit';
import Accomodations from './Routes/Accomodations';
import About from './Routes/About';
import Contact from './Routes/Contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placestovisit" element={<PlacesToVisit />} />
        <Route path="/Accomodations" element={<Accomodations />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      
      
      
      

          
      
    </div>
  );
}

export default App;
