import axios from "axios";

// Function to set the JWT token in the Authorization header for subsequent requests
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// Function to log in and obtain the JWT token
export const login = async (username, password) => {
  try {
    const response = await axios.post("/login", {
      username,
      password,
    });
    const { access_token } = response.data;
    setAuthToken(access_token);
    return access_token;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

// Function to log out and remove the JWT token
export const logout = () => {
  setAuthToken(null);
};
