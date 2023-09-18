import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IinitialState } from "@/types/types";

export const fetchProduct = createAsyncThunk(
  "OS/fetchData",
  async (limit: number, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}`, {
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

export const fetchSingleProduct = createAsyncThunk(
  "OS/fetchData",
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`, {
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

const initialState: IinitialState = {
  products: [],
  error: undefined,
  loading: false,
};

const OSSlice = createSlice({
  name: "OS",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchProduct.fulfilled,
      (state, action: PayloadAction<IinitialState>) => {
        state.products = action.payload.products;
        state.error = "";
        state.loading = false;
      }
    );
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const {} = OSSlice.actions;

export default OSSlice.reducer;
