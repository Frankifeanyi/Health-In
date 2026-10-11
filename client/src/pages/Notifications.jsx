import { useState } from "react";
import { Trash2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import useLocalStorage from "../hooks/useLocalStorage";
import { defaultReminders, seedAlerts } from "../data/content";

export default function Notifications() {
  const [reminders, setReminders] = useLocalStorage("hi-reminders", defaultReminders);
  const [alerts, setAlerts] = useLocalStorage("hi-alerts", seedAlerts);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("09:00");
  const [perm, setPerm] = useState("Notification" in window ? Notification.permission : "unsupported");

  const patch = (id, p) => setReminders((l) => l.map((r) => (r.id === id ? { ...r, ...p } : r)));
  const add = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setReminders((l) => [...l, { id: Date.now(), title: title.trim(), time, on: true }]);
    setTitle("");
  };
  const enable = async () => setPerm(await Notification.requestPermission());

  return (
    <>
      <PageHeader title="Notification" subtitle="Reminders and health alerts." />
      <div className="page">
        {perm !== "granted" && (
          <section className="card alert">
            <h2>Turn on phone alerts</h2>
            <p className="muted" style={{ marginBottom: ".7rem" }}>
              {perm === "unsupported" ? "This browser does not support notifications." : perm === "denied" ? "Notifications are blocked. Allow them in your browser's site settings." : "Reminders pop up while Health-In is open."}
            </p>
            {perm === "default" && <button className="btn" onClick={enable}>Allow notifications</button>}
          </section>
        )}

        <section className="card">
          <h2>My reminders</h2>
          <div style={{ display: "grid", gap: ".8rem", marginTop: ".6rem" }}>
            {reminders.map((r) => (
              <div className="row" key={r.id}>
                <label className="check" style={{ flex: 1, alignItems: "center" }}>
                  <input type="checkbox" checked={r.on} onChange={() => patch(r.id, { on: !r.on })} aria-label={`Turn ${r.title} on or off`} />
                  {r.title}
                </label>
                <input type="time" value={r.time} onChange={(e) => patch(r.id, { time: e.target.value })} aria-label={`Time for ${r.title}`} />
                <button className="chip" onClick={() => setReminders((l) => l.filter((x) => x.id !== r.id))} aria-label={`Delete ${r.title}`}><Trash2 size={16} /></button>
              </div>
            ))}
            {!reminders.length && <p className="muted">No reminders yet. Add one below.</p>}
          </div>
        </section>

        <form className="card" onSubmit={add} style={{ display: "grid", gap: ".8rem" }}>
          <h2>Add a reminder</h2>
          <label>What should we remind you about?<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Drink water" /></label>
          <label>Time<input type="time" value={time} onChange={(e) => setTime(e.target.value)} /></label>
          <button className="btn" type="submit">Add reminder</button>
        </form>

        <section className="card">
          <div className="row"><h2>Alerts</h2>
            <button className="chip" onClick={() => setAlerts((a) => a.map((x) => ({ ...x, read: true })))}>Mark all read</button>
          </div>
          <div style={{ display: "grid", gap: ".8rem", marginTop: ".7rem" }}>
            {alerts.map((a) => (
              <article key={a.id} style={{ opacity: a.read ? 0.6 : 1 }}>
                <strong>{a.title}</strong>
                <p className="muted">{a.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
