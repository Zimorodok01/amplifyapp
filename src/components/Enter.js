import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getWeather, currentWeather } from '../store/action/getWeatherAction';
//Component
import Charts from './Charts'
import WeatherNow from './WeatherNow'
import WeatherDay from './WeatherDay'

function Entre(props) {
    const [textCity, setTextCity] = useState()
    const {wheather, city} = props.getWeatherReducer
    useEffect(() => {
        props.getWeather(city)
    }, []);

    const onChange = (e) => {
        const target = e.target
        setTextCity(target.value)
    }

    const handleOk = () => {
        props.getWeather(textCity)
    }


    return (
        <div>
            <div className="statistic">
                <Charts />
                <WeatherNow />
            </div>

            <div>
                <WeatherDay />
            </div>
            
            <form className="form">
                <input className="form__input" placeholder="City" name="city" onChange={onChange} /> 
                <input className="form__btn" type="button" onClick={handleOk} value="Get" />
            </form> 
        </div>
    )

}

const mapStateToProps=(state)=>({
    error:state.errorReducer,
    getWeatherReducer:state.getWeatherReducer
})
  
export default connect(mapStateToProps, {getWeather}) (Entre);
