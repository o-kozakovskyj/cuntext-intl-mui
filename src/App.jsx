
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navigation from "./components/Navigation";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:locale/*" element={<Navigation />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Router>
  );
}
