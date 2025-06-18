import axiosInstance from "../Api/axiosInstance";

export const login = async (email) => {
  try {
    const response = await axiosInstance.post("/login", { email });
    return response;
  } catch (error) {
    console.error("login error: ", error);
    throw error.response?.data?.message || "Login failed. Please try again.";
  }
};

export const verifyOtp = async (email, otp) => {
  try {
    const response = await axiosInstance.post("/verify-otp", { email, otp });
    return response;
  } catch (error) {
    console.error("otp error: ", error);
    throw error.response?.data?.message || "Otp failed. Please try again";
  }
};

export const register = async (formdata) => {
  try {
    const response = await axiosInstance.post("/register", formdata);
    return response;
  } catch (error) {
    console.error("register error: ", error);
    throw (
      error.response?.data?.message || "Registration failed. Please try again"
    );
  }
};
