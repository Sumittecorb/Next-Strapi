import { BASE_URL, VERSION } from "./api_url";
import axios, { AxiosRequestConfig } from "axios";

const handleLanguage = () => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    // Access localStorage
    if (!localStorage || localStorage.i18nextLng == "en") {
      return "en";
    } else {
      return "dn";
    }
  }
}
const handleToken = () => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    // Access localStorage
    if (localStorage.token) {
      return localStorage?.token
    } else {
      return "";
    }
  }
}
export default class Http {
  static axios = axios.create({
    baseURL: BASE_URL, //base url enter here
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      deviceId: handleToken()
    },
  });
  static getToken = async () => {
    let sessionToken = localStorage.token;
    // let guestToken = await getData(asyncStorageKeys.guestToken);
    let guestToken = localStorage.guestToken;
    if (sessionToken) {
      // console.log("my token session token", sessionToken);
      return {
        "x-auth": sessionToken,
      };
    } else if (guestToken) {
      // console.log("my guest token", guestToken);
      return {
        "x-auth": guestToken,
      };
    } else {
      return null;
    }
  };
  static async post(url, body, config = AxiosRequestConfig) {
    try {
      const token = await Http.getToken();
      const latestConfig = token ? { headers: token } : config;
      const response = await Http.axios.post(url, body, latestConfig);
      if (response.data.code === 123) {
        // guestTokenService()
        window.location.reload();
        let resData = response.data;
        return resData;
      } else if (response.data.code === 345) {
        localStorage.clear();
        let resData = response.data;
        return resData;
      }
      else if (response?.data?.code === 403) {
        if (response?.data?.message == "Your account  deactivated by admin") {
          return response?.data
        }
        else {
          localStorage.clear()
          window.location.href = "/";
        }
      }
      else {
        let resData = response.data;
        return resData;
        // let resData = response.data
      }
    } catch (err) {
      // Http.handleErrors(err);
      if (err.response.data?.code === 403) {
        localStorage.clear();
        window.location.href = "/";
      }
      let resData = {
        code: err.response?.status,
        message: err.response?.data?.error,
      };
      // return Promise.reject(err);
      return resData;
    }
  }
  static async get(url, body, config = AxiosRequestConfig) {
    try {
      const token = await Http.getToken();
      const _body = body ? body : {};
      const latestConfig = token ? { headers: token, params: _body } : config;
      const response = await Http.axios.get(url, latestConfig);
      if (response.data.code === 123) {
        let resData = response.data;
        return resData;
      } else if (response.data.code === 345) {
        // localStorage.clear();
        destroyCookiesManagement(TokenKeys.SESSIONTOKEN)
        // return response.data
      } else {
        let resData = response.data;
        return resData;
      }
    } catch (err) {
      if (err.response?.data?.code === 403) {
        // localStorage.clear();
        // window.location.href = "/";
        destroyCookiesManagement(TokenKeys.SESSIONTOKEN)
      }
      console.log("get catch error*-----***", err);
      // Http.handleErrors(err);
      // return Promise.reject(err);
      let resData = err.response;
      return resData;
    }
  }
  static handleErrors(error) {
    if (error.response) {
      const message = error.response.data.message;
      const errorMessage = message
        ? message
        : "Something Went Wrong, Please Try Again";
      if (Platform.OS === "android") {
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      } else {
        Alert.alert("Error", errorMessage);
      }
    } else {
      if (Platform.OS === "android") {
        ToastAndroid.show("Something Went Wrong", ToastAndroid.LONG);
      } else {
        Alert.alert("Something Went Wrong");
      }
    }
  }
}