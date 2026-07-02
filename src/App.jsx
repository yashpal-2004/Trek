import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Expenses from "./pages/Expenses";
import Resources from "./pages/Resources";
import StayPage from "./pages/StayPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plan1" element={<Home />} />
        <Route path="/plan2" element={<Home />} />
        <Route path="/sikkim" element={<Home />} />
        <Route path="/plan1/expenses" element={<Expenses />} />
        <Route path="/plan2/expenses" element={<Expenses />} />
        <Route path="/sikkim/expenses" element={<Expenses />} />
        <Route path="/plan1/resources" element={<Resources />} />
        <Route path="/plan2/resources" element={<Resources />} />
        <Route path="/sikkim/resources" element={<Resources />} />
        <Route path="/plan1/stay" element={<StayPage />} />
        <Route path="/plan2/stay" element={<StayPage />} />
        <Route path="/sikkim/stay" element={<StayPage />} />
      </Routes>
    </BrowserRouter>
  );
}
