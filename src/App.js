import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const [Data,setData]=useState({})
  const [Location,setLocation]=useState('')
  

    const url=`http://api.weatherapi.com/v1/forecast.json?key=b63af2b9c75d4514a8c104338220106&q=${Location}&days=1&aqi=no&alerts=no`

   const searchLoctaion=(e)=>{
    if(e.key==='Enter')
    {
      axios.get(url).then((res)=>{
        setData(res.data)
        console.log(res.data)
      })
    }
   }

  
  
    return (
    <div className="App">
      <div className='container'>
        <input type='text' placeholder='Write City' value={Location} onChange={e=>setLocation(e.target.value)} onKeyPress={searchLoctaion} />
        <div className='info'>
          <h4>City Name:</h4>
          {Data.location?<h1>{Data.location.name}</h1>:<h1>Null</h1>}
        </div>
        <div className='info'>
          <h4>Country:</h4>
          {Data.location?<h1>{Data.location.country}</h1>:<h1>Null</h1>}
        </div>
        <div className='temperature'>
          <div className='tempInfo'>
          {Data.location?<label>{Data.current.temp_f}F</label>:<label>Null</label>}
            <p>Fells like</p>
          </div>
          <div className='tempInfo'>
          {Data.location?<label>{Data.current.humidity}%</label>:<label>Null</label>}
            <p>Humidity</p>
          </div>
          <div className='tempInfo'>
          {Data.location?<label>{Data.current.wind_mph}MPH</label>:<label>Null</label>}
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
