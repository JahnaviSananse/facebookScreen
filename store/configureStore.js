import { createStore, combineReducers } from 'redux';
// import countReducer from '../reducers/countReducer';
import fbReducer from '../redux/fb/fb.reducer';
const rootReducer = combineReducers(
    { demo: fbReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;