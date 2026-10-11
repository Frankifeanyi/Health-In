import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="phead">
      <Link to="/" aria-label="Back to Home"><ArrowLeft /></Link>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
