import Axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react'
import Table from './table';


const App = () => {

  const [time , setTime] = useState([]);
  const [dailyWindSpeed , setDailyWindSpeed] = useState([]);

  useEffect (() => {
    Axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean,sunrise,sunset&hourly=relativehumidity_2m,cloudcover_low,cloudcover_mid,cloudcover_high&timezone=Asia/Tehran').then((res)=>{
      console.log(res)
      //console.log(res.data.daily.time)
      //console.log(res.data.daily.windspeed_10m_max)
      //setTime(res.data.daily.time)
      //setDailyWindSpeed(res.data.daily.windspeed_10m_max)
    })
  },[])

  return (
    <Table></Table>
  );
}

export default App;