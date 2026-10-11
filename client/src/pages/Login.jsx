import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function Login() {
  const nav = useNavigate();
  const [signup, setSignup] = useState(false);
  const [f, setF] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (signup && !f.name.trim()) return setErr("Enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return setErr("Enter a valid email address.");
    if (f.password.length < 8) return setErr("Use at least 8 characters for your password.");
    setErr("");
    // TODO: call POST /api/auth/login or /register once the backend is ready.
    nav("/");
  };

  return (
    <>
      <PageHeader title={signup ? "Create account" : "Sign in"} subtitle="Keep your progress on every device." />
      <div className="page">
        <form className="card" onSubmit={submit} style={{ display: "grid", gap: ".9rem" }}>
          {signup && <label>Name<input value={f.name} onChange={set("name")} autoComplete="name" /></label>}
          <label>Email<input type="email" value={f.email} onChange={set("email")} autoComplete="email" /></label>
          <label>Password<input type="password" value={f.password} onChange={set("password")} autoComplete={signup ? "new-password" : "current-password"} /></label>
          {err && <p className="err" role="alert">{err}</p>}
          <button className="btn" type="submit">{signup ? "Create account" : "Sign in"}</button>
        </form>
        <button className="chip" onClick={() => { setSignup(!signup); setErr(""); }}>
          {signup ? "I already have an account" : "I'm new here. Create an account"}
        </button>
      </div>
    </>
  );
}
