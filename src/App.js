import { SpeedInsights } from "@vercel/speed-insights/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavbar from "./components/navbar/Navbar";
import { Container } from "react-bootstrap";
import MarketPlace from "./components/market place/MarketPlace";
import Cart from "./components/market place/Cart";
import Video from "./components/video/Video";
import Events from "./components/events/Events";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Container>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/video" element={<Video />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Container>
      <SpeedInsights />
    </div>
  );
}

export default App;
