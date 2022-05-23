import React, { useEffect, useState } from 'react'
import { getWeather, setDay } from '../store/action/getWeatherAction';
import { connect } from 'react-redux';
import moment from 'moment';

function Charts(props) {

    const [active, setActive] = useState(false)

    const {weather, city, day} = props.getWeatherReducer

    // TEMP pen KUN OSYNY BITIR, BUL JERDE OSYNY KUNIMEN UAKYTYMEN TEKSERU KERE
    const getTemp = weather.list?.map(item => {
        const day = moment(new Date(item.dt * 1000)).format('ddd')
        const temp = item.main.temp
        const response = {day, temp}
        return response
    })

    const uniArr = [...new Set(getTemp?.map(item => item.day))]

    const maxTempArr = []
    const minTempArr = []

    const tempFunc = (data) => {
        const checker = getTemp?.filter(element => {
            if(element.day === data){
                return element.temp
            }
        })
        const tempArr = checker?.map(item => {
            const num1 = Math.floor(item.temp)
            return num1
        })
        tempArr.sort(function(a, b) {
            return b - a;
          });
        maxTempArr.push(tempArr[0])
        minTempArr.push(tempArr[tempArr.length - 1])
    }
    // console.log(maxTempArr)
    // console.log(minTempArr)

    const arrCheker = () => {
        const checker = uniArr?.filter(element => tempFunc(element))
    }
    arrCheker()

    let getDayWeather = (event) => {
        props.setDay(event.currentTarget.children[0].outerText)

        // if(event.target.nodeName === 'P'){
            
        //     event.target.parentNode.classList.add('weatherday__active')
        //     console.log(event.target.parentNode)
        // } else if(event.target.nodeName === 'SPAN'){
        //     event.target.parentNode.parentNode.classList.add('weatherday__active')
        //     console.log(event.target.parentNode.parentNode)
        // } else {
        //     event.target.classList.add('weatherday__active')

        //     console.log(event.target)
        // }

        console.log(event)

        // setActive(!active)
    
    }   


    //Components
    let weekDay = (item) => <div key={item.day} onClick={getDayWeather} className={ active ? 'weatherday__active' : 'weatherday__inner' } >
            <p id="clickday">{item.day}</p>
            <p><span>{item.maxtemp}°</span>
            <span>&nbsp;</span>
            <span className="weatherday__mintemp">{item.mintemp}°</span></p>
        </div>

    const dayArr = []

    let weekDayFunc = () => {
        for(let i in uniArr){
            dayArr.push({
                day: uniArr[i],
                maxtemp: maxTempArr[i],
                mintemp: minTempArr[i]
            })
        }
    }
    weekDayFunc()

    const dayTempArr = dayArr?.map(item => weekDay(item))

    
    return (
        <div className="weatherday">
            {dayTempArr}
        </div>
    )
}

const mapStateToProps=(state)=>({
  error:state.errorReducer,
  getWeatherReducer:state.getWeatherReducer,
})

export default connect(mapStateToProps, {getWeather, setDay}) (Charts);

