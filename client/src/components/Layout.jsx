import { useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Home, Users, Settings } from "lucide-react";
import useLocalStorage from "../hooks/useLocalStorage";
import { defaultReminders } from "../data/content";

const tabs = [
  { to: "/", label: "Home", Icon: Home, end: true },
  { to: "/community", label: "Community Engagement", Icon: Users },
  { to: "/settings", label: "Settings", Icon: Settings },
];

export default function Layout() {
  const { pathname } = useLocation();
  const [settings] = useLocalStorage("hi-settings", { name: "", large: false });

  useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

  useEffect(() => {
    document.documentElement.style.fontSize = settings.large ? "112.5%" : "100%";
  }, [settings.large]);

  // Fires browser notifications for active reminders while the app is open.
  useEffect(() => {
    const id = setInterval(() => {
      if (!("Notification" in window) || Notification.permission !== "granted") return;
      const now = new Date();
      const hhmm = now.toTimeString().slice(0, 5);
      let list = defaultReminders;
      try { list = JSON.parse(localStorage.getItem("hi-reminders")) || defaultReminders; } catch {}
      list.filter((r) => r.on && r.time === hhmm).forEach((r) => {
        const key = `hi-fired-${r.id}-${now.toDateString()}-${hhmm}`;
        if (sessionStorage.getItem(key)) return;
        sessionStorage.setItem(key, "1");
        new Notification("Health-In", { body: r.title });
      });
    }, 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="app">
      <main><Outlet /></main>
      <nav className="bnav" aria-label="Main">
        {tabs.map(({ to, label, Icon, end }) => (
          <NavLink key={to} to={to} end={end}>
            <span className="ic"><Icon size={22} /></span>
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
