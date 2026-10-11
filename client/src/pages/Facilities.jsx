import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { facilities } from "../data/content";

const types = ["All", "Hospital", "Clinic", "Pharmacy"];

export default function Facilities() {
  const [type, setType] = useState("All");
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const shown = facilities.filter(
    (f) => (type === "All" || f.type === type) && `${f.name} ${f.area}`.toLowerCase().includes(term)
  );

  return (
    <>
      <PageHeader title="Health facility tracker" subtitle="Find a hospital, clinic or pharmacy." />
      <div className="page">
        <input type="search" placeholder="Search by name or area" aria-label="Search facilities" value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="chips" role="group" aria-label="Filter by type">
          {types.map((t) => (
            <button key={t} className="chip" aria-pressed={type === t} onClick={() => setType(t)}>{t}</button>
          ))}
        </div>

        {shown.map((f) => (
          <article className="card" key={f.id}>
            <div className="row"><h2>{f.name}</h2><span className="badge">{f.type}</span></div>
            <p>{f.area}</p>
            <p className="muted">{f.hours}</p>
            <div className="row" style={{ marginTop: ".8rem", justifyContent: "flex-start" }}>
              <a className="btn" target="_blank" rel="noreferrer"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${f.name} ${f.area}`)}`}>
                Get directions
              </a>
              {f.phone && <a className="btn alt" href={`tel:${f.phone}`}>Call</a>}
            </div>
          </article>
        ))}
        {!shown.length && <p className="card">No facilities found. Clear the search or choose “All”.</p>}
        <p className="muted">Listings are samples for now. Confirm opening hours by phone before you go.</p>
      </div>
    </>
  );
}
