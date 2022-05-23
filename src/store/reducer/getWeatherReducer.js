import {GET_WEATHER, GET_CURRENT_WEATHER, SET_DAY} from '../action/types';
import moment from 'moment'
const initialState = {
    weather: {},
    city: 'Nur-Sultan',
    day: moment(new Date()).format('ddd'),
    current_Weather: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                weather: action.payload.data,
                city: action.payload.city
            }
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                    current_Weather: action.payload
            }
        case SET_DAY: 
            return {
                ...state,
                day: action.payload
            }
        default:
            return state;
    }
}