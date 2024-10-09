import logo from './logo.svg';
import 'react-bootstrap'

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/scripts/navbar"
import About from "./pages/scripts/about"
import Model from "./pages/scripts/model"
function App() {
  return (
   <div>
  <Router basename="/">
    <Navbar/>
    <Routes>
      <Route exact path="/"  element={<About />} />
      <Route exact path="/model" model element={<Model/>}/>
    </Routes>
  </Router>
  </div> 
  );
}

export default App;