import logo from './logo.svg';
import 'react-bootstrap'

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/scripts/navbar"
import About from "./pages/scripts/about"
import Model from "./pages/scripts/model"
import Exp from "./pages/scripts/exp"
import Success from './pages/scripts/success';
import Project from './pages/scripts/project';
import Experiment from './pages/scripts/experiment';
import Visual from './pages/scripts/visual';
function App() {
  return (
   <div>
  <Router basename="/">
   <Navbar/>
    <About/>
    <Model/>
    <Exp/>
    <Experiment/>
    <Visual/>
    <Success/>
    <Project/>
    <Routes>

      <Route exact path="/"  element={<About />} />
      <Route exact path="/model" model element={<Model/>}/>
    </Routes>
  </Router>
  </div> 
  );
}

export default App;