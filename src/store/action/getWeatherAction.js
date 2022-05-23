import {GET_WEATHER, GET_ERRORS, GET_CURRENT_WEATHER, SET_DAY} from './types';
import axios from 'axios/index'

export const getWeather = (city) => dispatch => {
    const API_TOKEN = 'bad46dfee1ae1125ec4faf31e63449de'
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_TOKEN}&units=metric`)
    .then(response => {
        return dispatch ({
            type: GET_WEATHER,
            payload: {
                data: response.data,
                city
            }
        })
    }).catch(err => {
        return dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
    })
}

export const setDay = day => dispatch => {
    return dispatch ({
        type: SET_DAY,
        payload: day
    })
}



export const currentWeather = (city) => dispatch => {
    const API_TOKEN = 'bad46dfee1ae1125ec4faf31e63449de'
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_TOKEN}&units=metric`)
    .then(response => {
        return dispatch ({
            type: GET_CURRENT_WEATHER,
            payload: response.data
        })
    }).catch(err => {
        return dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
    })
}
