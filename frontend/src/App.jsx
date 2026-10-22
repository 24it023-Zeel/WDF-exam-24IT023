import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import FleetPage from "./pages/FleetPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;