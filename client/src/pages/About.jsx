import PageHeader from "../components/PageHeader";
import { about, bpRanges } from "../data/content";

export default function About() {
  return (
    <>
      <PageHeader title="About Hypertension" subtitle="Know the numbers, know the risks." />
      <div className="page">
        {about.map((s, i) => (
          <details className="card" key={s.title} open={i === 0}>
            <summary>{s.title}</summary>
            {Array.isArray(s.body) ? <ul>{s.body.map((b) => <li key={b}>{b}</li>)}</ul> : <p>{s.body}</p>}
          </details>
        ))}

        <section className="card">
          <h2>Blood pressure ranges (adults)</h2>
          <table>
            <thead><tr><th>Category</th><th>Top number</th><th>Bottom number</th></tr></thead>
            <tbody>
              {bpRanges.map(([c, s, d]) => <tr key={c}><td><strong>{c}</strong></td><td>{s}</td><td>{d}</td></tr>)}
            </tbody>
          </table>
          <p className="muted" style={{ marginTop: ".6rem" }}>In mmHg. Guidelines differ slightly; your doctor sets your own target.</p>
        </section>

        <section className="card urgent">
          <h2>When to get help now</h2>
          <p>A reading above 180/120 with chest pain, shortness of breath, weakness, trouble speaking or vision changes is an emergency. Call your local emergency number (112 in Nigeria) or go to the nearest hospital.</p>
        </section>

        <p className="muted">Health-In shares general information and is not a substitute for medical advice.</p>
      </div>
    </>
  );
}
