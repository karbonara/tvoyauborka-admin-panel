import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

// Получение списка пользователей
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const { data } = await axios.get('/api/user');
  return data;
});

// Получение информации о своём аккаунте
export const fetchUserInfo = createAsyncThunk('user/fetchUserInfo', async () => {
  const { data } = await axios.get('/api/user/info/settings');
  return data;
});

// Получение списка заказов, привязанных к менеджеру
export const fetchUserInfoManager = createAsyncThunk('user/fetchUserInfoManager', async () => {
  const { data } = await axios.get('/api/user/info/orders/manager');
  return data;
});

// Получение списка заказов, привязанных к уборщику
export const fetchUserInfoCalendar = createAsyncThunk('user/fetchUserInfoCalendar', async () => {
  const { data } = await axios.get('/api/user/info/orders/cleaner');
  return data;
});

const initialState = {
  user: {
    items: [],
    status: 'loading'
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {

    // Получение списка пользователей
    [fetchUser.pending]: (state) => {
      state.user.status = [];
      state.user.status = 'loading';
    },
    [fetchUser.fulfilled]: (state, actions) => {
      state.user.items = actions.payload;
      state.user.status = 'loaded';
    },
    [fetchUser.rejected]: (state) => {
      state.user.status = [];
      state.user.status = 'error';
    },

    // Получение информации о своём аккаунте
    [fetchUserInfo.pending]: (state) => {
      state.user.status = [];
      state.user.status = 'loading';
    },
    [fetchUserInfo.fulfilled]: (state, actions) => {
      state.user.items = actions.payload;
      state.user.status = 'loaded';
    },
    [fetchUserInfo.rejected]: (state) => {
      state.user.status = [];
      state.user.status = 'error';
    },


    // Получение списка заказов, привязанных к менеджеру
    [fetchUserInfoManager.pending]: (state) => {
      state.user.status = [];
      state.user.status = 'loading';
    },
    [fetchUserInfoManager.fulfilled]: (state, actions) => {
      state.user.items = actions.payload;
      state.user.status = 'loaded';
    },
    [fetchUserInfoManager.rejected]: (state) => {
      state.user.status = [];
      state.user.status = 'error';
    },

    // Получение списка заказов, привязанных к уборщику
    [fetchUserInfoCalendar.pending]: (state) => {
      state.user.status = [];
      state.user.status = 'loading';
    },
    [fetchUserInfoCalendar.fulfilled]: (state, actions) => {
      state.user.items = actions.payload;
      state.user.status = 'loaded';
    },
    [fetchUserInfoCalendar.rejected]: (state) => {
      state.user.status = [];
      state.user.status = 'error';
    }
  }
});

export const userReducer = userSlice.reducer;