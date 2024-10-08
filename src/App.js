import logo from './logo.svg';
import 'react-bootstrap'

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/scripts/navbar"
import About from "./pages/scripts/about"
function App() {
  return (
   <div>
  <Router basename="/">
    <Navbar/>
    <Routes>
      <Route exact path="/"  element={<About />} />
    </Routes>
  </Router>
  </div> 
  );
}

export default App;