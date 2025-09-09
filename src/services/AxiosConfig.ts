import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { store } from "@/redux/store"; // ✅ Import the Redux store
import { RootState } from "@/redux/store";

// const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const baseURL = "https://apigateway.seclob.com/";

const createAxiosInstance = (): AxiosInstance => {
  console.log('Creating axios instance with baseURL:', baseURL);
  
  const instance = axios.create({
    baseURL,
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const accessToken = Cookies.get("token");
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }

      const state: RootState = store.getState();
      const location = state.location;

      
      if (location) {
        try {
          const encodeHeader = (value: string) =>
          value ? encodeURIComponent(value) : "";

        config.headers["userCountry"] = encodeHeader(location.country ?? "");
        config.headers["userState"] = encodeHeader(location.state ?? "");
        config.headers["userLat"] = encodeHeader(
          location.coordinates.latitude?.toString() ?? ""
        );
        config.headers["userLon"] = encodeHeader(
          location.coordinates.longitude?.toString() ?? ""
        );
        } catch (error) {
          console.error('Error setting location headers:', error);
        }
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('Axios error:', {
          message: error?.message,
          status: error?.response?.status,
          data: error?.response?.data,
          url: error?.config?.url,
          baseURL: error?.config?.baseURL
        });
      }
      
      const originalRequest = error?.config;
      
      if (error?.response?.status === 401 && !originalRequest?._retry) {
        originalRequest._retry = true;
        
        const refreshToken = (typeof window !== 'undefined' ? localStorage?.getItem('refreshtoken') : null) ?? Cookies.get('refreshtoken');

        if (refreshToken) {
          try {
            const response = await axios.post(
              `${baseURL}/v1/user-no/auth/refresh-token`,
              { refreshToken }
            );

            if (typeof window !== 'undefined') {
              localStorage?.setItem('token', response?.data?.accessToken);
              localStorage?.setItem('refreshtoken', response?.data?.refreshToken);
            }
            Cookies.set('token', response?.data?.accessToken);
            Cookies.set('refreshtoken', response?.data?.refreshToken);
            
            originalRequest.headers.Authorization = `Bearer ${response?.data?.accessToken}`;
            return instance(originalRequest);
          } catch (refreshError) {
            if (typeof window !== 'undefined') {
              localStorage?.clear();
              Cookies.remove('token');
              Cookies.remove('refreshtoken');
              window.open("https://www.seclob.com/", "_blank"); 
            }
            return Promise.reject(refreshError);
          }
        }
      }
      
      return Promise.reject(error);
    }
  );

  return instance;
};

const AxiosConfig= createAxiosInstance();

export default AxiosConfig;