const Table = (props) => {
  console.log(props.weatherData)
  return ( 
  <>
  <div className="container mt-3 text-center">Tehran weekly weather
  <table className="table">
    <thead>
      <tr className="table-danger">
        <th className='text-center'>date</th>
        <th className='text-center'>sunrise</th>
        <th className='text-center'>sunset</th>
        <th className='text-center'>precipitation_probability</th>
        <th className='text-center'>weather_condition</th>
        <th className='text-center'>temperature_max</th>
        <th className='text-center'>temperature_min</th>
        
      </tr>   
    </thead>
    <tbody>
   
      <tr className="table-primary">
        <td className='text-center'>{props.weatherData.daily.time[0]}</td>
        <td className='text-center'>{props.weatherData.daily.sunrise[0].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.sunset[0].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.precipitation_probability_mean[0]}%</td>
        <td className='text-center'>{props.WMO[props.weatherData.daily.weathercode[0]]}</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_max[0]} °C</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_min[0]} °C</td>
        
      </tr>
      <tr className="table-success">
        <td className='text-center'>{props.weatherData.daily.time[1]}</td>
        <td className='text-center'>{props.weatherData.daily.sunrise[1].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.sunset[1].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.precipitation_probability_mean[1]}%</td>
        <td className='text-center'>{props.WMO[props.weatherData.daily.weathercode[1]]}</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_max[1]} °C</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_min[1]} °C</td>
        
      </tr>
      <tr className="table-primary">
        <td className='text-center'>{props.weatherData.daily.time[2]}</td>
        <td className='text-center'>{props.weatherData.daily.sunrise[2].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.sunset[2].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.precipitation_probability_mean[2]}%</td>
        <td className='text-center'>{props.WMO[props.weatherData.daily.weathercode[2]]}</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_max[2]} °C</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_min[2]} °C</td>
        
      </tr>
      <tr className="table-success">
        <td className='text-center'>{props.weatherData.daily.time[3]}</td>
        <td className='text-center'>{props.weatherData.daily.sunrise[3].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.sunset[3].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.precipitation_probability_mean[3]}%</td>
        <td className='text-center'>{props.WMO[props.weatherData.daily.weathercode[3]]}</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_max[3]} °C</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_min[3]} °C</td>
        
      </tr>
      <tr className="table-primary">
        <td className='text-center'>{props.weatherData.daily.time[4]}</td>
        <td className='text-center'>{props.weatherData.daily.sunrise[4].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.sunset[4].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.precipitation_probability_mean[4]}%</td>
        <td className='text-center'>{props.WMO[props.weatherData.daily.weathercode[4]]}</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_max[4]} °C</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_min[4]} °C</td>
        
      </tr>
      <tr className="table-success">
      <td className='text-center'>{props.weatherData.daily.time[5]}</td>
        <td className='text-center'>{props.weatherData.daily.sunrise[5].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.sunset[5].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.precipitation_probability_mean[5]}%</td>
        <td className='text-center'>{props.WMO[props.weatherData.daily.weathercode[5]]}</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_max[5]} °C</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_min[5]} °C</td>
        
      </tr>
      <tr className="table-primary">
      <td className='text-center'>{props.weatherData.daily.time[6]}</td>
        <td className='text-center'>{props.weatherData.daily.sunrise[6].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.sunset[6].slice(-5)}</td>
        <td className='text-center'>{props.weatherData.daily.precipitation_probability_mean[6]}%</td>
        <td className='text-center'>{props.WMO[props.weatherData.daily.weathercode[6]]}</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_max[6]} °C</td>
        <td className='text-center'>{props.weatherData.daily.temperature_2m_min[6]} °C</td>
        
      </tr>
    </tbody>
  </table>
  </div>
  </>
);
}
 
export default Table;