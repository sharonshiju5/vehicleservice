
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface LocationState {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  coordinates: Coordinates;
  isApproximate: boolean;
  source: string;
  timestamp: string;
}

const initialState: LocationState = {
  address: "325/1, Ummalathoor, Kozhikode, Kerala 673016, India",
  city: "Kozhikode",
  state: "Kerala",
  country: "India",
  postalCode: "673016",
  coordinates: {
    latitude: 11.2615369,
    longitude: 75.8221748,
  },
  isApproximate: true,
  source: "google_geocoding",
  timestamp: "2025-08-12T04:04:47.183Z",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationState>) => {
      return action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer; 
