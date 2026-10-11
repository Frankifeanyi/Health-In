import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Exercise from "./pages/Exercise";
import Lifestyle from "./pages/Lifestyle";
import Notifications from "./pages/Notifications";
import Community from "./pages/Community";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-hypertension" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/community" element={<Community />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
