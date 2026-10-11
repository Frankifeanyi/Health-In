import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Settings() {
  const [s, setS] = useLocalStorage("hi-settings", { name: "", large: false });

  const reset = () => {
    if (!window.confirm("Clear your reminders, habits and posts from this device?")) return;
    Object.keys(localStorage).filter((k) => k.startsWith("hi-")).forEach((k) => localStorage.removeItem(k));
    window.dispatchEvent(new CustomEvent("hi-storage"));
  };

  return (
    <>
      <PageHeader title="Settings" subtitle="Make Health-In work for you." />
      <div className="page">
        <section className="card" style={{ display: "grid", gap: ".9rem" }}>
          <label>Your name
            <input value={s.name} onChange={(e) => setS({ ...s, name: e.target.value })} placeholder="Shown on your community posts" />
          </label>
          <label className="check">
            <input type="checkbox" checked={s.large} onChange={() => setS({ ...s, large: !s.large })} />
            Larger text
          </label>
        </section>

        <section className="card" style={{ display: "grid", gap: ".8rem" }}>
          <h2>Account</h2>
          <Link className="btn" to="/login">Sign in or create account</Link>
        </section>

        <section className="card" style={{ display: "grid", gap: ".8rem" }}>
          <h2>Your data</h2>
          <p className="muted">Reminders, habits and posts are saved on this device only.</p>
          <button className="btn danger" onClick={reset}>Clear data on this device</button>
        </section>

        <p className="muted">Health-In v0.1. General information only, not medical advice.</p>
      </div>
    </>
  );
}
