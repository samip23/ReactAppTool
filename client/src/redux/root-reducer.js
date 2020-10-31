import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import datepickerReducer, { datePickerReducer } from './DatePicker/reducer';
import { taskReducer } from './TaskForm/reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['taskform']
}

const rootReducer = combineReducers({
    datepicker: datePickerReducer,
    taskform: taskReducer
})

export default persistReducer(persistConfig, rootReducer);