import PageHeader from "../components/PageHeader";
import useLocalStorage from "../hooks/useLocalStorage";
import { lifestyle, today } from "../data/content";

export default function Lifestyle() {
  const [checked, setChecked] = useLocalStorage(`hi-check-${today()}`, []);
  const total = lifestyle.flatMap((g) => g.items).length;
  const pct = Math.round((checked.length / total) * 100);
  const toggle = (id) => setChecked((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));

  return (
    <>
      <PageHeader title="Lifestyle recommendation" subtitle="Small daily habits add up." />
      <div className="page">
        <section className="card">
          <div className="row"><h2>Today's habits</h2><span className="muted">{checked.length} of {total}</span></div>
          <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}><i style={{ width: `${pct}%` }} /></div>
        </section>

        {lifestyle.map((g) => (
          <section className="card" key={g.id}>
            <h2>{g.title}</h2>
            <p className="muted" style={{ marginBottom: ".7rem" }}>{g.why}</p>
            <div style={{ display: "grid", gap: ".7rem" }}>
              {g.items.map((it) => (
                <label className="check" key={it.id}>
                  <input type="checkbox" checked={checked.includes(it.id)} onChange={() => toggle(it.id)} />
                  {it.text}
                </label>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
