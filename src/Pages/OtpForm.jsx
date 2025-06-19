import { useState, useRef, useEffect } from "react";
import BackgroundImage from "../Components/BackgroundImage";
import OTPInput from "../Components/OtpInput";
import Button from "../Components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { login, verifyOtp } from "../Services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/userSlice";

const OtpForm = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [activeInput, setActiveInput] = useState(0);
  const [error, setError] = useState("");
  const [resendStatus, setResendStatus] = useState("");
  const [timeLeft, setTimeLeft] = useState(300);
  const inputRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = location.state?.email;

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (sec) =>
    `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        setActiveInput(index - 1);
        inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleFocus = (index) => {
    setActiveInput(index);
  };

  const isComplete = otp.every((digit) => digit !== "");

  const handleSubmit = async () => {
    if (!isComplete) return;
    const otpCode = otp.join("");
    setError("");
    try {
      const response = await verifyOtp(email, otpCode);
      console.log(response);
      dispatch(setUser(response.data.user));
      if (response.status == 200) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error occured: ", error);
      setError(error);
    }
  };

  const handleResendCode = async () => {
    setResendStatus("");
    try {
      await login(email);
      setResendStatus("OTP resent successfully");
      setTimeLeft(300);
    } catch (error) {
      console.error("Error resend: ", error);
      setResendStatus("Failed to resend Otp");
    }
  };

  return (
    <BackgroundImage>
      <div className="bg-white rounded-2xl shadow-2xl p-14 max-w-xl backdrop-blur-sm bg-opacity-95">
        <div className="mb-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            6 - digit code
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Please enter the code we've sent to your
            <br />
            email <span className="font-semibold">{email}</span>
          </p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 mt-8 mb-10">
          {otp.map((digit, index) => (
            <OTPInput
              key={index}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onFocus={() => handleFocus(index)}
              inputRef={(el) => (inputRefs.current[index] = el)}
              index={index}
              isActive={activeInput === index}
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-md text-center font-bold">{error}</p>
        )}

        {resendStatus && (
          <p className="text-blue-600 text-sm text-center mb-3">
            {resendStatus}
          </p>
        )}

        {/* Timer */}
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">
            {timeLeft > 0 ? (
              <>
                Resend code in{" "}
                <span className="font-semibold text-blue-600">
                  {formatTime(timeLeft)}
                </span>
              </>
            ) : (
              <button
                onClick={handleResendCode}
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                Resend code
              </button>
            )}
          </p>
        </div>

        <div className="mb-6">
          <Button
            onClick={handleSubmit}
            variant="primary"
            disabled={!isComplete}
          >
            Continue
          </Button>
        </div>

        {/* Resend Code Link */}
        {/* <div className="text-center">
          {timeLeft === 0 ? (
            <button
              onClick={handleResendCode}
              className="text-blue-600 hover:text-blue-800 font-semibold transition-colors underline"
            >
              Resend code
            </button>
          ) : (
            <p className="text-gray-500 text-sm">
              Didn't receive the code? Wait for the timer to resend
            </p>
          )}
        </div> */}
      </div>
    </BackgroundImage>
  );
};

export default OtpForm;
