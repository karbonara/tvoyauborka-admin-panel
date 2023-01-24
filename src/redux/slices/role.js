import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

// Получение списка ролей пользователей
export const fetchRole = createAsyncThunk('api/fetchRole', async (params) => {
  const { data } = await axios.get('/api/role', params);
  return data;
});

// Изменение роли пользователя
export const fetchRoleChange = createAsyncThunk('api/fetchRoleChange', async (id) => {
  const { data } = await axios.put(`/api/role/${id}`, id);
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
    // Получение списка ролей пользователей
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

    // Изменение роли пользователя
    [fetchRoleChange.pending]: (state) => {
      state.role.status = [];
      state.role.status = 'loading';
    },
    [fetchRoleChange.fulfilled]: (state, actions) => {
      state.role.items = actions.payload;
      state.role.status = 'loaded';
    },
    [fetchRoleChange.rejected]: (state) => {
      state.role.status = [];
      state.role.status = 'error';
    },
  }
});

export const roleReducer = roleSlice.reducer;