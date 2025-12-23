import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CafeLanding } from './pages/CafeLanding';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Reservation } from './pages/Reservation';
import { Contact } from './pages/Contact';
export function App() {
  return <Router>
      <Routes>
        <Route path="/" element={<CafeLanding />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>;
}