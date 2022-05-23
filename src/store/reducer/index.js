import  {combineReducers} from "redux";
import getWeatherReducer from './getWeatherReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    getWeatherReducer: getWeatherReducer,
    errorReducer: errorReducer
})