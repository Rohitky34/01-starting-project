import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './CounterSlice';
import authReducer from './AuthSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        authentication: authReducer
    }

});



export default store;

