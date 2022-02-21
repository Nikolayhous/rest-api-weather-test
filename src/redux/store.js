import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import settingsReducer from './weather/reducer';

export const weatherPersistConfig = {
    key: 'weather',
    storage,
    whitelist: ['token'],
};

const settingPersistReducer = persistReducer(
    weatherPersistConfig,
    settingsReducer,
);

export const store = configureStore({
    reducer: {
        weather: settingPersistReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REGISTER,
                    PAUSE,
                    REHYDRATE,
                    PERSIST,
                    PURGE,
                ],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
