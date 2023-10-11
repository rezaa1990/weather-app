const Table = (props) => {
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
        <td className='text-center'>{props.date1}</td>
        <td className='text-center'>{props.sunRise1}</td>
        <td className='text-center'>{props.sunSet1}</td>
        <td className='text-center'>{props.precipitation1}%</td>
        <td className='text-center'>{props.weatherCondition1}</td>
        <td className='text-center'>{props.maxTemmp1} °C</td>
        <td className='text-center'>{props.minTemmp1} °C</td>
        
      </tr>
      <tr className="table-success">
        <td className='text-center'>{props.date2}</td>
        <td className='text-center'>{props.sunRise2}</td>
        <td className='text-center'>{props.sunSet2}</td>
        <td className='text-center'>{props.precipitation2}%</td>
        <td className='text-center'>{props.weatherCondition2}</td>
        <td className='text-center'>{props.maxTemmp2} °C</td>
        <td className='text-center'>{props.minTemmp2} °C</td>
        
      </tr>
      <tr className="table-primary">
        <td className='text-center'>{props.date3}</td>
        <td className='text-center'>{props.sunRise3}</td>
        <td className='text-center'>{props.sunSet3}</td>
        <td className='text-center'>{props.precipitation3}%</td>
        <td className='text-center'>{props.weatherCondition3}</td>
        <td className='text-center'>{props.maxTemmp3} °C</td>
        <td className='text-center'>{props.minTemmp3} °C</td>
        
      </tr>
      <tr className="table-success">
        <td className='text-center'>{props.date4}</td>
        <td className='text-center'>{props.sunRise4}</td>
        <td className='text-center'>{props.sunSet4}</td>
        <td className="text-center">{props.precipitation4}%</td>
        <td className='text-center'>{props.weatherCondition4}</td>
        <td className='text-center'>{props.maxTemmp4} °C</td>
        <td className='text-center'>{props.minTemmp4} °C</td>
        
      </tr>
      <tr className="table-primary">
        <td className='text-center'>{props.date5}</td>
        <td className='text-center'>{props.sunRise5}</td>
        <td className='text-center'>{props.sunSet5}</td>
        <td className='text-center'>{props.precipitation5}%</td>
        <td className='text-center'>{props.weatherCondition5}</td>
        <td className='text-center'>{props.maxTemmp5} °C</td>
        <td className='text-center'>{props.minTemmp5} °C</td>
        
      </tr>
      <tr className="table-success">
        <td className='text-center'>{props.date6}</td>
        <td className='text-center'>{props.sunRise6}</td>
        <td className='text-center'>{props.sunSet6}</td>
        <td className='text-center'>{props.precipitation6}%</td>
        <td className='text-center'>{props.weatherCondition6}</td>
        <td className='text-center'>{props.maxTemmp6} °C</td>
        <td className='text-center'>{props.minTemmp6} °C</td>
        
      </tr>
      <tr className="table-primary">
        <td className='text-center'>{props.date7}</td>
        <td className='text-center'>{props.sunRise7}</td>
        <td className='text-center'>{props.sunSet7}</td>
        <td className='text-center'>{props.precipitation7}%</td>
        <td className='text-center'>{props.weatherCondition7}</td>
        <td className='text-center'>{props.maxTemmp7} °C</td>
        <td className='text-center'>{props.minTemmp7} °C</td>
        
      </tr>
    </tbody>
  </table>
</div>

</>
     );
}
 
export default Table;