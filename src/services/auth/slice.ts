import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  loginUser,
  loginWith3rdUser,
  registerUser,
  registerWith3rdUser,
  type LoginValues,
} from "../auth";


interface UserDetails {
  name: string | null;
  email: string | null;
  id: string | null;
  token: string | null;
  unique_id: string | null;
  phone?: string | null;
  location?: {
    city: string | null;
    state: string | null;
    country: string | null;
  };
}

interface UserState {
  userDetails: UserDetails;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const getInitialUserState = (): UserDetails => {
  if (typeof window === 'undefined') {
    return {
      name: null,
      email: null,
      id: null,
      token: null,
      unique_id: null,
      location: {
        city: null,
        state: null,
        country: null,
      },
    }
  }

  const token = Cookies.get('token') || localStorage.getItem('token')
  const refreshToken = localStorage.getItem('refreshtoken')
  
  try {
    const persistedState = localStorage.getItem('persist:root')
    if (persistedState) {
      const parsed = JSON.parse(persistedState)
      const userState = parsed.user ? JSON.parse(parsed.user) : null
      if (userState?.userDetails && (token || refreshToken)) {
        return {
          ...userState.userDetails,
          token: token || userState.userDetails.token
        }
      }
    }
  } catch (error) {
    console.error('Error parsing persisted user state:', error)
  }

  return {
    name: null,
    email: null,
    id: null,
    token: token,
    unique_id: null,
    location: {
      city: null,
      state: null,
      country: null,
    },
  }
}

const initialState: UserState = {
  userDetails: getInitialUserState(),
  status: "idle",
  error: null,
};

interface UserData {
  [key: string]: unknown;
}

export const register = createAsyncThunk(
  "/register",
  async ({ userData }: { userData: UserData }, { rejectWithValue }) => {
    try {
      const response = await registerUser(userData);
      return response;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      return rejectWithValue(errorMessage);
    }
  }
);

export const registerWith3rdParty = createAsyncThunk(
  "/registerwith3rdparty",
  async ({ userData }: { userData: UserData }, { rejectWithValue }) => {
    try {
      const response = await registerWith3rdUser(userData);
      return response;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      return rejectWithValue(errorMessage);
    }
  }
);

export const loginWith3rdParty = createAsyncThunk(
  "/loginWith3rdParty",
  async ({ userData }: { userData: UserData }, { rejectWithValue }) => {
    try {
      const response = await loginWith3rdUser(userData);
      return response;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      return rejectWithValue(errorMessage);
    }
  }
);

export const loginSlice = createAsyncThunk(
  "/login",
  async ({ userData }: { userData: LoginValues }, { rejectWithValue }) => {
    try {
      const response = await loginUser(userData);
      return response;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      return rejectWithValue(errorMessage);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userDetails = {
        name: null,
        email: null,
        id: null,
        token: null,
        unique_id: null,
      };
      state.status = "idle";
      state.error = null;

      const userLocation = Cookies.get('userLocation');
      const locationCookies = ['userLocation', 'selectedLocation', 'currentLocation'];
      const preservedCookies: {[key: string]: string} = {};
      
      locationCookies.forEach(cookieName => {
        const value = Cookies.get(cookieName);
        if (value) preservedCookies[cookieName] = value;
      });

      const locationStorageKeys = ['persist:location', 'userLocation'];
      const preservedLocalStorage: {[key: string]: string} = {};
      
      locationStorageKeys.forEach(key => {
        const value = localStorage?.getItem(key);
        if (value) preservedLocalStorage[key] = value;
      });

      const sessionLocationKeys = ['userLocation', 'savedLocations'];
      const preservedSessionStorage: {[key: string]: string} = {};
      
      sessionLocationKeys.forEach(key => {
        const value = sessionStorage?.getItem(key);
        if (value) preservedSessionStorage[key] = value;
      });

      const clearCookieForDomainAndPath = (name: string, domain: string, path: string) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; domain=${domain}`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; domain=${domain}; secure`;
      };

      const removeCookieFromAllLocations = (name: string) => {
        const domains = ['', window?.location?.hostname, '.' + window?.location?.hostname, '.seclob.com', 'seclob.com', 'www.seclob.com'];
        const paths = ['/', ''];
        
        domains.forEach(domain => {
          paths.forEach(path => clearCookieForDomainAndPath(name, domain, path));
        });
        
        Cookies.remove(name);
        Cookies.remove(name, { path: "/" });
        Cookies.remove(name, { path: "/", domain: window?.location?.hostname });
        Cookies.remove(name, { path: "/", domain: '.seclob.com' });
      };

      const clearAllCookies = () => {
        const cookies = document?.cookie?.split(";") ?? [];

        cookies.forEach(cookie => {
          const eqPos = cookie?.indexOf("=");
          const name = eqPos > -1 ? cookie?.substr(0, eqPos)?.trim() : cookie?.trim();

          if (name && !locationCookies.includes(name)) {
            removeCookieFromAllLocations(name);
          }
        });
      };

      const clearLocalStorage = () => {
        localStorage?.removeItem('persist:root');
        localStorage?.removeItem('token');
        localStorage?.removeItem('refreshtoken');
        localStorage?.removeItem('userId');
      };

      const clearSessionStorage = () => {
        sessionStorage?.clear();
        
        Object.entries(preservedSessionStorage).forEach(([key, value]) => {
          sessionStorage?.setItem(key, value);
        });
      };

      const clearIndexedDBs = () => {
        if (!window?.indexedDB) return;
        
        window.indexedDB.databases()?.then((dbs) => {
          dbs?.forEach((db) => {
            if (db?.name && !db?.name?.toLowerCase()?.includes('location')) {
              window?.indexedDB?.deleteDatabase(db?.name);
            }
          });
        });
      };

      clearAllCookies();
      clearLocalStorage();
      clearSessionStorage();
      clearIndexedDBs();
      
      Object.entries(preservedCookies).forEach(([name, value]) => {
        Cookies.set(name, value, { secure: true, sameSite: "strict" });
      });
      
      Object.entries(preservedLocalStorage).forEach(([key, value]) => {
        localStorage?.setItem(key, value);
      });
      
      window.dispatchEvent(new Event('sessionStorageChange'));
    },
    updateLocation: (state, action) => {
      if (!state.userDetails) {
        state.userDetails = {
          name: null,
          email: null,
          id: null,
          token: null,
          unique_id: null,
          location: {
            city: null,
            state: null,
            country: null,
          },
        };
      }
      state.userDetails.location = {
        city: action?.payload?.city,
        state: action?.payload?.state,
        country: action?.payload?.country,
      };

      Cookies.set(
        "userLocation",
        JSON.stringify({
          city: action?.payload?.city,
          regionName: action?.payload?.state,
          country: action?.payload?.country,
          lat: action?.payload?.latitude,
          lon: action?.payload?.longitude,
        }),
        {
          secure: true,
          sameSite: "strict",
        }
      );
      
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('axiosConfigRefresh'));
      }
    },
    updateProfile: (state, action) => {
      state.userDetails = {
        ...state.userDetails,
        name: action?.payload?.name,
        email: action?.payload?.email,
        phone: action?.payload?.phone
      };
    },
    restoreUserFromStorage: (state) => {
      if (typeof window === 'undefined') return;
      
      const token = Cookies.get('token') || localStorage.getItem('token');
      const refreshToken = localStorage.getItem('refreshtoken');
      
      if (token || refreshToken) {
        try {
          const persistedState = localStorage.getItem('persist:root');
          if (persistedState) {
            const parsed = JSON.parse(persistedState);
            const userState = parsed.user ? JSON.parse(parsed.user) : null;
            if (userState?.userDetails) {
              state.userDetails = {
                ...userState.userDetails,
                token: token || userState.userDetails.token
              };
              state.status = 'succeeded';
            }
          }
        } catch (error) {
          console.error('Error restoring user state:', error);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userDetails = {
          name: action?.payload?.name,
          email: action?.payload?.email,
          id: action?.payload?.userId || action?.payload?._id,
          token: action?.payload?.accessToken,
          unique_id: action?.payload?.unique_id,
        };
        Cookies.set("token", action?.payload?.accessToken, {
          secure: true,
          sameSite: "strict",
        });
        if (typeof window !== 'undefined') {
          localStorage?.setItem('userId', action?.payload?.userId || action?.payload?._id);
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(registerWith3rdParty.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerWith3rdParty.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userDetails = {
          name: action?.payload?.name,
          email: action?.payload?.email,
          id: action?.payload?.userId || action?.payload?._id,
          token: action?.payload?.accessToken,
          unique_id: action?.payload?.unique_id,
        };
        Cookies.set("token", action?.payload?.accessToken, {
          secure: true,
          sameSite: "strict",
        });
        if (typeof window !== 'undefined') {
          localStorage?.setItem('userId', action?.payload?.userId || action?.payload?._id);
        }
      })
      .addCase(registerWith3rdParty.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(loginSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userDetails = {
          name: action?.payload?.name,
          email: action?.payload?.email,
          id: action?.payload?.userId || action?.payload?._id,
          token: action?.payload?.accessToken,
          unique_id: action?.payload?.unique_id,
          location: {
            city: null,
            state: null,
            country: null,
          },
        };
        
        const accessToken = action?.payload?.accessToken;
        const refreshToken = action?.payload?.refreshToken;
        
        Cookies.set("token", accessToken, {
          expires: 7,
          secure: true,
          sameSite: "lax",
        });
        Cookies.set("refreshtoken", refreshToken, {
          expires: 7,
          secure: true,
          sameSite: "lax",
        });
        
        if (typeof window !== 'undefined') {
          localStorage?.setItem('token', accessToken);
          localStorage?.setItem('refreshtoken', refreshToken);
          localStorage?.setItem('userId', action?.payload?.userId);
        }
        
      })
      .addCase(loginSlice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(loginWith3rdParty.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginWith3rdParty.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userDetails = {
          name: action?.payload?.name,
          email: action?.payload?.email,
          id: action?.payload?.userId || action?.payload?._id,
          token: action?.payload?.accessToken,
          unique_id: action?.payload?.unique_id,
        };
        Cookies.set("token", action?.payload?.accessToken, {
          secure: true,
          sameSite: "strict",
        });
        Cookies.set("refreshtoken", action?.payload?.refreshToken, {
          secure: true,
          sameSite: "strict",
        });
        if (typeof window !== 'undefined') {
          localStorage?.setItem('userId', action?.payload?.userId || action?.payload?._id);
        }
      })
      .addCase(loginWith3rdParty.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { logout, updateLocation, updateProfile, restoreUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
