import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "https://tradekub.me";

export const handleLogin = async (data) => {
  return await axios
    .post("/login", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      console.log(response);
      Cookies.set("token", response.data.access_token);
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
};
