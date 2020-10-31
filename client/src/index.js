import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { datePickerReducer } from "./redux/DatePicker/reducer.js";
import rootReducer from "./redux";
import storage from 'redux-persist/lib/storage'; //localStorage
import sessionStorage from 'redux-persist/lib/storage/session';
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import persistedReducer from "./redux/"

import { store, persistor } from './redux/store';


//const persistedReducer = persistReducer(persistConfig, rootReducer);

//const store = createStore(persistedReducer);
//const persistor = persistStore(store);

console.log("whats in store", store.getState());

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, 
    document.getElementById("root")
    );