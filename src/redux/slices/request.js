import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchRequest = createAsyncThunk('request/fetchRequest', async () => {
  const { data } = await axios.get('/api/request');
  return data;
});

export const fetchRequestDelete = createAsyncThunk('request/fetchRequestDelete', async (id) => {
  const { data } = await axios.delete(`/api/request/${id}`);
  return data;
});

const initialState = {
  request: {
    items: [],
    status: 'loading'
  }
};

const requestSlice = createSlice({
  name: 'request',
  initialState,
  extraReducers: {
    // Получение заявок
    [fetchRequest.pending]: (state) => {
      state.request.status = [];
      state.request.status = 'loading';
    },
    [fetchRequest.fulfilled]: (state, actions) => {
      state.request.items = actions.payload;
      state.request.status = 'loaded';
    },
    [fetchRequest.rejected]: (state) => {
      state.request.status = [];
      state.request.status = 'error';
    },
    // Удаление заявок
    [fetchRequestDelete.pending]: (state, actions) => {
      state.request.items = state.request.items.filter(obj => obj._id === actions.payload)
    }
  }
});

export const requestReducer = requestSlice.reducer;