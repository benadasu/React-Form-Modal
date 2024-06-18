import { createStore } from 'redux';
import userDataReducer from './reducer';
const store=createStore(userDataReducer);
export default store;