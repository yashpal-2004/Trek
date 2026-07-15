import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plan1" element={<Home />} />
        <Route path="/plan2" element={<Home />} />
        <Route path="/sikkim" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
