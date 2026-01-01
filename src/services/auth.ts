import axios from 'axios';
import axiosConfig from './AxiosConfig';
export const sendOtp = async (values: { email: string; countryCode?: string; phone?: string }) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/send-otp", values);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Failed to send OTP');
  }
};

export const resendOtp = async (values: { email: string; countryCode?: string; phone?: string }) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/send-otp", values);
    return data;
  } catch (error: any) {
    const errorMsg = error?.response?.data?.message ?? "Failed to send OTP";
    throw new Error(errorMsg);
  }
};

export const registerUser = async (values: any) => {
  const id = values.id ?? '';

  const { id: _, ...bodyWithoutId } = values;

  try {
    const { data } = await axiosConfig.post(
      `v1/user-no/auth/register?id=${id}`,
      bodyWithoutId
    );
    return data;
  } catch (error: any) {
    const errorMsg = error?.response?.data?.message ?? "Registration failed";
    throw new Error(errorMsg);
  }
};

export const registerWith3rdUser = async (values: any) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/signup", values);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Registration failed');
  }
};

export const loginUser = async (values: { email: string; password: string }) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/login", values);
    if (data?.refreshToken) {
      localStorage?.setItem("refreshtoken", data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Login failed');
  }
};

export const loginWith3rdUser = async (values: any) => {
  try {
    const { data } = await axiosConfig.post("/v1/user-no/auth/google", values);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Login failed');
  }
};

export const forgetPassword = async (payload: { phone: string; countryCode: string }) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/forget-password", {
      phone: payload.phone,
      countryCode: payload.countryCode
    });
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Failed to send reset SMS');
  }
};

export const updatePassword = async (values: { password: string; phone?: string; countryCode?: string; email?: string; OTP: string }) => {
  try {
    const { data } = await axiosConfig.post(
      "v1/user-no/auth/change-password",
      values
    );
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Failed to update password');
  }
};

export const verifyOtp = async (values: { phone?: string; countryCode?: string; email?: string; OTP: string }) => {
  try {
    const { data } = await axiosConfig.post(
      "v1/user-no/auth/verify-otp",
      values
    );
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'OTP verification failed');
  }
};

export const forgetPasswordEmail = async (email: string) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/forget-password-email", {
      email
    });
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Failed to send reset email');
  }
};

export const editProfile = async (data: any) => {
  try {
    const response = await axiosConfig.post("/v1/user/user/edit", data);
    return response;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message ?? 'Failed to edit profile');
  }
};

export const changePassword = async (data: any) => {
  try {
    const response = await axiosConfig.post("/v1/user/user/change-password", data);
    return response;
  } catch (error: any) {
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    const response = await axiosConfig.get("/v1/user/user/details");
    return response;
  } catch (error: any) {
    console.error('getUserDetails failed:', error?.response?.status, error?.response?.data?.message);
    throw error;
  }
};

export default axiosConfig;
