import { useState } from "react";
import { Heart } from "lucide-react";
import PageHeader from "../components/PageHeader";
import useLocalStorage from "../hooks/useLocalStorage";
import { seedPosts } from "../data/content";

export default function Community() {
  const [posts, setPosts] = useLocalStorage("hi-posts", seedPosts);
  const [settings] = useLocalStorage("hi-settings", { name: "", large: false });
  const [text, setText] = useState("");

  const post = (e) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    setPosts((p) => [{ id: Date.now(), name: settings.name || "You", text: t, likes: 0, liked: false }, ...p]);
    setText("");
  };
  const like = (id) => setPosts((p) => p.map((x) => (x.id === id ? { ...x, liked: !x.liked, likes: x.likes + (x.liked ? -1 : 1) } : x)));

  return (
    <>
      <PageHeader title="Community Engagement" subtitle="Encourage each other." />
      <div className="page">
        <form className="card" onSubmit={post} style={{ display: "grid", gap: ".8rem" }}>
          <label>Share a tip or a win
            <textarea rows={3} value={text} onChange={(e) => setText(e.target.value)} placeholder="What helped you this week?" />
          </label>
          <button className="btn" type="submit">Post</button>
          <p className="muted">Don't share personal medical details. Ask a health worker for medical advice.</p>
        </form>

        {posts.map((p) => (
          <article className="card" key={p.id}>
            <strong>{p.name}</strong>
            <p style={{ margin: ".3rem 0 .6rem" }}>{p.text}</p>
            <button className="chip" onClick={() => like(p.id)} aria-pressed={p.liked} aria-label={`Like post by ${p.name}`}>
              <Heart size={14} fill={p.liked ? "currentColor" : "none"} style={{ verticalAlign: "-2px" }} /> {p.likes}
            </button>
          </article>
        ))}
      </div>
    </>
  );
}
