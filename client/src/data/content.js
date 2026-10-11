import { Info, MapPin, Footprints, ThumbsUp, Bell } from "lucide-react";

export const today = () => new Date().toLocaleDateString("en-CA");

export const features = [
  { to: "/about-hypertension", label: "About Hypertension", Icon: Info, keywords: "blood pressure symptoms causes risk" },
  { to: "/facilities", label: "Health facility tracker", Icon: MapPin, keywords: "hospital clinic pharmacy near map directions" },
  { to: "/exercise", label: "Exercise", Icon: Footprints, keywords: "walk workout activity fitness" },
  { to: "/lifestyle", label: "Lifestyle recommendation", Icon: ThumbsUp, keywords: "diet salt food sleep stress smoking alcohol" },
  { to: "/notifications", label: "Notification", Icon: Bell, keywords: "reminder alert medication" },
];

export const tips = [
  "Check your blood pressure at the same time each day.",
  "Keep salt low: aim for under 2,300 mg of sodium a day.",
  "A brisk 30-minute walk, five days a week, helps lower blood pressure.",
  "Take your medication as prescribed, even when you feel well.",
];

export const about = [
  { title: "What is hypertension?", body: "Hypertension is high blood pressure: the force of blood against your artery walls stays too high. Over time it strains your heart and blood vessels. Most people feel nothing, so it is often called the silent killer." },
  { title: "Symptoms", body: ["Most people have no symptoms at all.", "Very high readings can cause a severe headache, chest pain, shortness of breath, blurred vision or nosebleeds.", "The only way to know your numbers is to measure them."] },
  { title: "Causes and risk factors", body: ["Too much salt in your food", "Being overweight or inactive", "Smoking and heavy alcohol use", "Long-term stress and poor sleep", "Family history, older age, diabetes or kidney disease"] },
  { title: "What it can lead to", body: ["Stroke", "Heart attack and heart failure", "Kidney damage", "Vision loss"] },
];

// [category, top number (systolic), bottom number (diastolic)] for adults, in mmHg
export const bpRanges = [
  ["Normal", "below 120", "and below 80"],
  ["Elevated", "120–129", "and below 80"],
  ["High, stage 1", "130–139", "or 80–89"],
  ["High, stage 2", "140 or more", "or 90 or more"],
  ["Crisis", "above 180", "and/or above 120"],
];

// SAMPLE DATA: replace with real listings or an API later.
export const facilities = [
  { id: 1, name: "Sample General Hospital", type: "Hospital", area: "Ikeja, Lagos", hours: "Open 24 hours", phone: "" },
  { id: 2, name: "Sample Teaching Hospital", type: "Hospital", area: "Surulere, Lagos", hours: "Open 24 hours", phone: "" },
  { id: 3, name: "Sample Primary Health Centre", type: "Clinic", area: "Yaba, Lagos", hours: "8am – 5pm, Mon–Sat", phone: "" },
  { id: 4, name: "Sample Family Clinic", type: "Clinic", area: "Lekki, Lagos", hours: "8am – 8pm daily", phone: "" },
  { id: 5, name: "Sample Community Pharmacy", type: "Pharmacy", area: "Ajah, Lagos", hours: "8am – 9pm daily", phone: "" },
  { id: 6, name: "Sample Care Pharmacy", type: "Pharmacy", area: "Ikorodu, Lagos", hours: "Open 24 hours", phone: "" },
];

export const exercises = [
  { id: "walk", name: "Brisk walking", minutes: 30, level: "Easy", tip: "Walk fast enough that you can talk but not sing." },
  { id: "cycle", name: "Cycling", minutes: 30, level: "Moderate", tip: "Keep a steady pace and avoid steep hills at first." },
  { id: "swim", name: "Swimming", minutes: 25, level: "Moderate", tip: "Easy on the joints. Breathe out steadily; don't hold your breath." },
  { id: "dance", name: "Dancing", minutes: 30, level: "Moderate", tip: "Any music you enjoy counts as exercise." },
  { id: "strength", name: "Light strength moves", minutes: 15, level: "Easy", tip: "Wall push-ups and chair squats, twice a week. Never hold your breath while lifting." },
  { id: "stretch", name: "Stretching and slow breathing", minutes: 10, level: "Easy", tip: "Helps you relax and cool down after activity." },
];

export const lifestyle = [
  { id: "food", title: "Eat for your heart", why: "Less salt and more vegetables and fruit lower blood pressure.", items: [
    { id: "f1", text: "Fill half my plate with vegetables and fruit" },
    { id: "f2", text: "Go easy on salt, stock cubes and salty snacks" },
    { id: "f3", text: "Choose beans, fish and whole grains over fried or processed food" },
  ] },
  { id: "move", title: "Stay active", why: "Aim for 150 minutes of moderate activity each week.", items: [
    { id: "m1", text: "Be active for at least 30 minutes today" },
    { id: "m2", text: "Take the stairs or walk short trips" },
  ] },
  { id: "habits", title: "Healthy habits", why: "Smoking, alcohol, stress and poor sleep all push blood pressure up.", items: [
    { id: "h1", text: "No smoking today" },
    { id: "h2", text: "Keep alcohol low or skip it" },
    { id: "h3", text: "Sleep 7 to 9 hours tonight" },
    { id: "h4", text: "Take 5 minutes for slow, deep breathing" },
  ] },
  { id: "check", title: "Stay on track", why: "Regular checks show whether your plan is working.", items: [
    { id: "c1", text: "Measure and write down my blood pressure" },
    { id: "c2", text: "Take my medication as prescribed" },
  ] },
];

export const defaultReminders = [
  { id: 1, title: "Check blood pressure", time: "07:30", on: true },
  { id: 2, title: "Take medication", time: "08:00", on: true },
  { id: 3, title: "Go for a walk", time: "17:30", on: true },
];

export const seedAlerts = [
  { id: 1, title: "Welcome to Health-In", body: "Turn on reminders so you never miss a check.", read: false },
  { id: 2, title: "Measuring tip", body: "Sit quietly for 5 minutes before you measure, feet flat, arm resting at heart level.", read: false },
  { id: 3, title: "Salt tip", body: "Try fresh pepper, onions and herbs for flavour instead of stock cubes.", read: false },
];

export const seedPosts = [
  { id: 1, name: "Health-In Team", text: "Welcome! Share what is working for you this week: a meal, a walk, a habit.", likes: 3, liked: false },
  { id: 2, name: "Community member", text: "Swapped stock cubes for fresh pepper and herbs. The soup still tastes great.", likes: 5, liked: false },
];
