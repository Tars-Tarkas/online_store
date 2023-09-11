import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
const url = "https://dummyjson.com/products";

export const fetchData: any = createAsyncThunk(
  "OS/fetchData",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Server Error!");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const OSSlice = createSlice({
  name: "OS",
  initialState: {
    OSJson: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.OSJson = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const {} = OSSlice.actions;

export default OSSlice.reducer;
