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
import appSlice from './app/appSlice';
import postSlice from './post/postSlice';
import  pricesSlice  from './prices/pricesSlice';
import  areaSLice from './areas/pricesSlice';
import provinceSlice from './province/provinceSlice';
import userSlice from './user/userSlice';


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
    app: appSlice,
    posts: postSlice,
    prices: pricesSlice,
    areas: areaSLice,
    provinces: provinceSlice,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store)