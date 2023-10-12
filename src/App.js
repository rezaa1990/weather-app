import Axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react'
import Table from './table';

const App = () => {

  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorr, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean,sunrise,sunset,weathercode&hourly=weathercode&timezone=Asia/Tehran');
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError(`error name: ${error.name}, error message: ${error.message}`);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  const WMO = {
    0:'Clear sky',
    1:'Mainly clear',
    2:'partly cloudy',
    3:'overcast',
    45:'Fog',
    48:'depositing rime fog',
    51:"Drizzle:Light",
    53:"Drizzle:moderate",
    55:"Drizzle:dense intensity",
    56:"Freezing Drizzle:Light",
    57:"Freezing Drizzle:dense intensity",
    61:"Rain:light",
    63:"Rain:moderate",
    65:"Rain:heavy intensity",
    66:"Freezing Rain:Light",
    67:"Freezing Rain:heavy intensity",
    71:"Snow fall:Slight",
    73:"Snow fall:moderate",
    75:"Snow fall:heavy intensity", 
    77:"Snow grains",
    80:"Rain showers:Slight",
    81:"Rain showers:moderate",
    82:"Rain showers:violent",
    85:"Snow showers:slight ",
    86:"Snow showers:heavy",
    95:"Thunderstorm:Slight" ,
    951:"Thunderstorm:moderate", 
    96:"Thunderstorm with slight hail",
    99:"Thunderstorm with heavy hail"
  }
 
  return (
  <>
    {
      loading ? (<p className='m-5 bg-warning text-center'>Page is loading...</p>) :
      errorr == null ? (<Table weatherData={weatherData} WMO={WMO}></Table>) : 
      (<h1 className='m-5 bg-danger text-center'>{errorr}</h1>)
    }
  </>
  );
}

export default App;