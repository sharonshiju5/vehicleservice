import axios from 'axios';
import axiosConfig from './AxiosConfig';
interface OtpValues {
  email: string;
  countryCode?: string;
  phone?: string;
}

interface RegisterValues {
  id?: string;
  [key: string]: unknown;
}

export interface LoginValues {
  email: string;
  password: string;
}

interface ForgetPasswordValues {
  phone: string;
  countryCode: string;
}

interface UpdatePasswordValues {
  password: string;
  phone?: string;
  countryCode?: string;
  email?: string;
  OTP: string;
}

interface VerifyOtpValues {
  phone?: string;
  countryCode?: string;
  email?: string;
  OTP: string;
}

interface ProfileData {
  [key: string]: unknown;
}

interface PasswordChangeData {
  [key: string]: unknown;
}

interface ThirdPartyUserData {
  [key: string]: unknown;
}

export const sendOtp = async (values: OtpValues) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/send-otp", values);
    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? 'Failed to send OTP'
      : 'Failed to send OTP';
    throw new Error(errorMessage);
  }
};

export const resendOtp = async (values: OtpValues) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/send-otp", values);
    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? 'Failed to send OTP'
      : 'Failed to send OTP';
    throw new Error(errorMessage);
  }
};

export const registerUser = async (values: RegisterValues) => {
  const id = values.id ?? '';

  const { id: _, ...bodyWithoutId } = values;

  try {
    const { data } = await axiosConfig.post(
      `v1/user-no/auth/register?id=${id}`,
      bodyWithoutId
    );
    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? 'Registration failed'
      : 'Registration failed';
    throw new Error(errorMessage);
  }
};

export const registerWith3rdUser = async (values: ThirdPartyUserData) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/signup", values);
    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? 'Registration failed'
      : 'Registration failed';
    throw new Error(errorMessage);
  }
};

export const loginUser = async (values: LoginValues) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/login", values);
    if (data?.refreshToken) {
      localStorage?.setItem("refreshtoken", data?.refreshToken);
    }
    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? 'Login failed'
      : 'Login failed';
    throw new Error(errorMessage);
  }
};

export const loginWith3rdUser = async (values: ThirdPartyUserData) => {
  try {
    const { data } = await axiosConfig.post("/v1/user-no/auth/google", values);
    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? 'Login failed'
      : 'Login failed';
    throw new Error(errorMessage);
  }
};

export const forgetPassword = async (payload: ForgetPasswordValues) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/forget-password", {
      phone: payload.phone,
      countryCode: payload.countryCode
    });
    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? 'Failed to send reset SMS'
      : 'Failed to send reset SMS';
    throw new Error(errorMessage);
  }
};

export const updatePassword = async (values: UpdatePasswordValues) => {
  try {
    const { data } = await axiosConfig.post(
      "v1/user-no/auth/change-password",
      values
    );
    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? 'Failed to update password'
      : 'Failed to update password';
    throw new Error(errorMessage);
  }
};

export const verifyOtp = async (values: VerifyOtpValues) => {
  try {
    const { data } = await axiosConfig.post(
      "v1/user-no/auth/verify-otp",
      values
    );
    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? 'OTP verification failed'
      : 'OTP verification failed';
    throw new Error(errorMessage);
  }
};

export const forgetPasswordEmail = async (email: string) => {
  try {
    const { data } = await axiosConfig.post("v1/user-no/auth/forget-password-email", {
      email
    });
    return data;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? 'Failed to send reset email'
      : 'Failed to send reset email';
    throw new Error(errorMessage);
  }
};

export const editProfile = async (data: ProfileData) => {
  try {
    const response = await axiosConfig.post("/v1/user/user/edit", data);
    return response;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { data?: { message?: string } } }).response?.data?.message ?? 'Failed to edit profile'
      : 'Failed to edit profile';
    throw new Error(errorMessage);
  }
};

export const changePassword = async (data: PasswordChangeData) => {
  try {
    const response = await axiosConfig.post("/v1/user/user/change-password", data);
    return response;
  } catch (error: unknown) {
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    const response = await axiosConfig.get("/v1/user/user/details");
    return response;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error && 'response' in error 
      ? (error as { response?: { status?: number; data?: { message?: string } } }).response
      : null;
    console.error('getUserDetails failed:', errorMessage?.status, errorMessage?.data?.message);
    throw error;
  }
};

export default axiosConfig;
