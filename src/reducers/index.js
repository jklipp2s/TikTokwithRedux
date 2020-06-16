import { combineReducers } from 'redux';
import history  from './history';
import  stepnumber  from './stepnumber';


const allReducers = combineReducers({
    history:history,
    stepnumber:stepnumber
});


export default allReducers;