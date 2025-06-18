import { useState } from "react";
import BackgroundImage from "../Components/BackgroundImage";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import { login } from "../Services/authService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    // navigate to otp page after fetching api
    try {
      const result = await login(email);
      if (result) {
        navigate("/otp", { state: { email } });
      }
    } catch (error) {
      console.error("Error Occured", error);
      setError(error);
    }
  };

  return (
    <BackgroundImage>
      <div className="bg-white rounded-2xl shadow-2xl p-12 w-full max-w-md backdrop-blur-sm bg-opacity-95">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome to Duty Doctor 👋
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl text-black font-medium ml-4">
            Enter your email address <br />
            to get Otp
          </h2>

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <p className="text-red-500 text-md text-center font-bold">
              {error}
            </p>
          )}
          <Button onClick={handleSubmit} variant="primary">
            Get Otp
          </Button>
          <p className="text-sm text-gray-600 text-left mt-2 ml-1">
            By clicking, I accept the{" "}
            <span className="text-black hover:underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-black hover:underline cursor-pointer">
              Privacy <br />
              Policy
            </span>
          </p>
        </div>
        <div className="text-center mt-8 pt-6">
          <p className="text-gray-600">
            If you don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#1D267E] hover:text-[#151e6b] font-semibold transition-colors"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default LoginForm;
