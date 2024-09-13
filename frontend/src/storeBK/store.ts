// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from "./root.reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk as unknown as ThunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;