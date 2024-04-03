import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { 
  persistStore, 
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist'
// import userSlice from './user/userSlice';
import authSlice from './auth/authSlice';

const commonConfig = {
  storage
}
const authConfig = {
  ...commonConfig,
  key: 'app/auth',
  whitelist: ['isLogged', 'token', 'msg']
}
export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authSlice),
    // user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store)