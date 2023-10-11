const Table = (props) => {
    return ( 
        <>
    <div class="container mt-3">
  <table class="table">
    {/* <thead>
      <tr>
        
        <th>sunrise</th>
        <th>sunset</th>
        <th>precipitation_probability</th>
        <th>relativehumidity</th>
        <th>temperature_max</th>
        <th>temperature_min</th>
        <th>icon</th>
      </tr>
    </thead> */}
    <tbody>
      <tr class="table-danger">
        <td>date</td>
        <td>sunrise</td>
        <td>sunset</td>
        <td>precipitation_probability</td>
        <td>weather condition</td>
        <td>temperature_max</td>
        <td>temperature_min</td>
        <td></td>
      </tr>      
      <tr class="table-primary">
        <td>{props.date1}</td>
        <td>{props.sunRise1}</td>
        <td>{props.sunSet1}</td>
        <td>{props.precipitation1}</td>
        <td>joe@example.com</td>
        <td>{props.maxTemmp1}</td>
        <td>{props.minTemmp1}</td>
        <td>joe@example.com</td>
      </tr>
      <tr class="table-success">
        <td>{props.date2}</td>
        <td>{props.sunRise2}</td>
        <td>{props.sunSet2}</td>
        <td>{props.precipitation2}</td>
        <td>joe@example.com</td>
        <td>{props.maxTemmp2}</td>
        <td>{props.minTemmp2}</td>
        <td>joe@example.com</td>
      </tr>
      <tr class="table-primary">
        <td>{props.date3}</td>
        <td>{props.sunRise3}</td>
        <td>{props.sunSet3}</td>
        <td>{props.precipitation3}</td>
        <td>joe@example.com</td>
        <td>{props.maxTemmp3}</td>
        <td>{props.minTemmp3} c</td>
        <td>joe@example.com</td>
      </tr>
      <tr class="table-success">
        <td>{props.date4}</td>
        <td>{props.sunRise4}</td>
        <td>{props.sunSet4}</td>
        <td>{props.precipitation4}</td>
        <td>joe@example.com</td>
        <td>{props.maxTemmp4}</td>
        <td>{props.minTemmp4}</td>
        <td>joe@example.com</td>
      </tr>
      <tr class="table-primary">
        <td>{props.date5}</td>
        <td>{props.sunRise5}</td>
        <td>{props.sunSet5}</td>
        <td>{props.precipitation5}</td>
        <td>joe@example.com</td>
        <td>{props.maxTemmp5}</td>
        <td>{props.minTemmp5}</td>
        <td>joe@example.com</td>
      </tr>
      <tr class="table-success">
        <td>{props.date6}</td>
        <td>{props.sunRise6}</td>
        <td>{props.sunSet6}</td>
        <td>{props.precipitation6}</td>
        <td>joe@example.com</td>
        <td>{props.maxTemmp6}</td>
        <td>{props.minTemmp6}</td>
        <td>joe@example.com</td>
      </tr>
      <tr class="table-primary">
        <td>{props.date7}</td>
        <td>{props.sunRise7}</td>
        <td>{props.sunSet7}</td>
        <td>{props.precipitation7}</td>
        <td>joe@example.com</td>
        <td>{props.maxTemmp7}</td>
        <td>{props.minTemmp7}</td>
        <td>joe@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

</>
     );
}
 
export default Table;