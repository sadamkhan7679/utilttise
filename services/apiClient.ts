import axios from "axios";
import { getToken, removeToken, setToken } from "@/utils/token";
import { AUTH_URLS } from "@/constants/services";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add the static Authorization token
apiClient.interceptors.request.use(
  (config) => {
    // Using a static token for now, replace with dynamic logic when needed
    const staticToken = "75dd5334bef4d2bc96f26138c163c0a3fa0b5ca6"; // Static token
    if (staticToken) {
      config.headers["Authorization"] = `Bearer ${staticToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 errors and refresh token if needed (this part will be updated when you have dynamic token logic)
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const refreshToken = getToken();
      if (refreshToken) {
        try {
          const { data } = await axios.post(AUTH_URLS.REFRESH_TOKEN, {
            refresh_token: refreshToken,
          });

          setToken(data.token);
          error.config.headers["Authorization"] = `Bearer ${data.token}`;
          return apiClient(error.config);
        } catch (refreshError) {
          removeToken();
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
