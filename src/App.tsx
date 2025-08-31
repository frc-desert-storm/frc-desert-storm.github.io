import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sponsors from "./pages/Sponsors";
import "./index.css";
import Donate from "./pages/Donate";
import SponsorshipTiers from "./components/SponsorshipTiers";

<SponsorshipTiers />;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
}

export default App;
