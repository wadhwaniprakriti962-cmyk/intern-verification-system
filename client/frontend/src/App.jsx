import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generate from "./pages/Generate";
import Navbar from "./components/Navbar";
import Verify from "./pages/Verify";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/generate" element={<Generate />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;