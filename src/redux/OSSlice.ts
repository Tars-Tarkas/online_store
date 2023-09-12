import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IinitialState } from "@/types/types";
const url = "https://dummyjson.com/products";

export const fetchData = createAsyncThunk(
  "OS/fetchData",
  async (limit, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=0`, {
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
    error: undefined,
    totalPage: 0,
    limit: 10,
  } as IinitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action: any) => {
      action.payload = state.limit;
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.OSJson = action.payload;
      state.error = "";
      state.loading = false;
      state.totalPage = action.payload.total;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const {} = OSSlice.actions;

export default OSSlice.reducer;
