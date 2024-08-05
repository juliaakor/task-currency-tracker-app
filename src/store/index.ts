import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { chartHistoryReducer } from '@store/chartHistory/chartHistorySlice';
import { currencyReducer } from '@store/currency/currencySlice';
import { statusReducer } from '@store/status/statusSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, currencyReducer);
const persistedChartHistoryReducer = persistReducer(persistConfig, chartHistoryReducer);
const persistedstatusReducer = persistReducer(persistConfig, statusReducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/FLUSH',
          'persist/PAUSE',
          'persist/REMOVE',
          'persist/REGISTER',
        ],
        ignoredPaths: ['register'],
      },
    }),
  reducer: {
    chartHistory: persistedChartHistoryReducer,
    currencies: persistedReducer,
    updateStatus: persistedstatusReducer,
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
