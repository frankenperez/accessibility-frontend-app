// Axios
import axios from "axios";

// Internationalization
import i18next from "i18next";

// Default Axios Client instance
export const axiosClient = axios.create();

axiosClient.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// Axios interceptors to notify errors
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      throw new Error(i18next.t("app:error.authentication"));
    }
    // Client Errors
    else if (error.response.status === 403) {
      throw new Error(i18next.t("app:error.forbidden"));
    } else if (error.response.status === 404) {
      throw new Error(i18next.t("app:error.notFound"));
    } else if (error.response.status === 405) {
      throw new Error(i18next.t("app:error.notAllowed"));
    }

    // Internal Server Errors
    else if (error.response.status >= 500 && error.response.status <= 504) {
      throw new Error(i18next.t("app:error.server"));
    }
  }
);
