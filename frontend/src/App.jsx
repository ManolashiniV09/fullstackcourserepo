
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";  


function App() {
  return (
    <Router>
      <Routes>
        {/* Show Landing Page first */}
        <Route path="/" element={<LandingPage />} />  

        {/* Auth Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        
        {/* Admin Page */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;



