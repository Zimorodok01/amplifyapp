import React, { useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getWeather } from '../store/action/getWeatherAction';
import { connect } from 'react-redux';
import moment from 'moment';
//Component
import Entre from './Enter'

function Charts(props) {
  const {weather, city, day} = props.getWeatherReducer
  
    // Esli v Enter ispolzuetsya getWeather bez props, to zdes nujno ukazat [props.data]
  // (moment(Math.round(new Date(item.dt)) * 1000.0).format('MMM Do, h:mm:ss'))
  const getDate = weather.list?.map(item => moment(new Date(item.dt * 1000)).format('ddd, HH:mm'))
  const getTemp = weather.list?.map(item => (item.main.temp))

  const data = []
  let a = 0
  for (let i in getDate){
    data.push({
      time: getDate[i],
      temp: getTemp[i],
    })
  }

  let dataTime = []
  
  if(day === moment(new Date()).format('ddd')) {
    for (let i = 0; i < 8; i++) {
      dataTime.push(
        data[i]
      )
    }
  } else {
    dataTime = data?.filter(item => item.time.includes(day))
  }
 
  // ORTA TEMP TABU JOLY
  // let checkMidTemp = () => {
  //   if (!!dataTime[0]){
  //     const dataMidTemp = dataTime?.map(item => item.temp)
  //     var avg = dataMidTemp?.reduce((p,c,_,a) => p + c/a.length,0);
  //     return Math.round(avg)
  //   } 
  // }
  // console.log(checkMidTemp())
  

  // console.log(dataMidTemp)

  // DLYA KNOPOK 12 chasov 1 den 2 dnya i t. d
  // let timeChecker = () => {
     
  // }

  const renderLineChart = (
    <ResponsiveContainer width="100%" height={500}>
       <LineChart
            width={500}
            height={200}
            data={dataTime}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
    </ResponsiveContainer>
  );
    return (
      <div className="main">
        <div className="cityName">
          {city}
        </div>
        <div className="main__temp">
          {renderLineChart}
        </div>
    </div>
    )
}

const mapStateToProps=(state)=>({
  error:state.errorReducer,
  getWeatherReducer:state.getWeatherReducer
})

export default connect(mapStateToProps, {getWeather}) (Charts);