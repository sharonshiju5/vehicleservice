import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AcceptedRequest {
  providerId: string;
  requestId: string;
  timestamp: string;
}

interface AcceptedRequestState {
  data: AcceptedRequest | null;
}

const initialState: AcceptedRequestState = {
  data: null,
};

const acceptedRequestSlice = createSlice({
  name: "acceptedRequest",
  initialState,
  reducers: {
    setAcceptedRequest: (state, action: PayloadAction<AcceptedRequest>) => {
      state.data = action.payload;
    },
    clearAcceptedRequest: (state) => {
      state.data = null;
    },
  },
});

export const { setAcceptedRequest, clearAcceptedRequest } = acceptedRequestSlice.actions;
export default acceptedRequestSlice.reducer;