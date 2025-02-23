import { useEffect, useState } from 'react'
import axios from 'axios'
const api_key = import.meta.env.VITE_OPEN_WETH_KEY
// variable api_key now has the value set in startup
const CountryDetails =({weather,country})=>
  {
    return(<>
    <h1>{country.name.common}</h1>
    <p>Capital {country.capital[0]}</p>
    <p>Area {country.area}</p>
    <h1>Languages</h1>
    <ul>
    {Object.values(country.languages).map(l=><li key={l}>{l}</li>)}
    </ul>
    <img src={country.flags.png}></img>
    <h1>Weather in {country.capital[0]}</h1>
    {weather.Temp!=null && <p>Temparature {weather.Temp} Celsius</p>}
    <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>
    {weather.wind!=null && <p>Wind {weather.wind} m/s</p>}
    </>)
  }
function App() {
  const [dataLoaded,setdataLoaded]=useState(false)
  const [countries,setCountries]=useState([])
  const [filtedCountries,setfiltedCountries]=useState([])
  const [weather,setWeather]=useState({Temp:null,wind:null,icon:null})
  const h =()=>
  {
    console.log("TRIGGER")
    if(!dataLoaded)
    {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response =>{
      setCountries(response.data)
      setdataLoaded(true)
    })
  }
  }
  useEffect(h,[])

  const getWeather =(setWeather,country)=>
    {
      
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&units=metric&appid=${api_key}`)
      .then(response=>
        {
          const weather ={Temp:response.data.main.temp,
                          wind:response.data.wind.speed,
                          icon:response.data.weather[0].icon
          }
          console.log(response)
          setWeather(weather)
        })
    }

  const onChangeHandler =(event)=>
  {
    const updatedFilterdCountries=countries.filter(c=> c.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
    setfiltedCountries(updatedFilterdCountries)
    if(updatedFilterdCountries.length==1)
    {
      getWeather(setWeather,updatedFilterdCountries[0])
    }
  }

  return (
 <>
  {dataLoaded ? <form> 
  <div>find countries: <input onChange={onChangeHandler}/></div>
  </form> : <p>Loading countries...</p>}
  {filtedCountries.length<=10 ?
  filtedCountries.length==1 ?
  <CountryDetails weather={weather} country={filtedCountries[0]}/> 
  :<ul>{
    filtedCountries.map(c=><li key={c.cca2}>
      {c.name.common}
      <button onClick={()=>{setfiltedCountries([c]);getWeather(setWeather,c)}} >show</button>
      </li>)
    }</ul>
  : <p>Too many counties,specify other filter</p>}
 </> 

  )
}

export default App
