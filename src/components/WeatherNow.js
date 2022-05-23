import React, { useEffect, useState } from 'react'
import { currentWeather } from '../store/action/getWeatherAction';
import { connect } from 'react-redux';
import moment from 'moment';

function Charts(props) {

    const {current_Weather, city} = props.getWeatherReducer


    useEffect(() => {
        props.currentWeather(city)
    },[city])

    console.log(props)


    const now = moment(Math.round(new Date())).format('dddd, HH:mm')

    // Jaqyn temp-pen aua-raiy ne korsetetine tekseru
    let nowTimeTemp = () => {
        if(current_Weather.weather)
            var main = current_Weather?.weather[0]?.main
        return main
    }
    
    let nowTemp = () => {
        if(current_Weather.main)
            var temp = current_Weather?.main?.temp
            return temp || '-'
    }

    return (
        <div className="weathernow">
            {nowTimeTemp()}
            <br />
            {'Temperature: ' + nowTemp()}
            <br />
            {"Local Time: " + now}
        </div>
    )
}

const mapStateToProps=(state)=>({
  error:state.errorReducer,
  getWeatherReducer:state.getWeatherReducer,
})

export default connect(mapStateToProps, {currentWeather}) (Charts);

