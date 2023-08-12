import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';

import {BrowserRouter ,Routes,Route} from "react-router-dom"
function App() {
  return (
   <>
     {/* <h1 className="bg-primary">React</h1>
     <p>This is a paragraph</p> */}
<BrowserRouter>
<NavBar />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<Signup />} />
</Routes>
</BrowserRouter>
   </>
  );
}

export default App;
