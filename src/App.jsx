import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from "./components/SideBar";
import Home from './pages/home/Home';
import PlayerInfo from "./pages/player-info/Player-Info";
import Carousel from "./components/Carousel";


function App() {


  return (
    <>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diegovargas" element={<PlayerInfo />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
