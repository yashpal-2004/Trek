import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rudranath-plan1" element={<Home />} />
        <Route path="/rudranath-plan2" element={<Home />} />
        <Route path="/plan1" element={<Home />} />
        <Route path="/plan2" element={<Home />} />
        <Route path="/sikkim" element={<Home />} />
        <Route path="/yulla-plan1" element={<Home />} />
        <Route path="/yulla-plan2" element={<Home />} />
        <Route path="/hemkund" element={<Home />} />
        <Route path="/ladakh-plan1" element={<Home />} />
        <Route path="/ladakh-plan2" element={<Home />} />
        <Route path="/ladakh-plan3" element={<Home />} />
        <Route path="/ladakh-plan4" element={<Home />} />
        <Route path="/spiti-plan1" element={<Home />} />
        <Route path="/spiti-plan2" element={<Home />} />
        <Route path="/spiti-plan3" element={<Home />} />
        <Route path="/annapurna-plan1" element={<Home />} />
        <Route path="/shrikhand-plan1" element={<Home />} />
        <Route path="/shrikhand-plan2" element={<Home />} />
        <Route path="/hampta-plan1" element={<Home />} />
        <Route path="/hampta-plan2" element={<Home />} />
        <Route path="/madhyamaheshwar-plan1" element={<Home />} />
        <Route path="/madhyamaheshwar-plan2" element={<Home />} />
        <Route path="/kedarkantha" element={<Home />} />
        <Route path="/bir-billing" element={<Home />} />
        <Route path="/bir-billing-plan1" element={<Home />} />
        <Route path="/bir-billing-plan2" element={<Home />} />
        <Route path="/bir-billing-plan3" element={<Home />} />
        <Route path="/bir-billing-plan4" element={<Home />} />
        <Route path="/jibhi-plan1" element={<Home />} />
        <Route path="/jibhi-plan2" element={<Home />} />
        <Route path="/ujjain" element={<Home />} />
        <Route path="/auli" element={<Home />} />
        <Route path="/kashmir" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
