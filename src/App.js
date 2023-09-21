import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/projects" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
