import { combineReducers } from 'redux';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';
import message from './reducers/message';

export default combineReducers({
    message,
    common,
    router: routerReducer
});