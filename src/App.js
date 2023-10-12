import Axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react'
import Table from './table';


const App = () => {

  const [date1 , setDate1] = useState([]);
  const [date2 , setDate2] = useState([]);
  const [date3 , setDate3] = useState([]);
  const [date4 , setDate4] = useState([]);
  const [date5 , setDate5] = useState([]);
  const [date6 , setDate6] = useState([]);
  const [date7 , setDate7] = useState([]);

  const [sunRise1 , setSunRise1] = useState([]);
  const [sunRise2 , setSunRise2] = useState([]);
  const [sunRise3 , setSunRise3] = useState([]);
  const [sunRise4 , setSunRise4] = useState([]);
  const [sunRise5 , setSunRise5] = useState([]);
  const [sunRise6 , setSunRise6] = useState([]);
  const [sunRise7 , setSunRise7] = useState([]);

  const [sunSet1 , setSunset1] = useState([]);
  const [sunSet2 , setSunset2] = useState([]);
  const [sunSet3 , setSunset3] = useState([]);
  const [sunSet4 , setSunset4] = useState([]);
  const [sunSet5 , setSunset5] = useState([]);
  const [sunSet6 , setSunset6] = useState([]);
  const [sunSet7 , setSunset7] = useState([]);

  const [precipitation1 , setPrecipitation1] = useState([]);
  const [precipitation2 , setPrecipitation2] = useState([]);
  const [precipitation3 , setPrecipitation3] = useState([]);
  const [precipitation4 , setPrecipitation4] = useState([]);
  const [precipitation5 , setPrecipitation5] = useState([]);
  const [precipitation6 , setPrecipitation6] = useState([]);
  const [precipitation7 , setPrecipitation7] = useState([]);

  const [maxTemmp1 , setMaxTemp1] = useState([]);
  const [maxTemmp2 , setMaxTemp2] = useState([]);
  const [maxTemmp3 , setMaxTemp3] = useState([]);
  const [maxTemmp4 , setMaxTemp4] = useState([]);
  const [maxTemmp5 , setMaxTemp5] = useState([]);
  const [maxTemmp6 , setMaxTemp6] = useState([]);
  const [maxTemmp7 , setMaxTemp7] = useState([]);

  const [minTemmp1 , setMinTemp1] = useState([]);
  const [minTemmp2 , setMinTemp2] = useState([]);
  const [minTemmp3 , setMinTemp3] = useState([]);
  const [minTemmp4 , setMinTemp4] = useState([]);
  const [minTemmp5 , setMinTemp5] = useState([]);
  const [minTemmp6 , setMinTemp6] = useState([]);
  const [minTemmp7 , setMinTemp7] = useState([]);

  const [weatherCondition1 , setweatherCondition1] = useState([]);
  const [weatherCondition2 , setweatherCondition2] = useState([]);
  const [weatherCondition3 , setweatherCondition3] = useState([]);
  const [weatherCondition4 , setweatherCondition4] = useState([]);
  const [weatherCondition5 , setweatherCondition5] = useState([]);
  const [weatherCondition6 , setweatherCondition6] = useState([]);
  const [weatherCondition7 , setweatherCondition7] = useState([]);


  const [errorr , setError] = useState(null);


  useEffect (() => {
    Axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean,sunrise,sunset,weathercode&hourly=weathercode&timezone=Asia/Tehran').then((res)=>{

      setDate1(res.data.daily.time[0])
      setDate2(res.data.daily.time[1])
      setDate3(res.data.daily.time[2])
      setDate4(res.data.daily.time[3])
      setDate5(res.data.daily.time[4])
      setDate6(res.data.daily.time[5])
      setDate7(res.data.daily.time[6])

      setSunRise1(res.data.daily.sunrise[0].slice(-5))
      setSunRise2(res.data.daily.sunrise[1].slice(-5))
      setSunRise3(res.data.daily.sunrise[2].slice(-5))
      setSunRise4(res.data.daily.sunrise[3].slice(-5))
      setSunRise5(res.data.daily.sunrise[4].slice(-5))
      setSunRise6(res.data.daily.sunrise[5].slice(-5))
      setSunRise7(res.data.daily.sunrise[6].slice(-5))

      setSunset1(res.data.daily.sunset[0].slice(-5))
      setSunset2(res.data.daily.sunset[1].slice(-5))
      setSunset3(res.data.daily.sunset[2].slice(-5))
      setSunset4(res.data.daily.sunset[3].slice(-5))
      setSunset5(res.data.daily.sunset[4].slice(-5))
      setSunset6(res.data.daily.sunset[5].slice(-5))
      setSunset7(res.data.daily.sunset[6].slice(-5))

      setPrecipitation1(res.data.daily.precipitation_probability_mean[0])
      setPrecipitation2(res.data.daily.precipitation_probability_mean[1])
      setPrecipitation3(res.data.daily.precipitation_probability_mean[2])
      setPrecipitation4(res.data.daily.precipitation_probability_mean[3])
      setPrecipitation5(res.data.daily.precipitation_probability_mean[4])
      setPrecipitation6(res.data.daily.precipitation_probability_mean[5])
      setPrecipitation7(res.data.daily.precipitation_probability_mean[6])

      setMaxTemp1(res.data.daily.temperature_2m_max[0])
      setMaxTemp2(res.data.daily.temperature_2m_max[1])
      setMaxTemp3(res.data.daily.temperature_2m_max[2])
      setMaxTemp4(res.data.daily.temperature_2m_max[3])
      setMaxTemp5(res.data.daily.temperature_2m_max[4])
      setMaxTemp6(res.data.daily.temperature_2m_max[5])
      setMaxTemp7(res.data.daily.temperature_2m_max[6])

      setMinTemp1(res.data.daily.temperature_2m_min[0])
      setMinTemp2(res.data.daily.temperature_2m_min[1])
      setMinTemp3(res.data.daily.temperature_2m_min[2])
      setMinTemp4(res.data.daily.temperature_2m_min[3])
      setMinTemp5(res.data.daily.temperature_2m_min[4])
      setMinTemp6(res.data.daily.temperature_2m_min[5])
      setMinTemp7(res.data.daily.temperature_2m_min[6])

      setweatherCondition1(res.data.daily.weathercode[0])
      setweatherCondition2(res.data.daily.weathercode[1])
      setweatherCondition3(res.data.daily.weathercode[2])
      setweatherCondition4(res.data.daily.weathercode[3])
      setweatherCondition5(res.data.daily.weathercode[4])
      setweatherCondition6(res.data.daily.weathercode[5])
      setweatherCondition7(res.data.daily.weathercode[6])
    })
    .catch(error => {
      setError(`error name: ${error.name},
      error message: ${error.message}`);
    });

  },[])

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
    95:"Thunderstorm:moderate", 
    96:"Thunderstorm with slight hail",
    99:"Thunderstorm with heavy hail"
  }

  return (
  <>
    {errorr == null ? (<Table
            date1={date1}
            date2={date2}
            date3={date3}
            date4={date4}
            date5={date5}
            date6={date6}
            date7={date7}

           sunRise1={sunRise1}
           sunRise2={sunRise2}
           sunRise3={sunRise3}
           sunRise4={sunRise4}
           sunRise5={sunRise5}
           sunRise6={sunRise6}
           sunRise7={sunRise7}

           sunSet1={sunSet1}
           sunSet2={sunSet2}
           sunSet3={sunSet3}
           sunSet4={sunSet4}
           sunSet5={sunSet5}
           sunSet6={sunSet6}
           sunSet7={sunSet7}

           precipitation1={precipitation1}
           precipitation2={precipitation2}
           precipitation3={precipitation3}
           precipitation4={precipitation4}
           precipitation5={precipitation5}
           precipitation6={precipitation6}
           precipitation7={precipitation7}

           maxTemmp1={maxTemmp1}
           maxTemmp2={maxTemmp2}
           maxTemmp3={maxTemmp3}
           maxTemmp4={maxTemmp4}
           maxTemmp5={maxTemmp5}
           maxTemmp6={maxTemmp6}
           maxTemmp7={maxTemmp7}

           minTemmp1={minTemmp1}
           minTemmp2={minTemmp2}
           minTemmp3={minTemmp3}
           minTemmp4={minTemmp4}
           minTemmp5={minTemmp5}
           minTemmp6={minTemmp6}
           minTemmp7={minTemmp7}

           weatherCondition1= {WMO[weatherCondition1]}
           weatherCondition2= {WMO[weatherCondition2]}
           weatherCondition3= {WMO[weatherCondition3]}
           weatherCondition4= {WMO[weatherCondition4]}
           weatherCondition5= {WMO[weatherCondition5]}
           weatherCondition6= {WMO[weatherCondition6]}
           weatherCondition7= {WMO[weatherCondition7]}

    ></Table>) : (<h1>{errorr}</h1>)}
  </>
  );
}

export default App;