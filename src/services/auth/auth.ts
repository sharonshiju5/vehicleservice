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