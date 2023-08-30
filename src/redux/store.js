import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userSlice from "./userslice/UserSlice";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
// export const store = configureStore({
//   reducer: {
//     user:userReducer,
//   },
// })

export const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
