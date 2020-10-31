import { combineReducers } from 'redux';
import { datePickerReducer } from './DatePicker/reducer';
import { taskReducer } from './TaskForm/reducer';
import sessionStorage from 'redux-persist/lib/storage/session';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import {persistStore, persistReducer} from "redux-persist"


const rootReducers = combineReducers({
    tasks: taskReducer,
    datePicker: datePickerReducer
})


const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  stateReconciler: hardSet,
  whitelist: ['tasks', 'datePicker']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export default persistedReducer;