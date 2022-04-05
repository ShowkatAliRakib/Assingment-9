import './App.css';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Reviews from './Reviews/Reviews';
import Blogs from './Blogs/Blogs';
import About from './About/About';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Reviews" element={<Reviews/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
         <Route path="/Blogs" element={<Blogs/> }></Route>
        <Route path="/About" element={<About/> }></Route>
       
      </Routes>
    </div>
  );
}

export default App;
