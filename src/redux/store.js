import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { orderReducer } from "./slices/order";
import { requestReducer } from "./slices/request";
import { userReducer } from "./slices/user";
import { roleReducer } from "./slices/role";

const store = configureStore({
  reducer: {
    order: orderReducer,
    request: requestReducer,
    auth: authReducer,
    user: userReducer,
    role: roleReducer,
  }
});

export default store;