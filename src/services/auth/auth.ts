import AxiosConfig from "../AxiosConfig";

interface RefreshTokenRequest {
    refreshToken: string;
}

export const getUser = async (values: RefreshTokenRequest) =>{
    try {
        const { data } = await AxiosConfig.post("/v1/user-no/auth/token-refresh-token", values);
    return data;
    } catch (error: unknown) {
        console.log(error);
    const errorMessage = error instanceof Error && 'response' in error 
        ? (error as { response?: { data?: { message?: string } } })?.response?.data?.message 
        : 'Registration failed';
    throw new Error(errorMessage ?? 'Registration failed');
        
    }
}

export const loginUser = async (values: { email?: string; phone?: string; password: string }) => {
  try {
    const { data } = await AxiosConfig.post("v1/user-no/auth/login", values);
    if (data?.refreshToken) {
      console.log("Login successful, storing token:", data?.refreshToken);
      localStorage?.setItem("refreshtoken", data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error?.response?.data?.message ?? 'Login failed');
  }
};