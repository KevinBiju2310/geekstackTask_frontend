import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Pages/LoginForm";
import OtpForm from "./Pages/OtpForm";
import RegisterForm from "./Pages/RegisterForm";
import HomePage from "./Pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/otp" element={<OtpForm />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
