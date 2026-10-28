import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./App.css";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate("/dashboard", { replace: true });
    } catch (requestError) {
      setError(requestError.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <div className="auth-card">
        <div className="brand">CyberLab</div>
        <h1>Welcome back</h1>
        <p className="subtitle">Sign in to continue to your account</p>
        {location.state?.signupMessage && <p className="subtitle" role="status">{location.state.signupMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} autoComplete="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange} autoComplete="current-password" required />
          </div>
          {error && <p className="subtitle" role="alert">{error}</p>}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Signing In…" : "Sign In"}
          </button>
        </form>
        <p className="switch-text">
          Don&apos;t have an account?{" "}
          <button type="button" className="switch-btn" onClick={() => navigate("/signup")}>Sign Up</button>
        </p>
      </div>
    </div>
  );
}
