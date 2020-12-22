import {combineReducers} from 'redux';
import fbReducer from './fb/fb.reducer';

export default combineReducers({
    demo:fbReducer,
});