import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Dashboard from "./DashBoard";
import Signup from "./Signup";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { logClientEvent } from "./clientLogger";

let lastLoggedPage = "";

function ActivityTracker() {
  const location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    if (page !== lastLoggedPage) {
      lastLoggedPage = page;
      logClientEvent("page_view", { path: page });
    }
  }, [location.pathname]);

  useEffect(() => {
    function logClick(event) {
      if (!(event.target instanceof Element)) return;
      const control = event.target.closest("button, a, [role='button']");
      if (!control) return;
      const label = (control.getAttribute("aria-label") || control.innerText || control.textContent || "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 100);
      if (label) logClientEvent("ui_click", { path: window.location.pathname, source: label });
    }

    document.addEventListener("click", logClick, true);
    return () => document.removeEventListener("click", logClick, true);
  }, []);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ActivityTracker />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
