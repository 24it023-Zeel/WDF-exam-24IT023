import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import LoginPage from "./pages/LoginPage";
import FleetPage from "./pages/FleetPage";
import MyBookingsPage from "./pages/MyBookingsPage";

const AdminPanel = lazy(() => import("./pages/AdminPanel"));

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/fleet"
          element={
            <ProtectedRoute>
              <FleetPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookingsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <AdminPanel />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}