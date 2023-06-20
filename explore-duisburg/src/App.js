
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import PlacesToVisit from './Routes/PlacesToVisit';
import HolidayRentals from './Routes/HolidayRentals';
import About from './Routes/About';
import Contact from './Routes/Contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placestovisit" element={<PlacesToVisit />} />
        <Route path="/holidayrentals" element={<HolidayRentals />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      
      <Navbar />
      
      

          
      
    </div>
  );
}

export default App;
