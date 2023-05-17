import axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/login",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const get_news = async () => {
  try {
    const response = await axios.get("http://localhost:8000/news");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
