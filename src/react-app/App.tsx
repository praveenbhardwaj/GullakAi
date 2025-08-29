import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // fix: updated import source
import HomePage from "@/react-app/pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}