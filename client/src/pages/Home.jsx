import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { features, tips } from "../data/content";

export default function Home() {
  const [q, setQ] = useState("");
  const [i, setI] = useState(0);
  const go = (d) => setI((n) => (n + d + tips.length) % tips.length);
  const term = q.trim().toLowerCase();
  const list = features.filter((f) => !term || `${f.label} ${f.keywords}`.toLowerCase().includes(term));

  return (
    <>
      <header className="hero">
        <Link to="/login" className="avatar" aria-label="Profile and sign in"><User size={22} /></Link>
        <h1>Health-In</h1>
        <div className="search">
          <Search size={20} />
          <input type="search" placeholder="Search" aria-label="Search Health-In" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="carousel">
          <button onClick={() => go(-1)} aria-label="Previous tip"><ChevronLeft /></button>
          <p className="banner" aria-live="polite">{tips[i]}</p>
          <button onClick={() => go(1)} aria-label="Next tip"><ChevronRight /></button>
        </div>
      </header>

      <nav className="menu" aria-label="Features">
        {list.map(({ to, label, Icon }) => (
          <Link key={to} to={to} className="pill"><Icon size={28} />{label}</Link>
        ))}
        {!list.length && <p className="card">No match for “{q}”. Try “exercise”, “salt” or “clinic”.</p>}
      </nav>
    </>
  );
}
