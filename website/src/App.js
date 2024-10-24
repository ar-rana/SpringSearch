import './App.css';
import Button from './components/button/Button';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/aop' element={<Home/>}/>
      <Route exact path='/fundamentals' element={<Home/>}/>
      <Route exact path='/jdbc' element={<Home/>}/>
      <Route exact path='/webapprest' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
