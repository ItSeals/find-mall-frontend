import axios from "axios";
import { global } from "../helpers/helpers";

const API_URL = `${global.api}/`;

class AuthService {
  
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(true));
        }
        return response.data;
      });
  }
  logout() {
    window.localStorage.clear();
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    console.log("JSON.parse(localStorage.getItem('user'))", JSON.parse(localStorage.getItem('user')));
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();