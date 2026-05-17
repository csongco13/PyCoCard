import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";
import Rules from "./pages/Rules.jsx";

function App() {
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/game">Game</Link>
        <Link className="nav-link" to="/rules">Rules</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </>
  );
}

export default App;