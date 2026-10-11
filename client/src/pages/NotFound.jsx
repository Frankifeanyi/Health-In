import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" />
      <div className="page">
        <p className="card">That page doesn't exist. Head back to the home screen.</p>
        <Link className="btn" to="/">Go to Home</Link>
      </div>
    </>
  );
}
