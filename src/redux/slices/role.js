import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

// Получение списка ролей пользователей
export const fetchRole = createAsyncThunk('api/fetchRole', async (params) => {
  const { data } = await axios.get('/api/role', params);
  return data;
});

const initialState = {
  role: {
    items: [],
    status: 'loading'
  }
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  extraReducers: {
    [fetchRole.pending]: (state) => {
      state.role.status = [];
      state.role.status = 'loading';
    },
    [fetchRole.fulfilled]: (state, actions) => {
      state.role.items = actions.payload;
      state.role.status = 'loaded';
    },
    [fetchRole.rejected]: (state) => {
      state.role.status = [];
      state.role.status = 'error';
    },
  }
});

export const roleReducer = roleSlice.reducer;