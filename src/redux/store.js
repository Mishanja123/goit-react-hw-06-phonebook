import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';
import thunk from "redux-thunk";

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage, 
};

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

  
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
        reducer: persistedReducer,
        middleware: [thunk],
});
export const persistor = persistStore(store);