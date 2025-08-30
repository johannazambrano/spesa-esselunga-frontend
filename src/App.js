import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListaSpese from './components/ListaSpese';
import CreaSpesa from './components/CreaSpesa';
import ModificaSpesa from './components/ModificaSpesa';
import MappaPercorso from './components/MappaPercorso';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/spese">Lista Spese</Link></li>
          <li><Link to="/crea">Crea Nuova Spesa</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/spese" element={<ListaSpese />} />
        <Route path="/crea" element={<CreaSpesa />} />
        <Route path="/modifica/:id" element={<ModificaSpesa />} />
        <Route path="/percorso" element={<MappaPercorso />} />
      </Routes>
    </Router>
  );
}

export default App;
