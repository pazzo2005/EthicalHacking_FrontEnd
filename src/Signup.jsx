import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./AuthContext";
import "./App.css";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
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
      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to create your account.");
      navigate("/login", { replace: true, state: { signupMessage: "Account created. Please sign in." } });
    } catch (requestError) {
      setError(requestError.message || "A server error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <div className="auth-card">
        <div className="brand">CyberLab</div>
        <h1>Create account</h1>
        <p className="subtitle">Sign up to get started</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username" placeholder="Choose a username" value={form.username} onChange={handleChange} autoComplete="username" minLength={3} maxLength={32} pattern="[A-Za-z0-9_]+" title="Use 3–32 letters, numbers, or underscores." required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} autoComplete="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" placeholder="At least 8 characters" value={form.password} onChange={handleChange} autoComplete="new-password" minLength={8} maxLength={72} required />
          </div>
          {error && <p className="subtitle" role="alert">{error}</p>}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Creating Account…" : "Create Account"}
          </button>
        </form>
        <p className="switch-text">
          Already have an account?{" "}
          <button type="button" className="switch-btn" onClick={() => navigate("/login")}>Sign In</button>
        </p>
      </div>
    </div>
  );
}
