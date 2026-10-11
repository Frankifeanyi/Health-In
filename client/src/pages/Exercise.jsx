import { useState } from "react";
import PageHeader from "../components/PageHeader";
import useLocalStorage from "../hooks/useLocalStorage";
import { exercises, today } from "../data/content";

const levels = ["All", "Easy", "Moderate"];

export default function Exercise() {
  const [level, setLevel] = useState("All");
  const [done, setDone] = useLocalStorage(`hi-ex-${today()}`, []);
  const shown = exercises.filter((e) => level === "All" || e.level === level);
  const toggle = (id) => setDone((d) => (d.includes(id) ? d.filter((x) => x !== id) : [...d, id]));
  const mins = exercises.filter((e) => done.includes(e.id)).reduce((s, e) => s + e.minutes, 0);

  return (
    <>
      <PageHeader title="Exercise" subtitle="Aim for 150 minutes of moderate activity a week." />
      <div className="page">
        <section className="card">
          <div className="row"><h2>Today</h2><span className="muted">{mins} of 30 minutes</span></div>
          <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={30} aria-valuenow={Math.min(mins, 30)}>
            <i style={{ width: `${Math.min(100, (mins / 30) * 100)}%` }} />
          </div>
        </section>

        <div className="chips" role="group" aria-label="Filter by level">
          {levels.map((l) => <button key={l} className="chip" aria-pressed={level === l} onClick={() => setLevel(l)}>{l}</button>)}
        </div>

        {shown.map((e) => (
          <article className="card" key={e.id}>
            <div className="row"><h2>{e.name}</h2><span className={`badge ${e.level === "Moderate" ? "o" : ""}`}>{e.level}</span></div>
            <p>{e.minutes} minutes</p>
            <p className="muted">{e.tip}</p>
            <label className="check" style={{ marginTop: ".7rem" }}>
              <input type="checkbox" checked={done.includes(e.id)} onChange={() => toggle(e.id)} />
              Done today
            </label>
          </article>
        ))}

        <section className="card urgent">
          <h2>Stop and rest if you feel</h2>
          <p>Chest pain, dizziness, severe shortness of breath or a pounding headache. Talk to your doctor before starting a new routine.</p>
        </section>
      </div>
    </>
  );
}
