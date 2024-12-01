import "./App.css";
import Aop from "./components/aop/Aop";
import Jdbc from "./components/DbPage/Jdbc";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web from "./components/web/Web";
import Fundamentals from "./components/Fundamentals/Fundamentals";
import ChatBot from "./components/ChatBot/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aop" element={<Aop />} />
        <Route exact path="/fundamentals" element={<Fundamentals />} />
        <Route exact path="/jdbc" element={<Jdbc />} />
        <Route exact path="/webapprest" element={<Web />} />
      </Routes>
      <Footer />
      <ChatBot />
    </BrowserRouter>
  );
}

export default App;
