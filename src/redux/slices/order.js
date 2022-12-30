import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchOrder = createAsyncThunk('order/fetchOrder', async () => {
  const { data } = await axios.get('/api/order');
  return data;
});

const initialState = {
  order: {
    items: [],
    status: 'loading'
  }
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: {
    [fetchOrder.pending]: (state) => {
      state.order.status = [];
      state.order.status = 'loading';
    },
    [fetchOrder.fulfilled]: (state, actions) => {
      state.order.items = actions.payload;
      state.order.status = 'loaded';
    },
    [fetchOrder.rejected]: (state) => {
      state.order.status = [];
      state.order.status = 'error';
    }
  }
});

export const orderReducer = orderSlice.reducer;