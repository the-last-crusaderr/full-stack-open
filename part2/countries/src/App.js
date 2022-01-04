import React,{useState} from 'react';
import axios from 'axios';



const WeatherDisplayer = ({capital}) => {

  const api = process.env.REACT_APP_API_KEY;
  const params = {  access_key : api, query : capital}
  let weatherData = null;
  
  axios.get(`http://api.weatherstack.com/current
    ? access_key = ${params.access_key},
    & query = ${params.query}`).then(
    response => {weatherData = response.data} ).catch ( error => { weatherData = null } )

  
  if (weatherData === null){
      return ( <div>
        Weather information is unavailable
        </div>
      )
  }
  else {    
  return (
    <>
      <img src = {weatherData.current.weather_icons[0]}/>
      <p>temperature:{weatherData.current.temperature}</p> <br/>
      <p>wind:{weatherData.current._windspeed}</p>
    </>
  )
 }
}

const RenderLanguage = ({lang}) => {

  return(
<>
   { Object.keys(lang).map( key => <li> {lang[key]} </li> ) }
</>
  )

}




const Display = ({country,setSearchString,setCountry}) => {

  const handleclick = (event) => {

    let str = event.target.parentNode.innerHTML; 
    let lst = str.split(' ');

    //making string...

    str = lst[1];
    let i = 2;

    while(lst[i] !== "<button>show</button>"){
      str += ' '
      str += lst[i];
      i++
    }

    setSearchString(str);

    axios.get(`https://restcountries.com/v3.1/name/${str}?fullText=false`).then( response =>{
      setCountry(response.data);
      console.log(country);
    } ).catch(error => console.log("This is error",error) );
  }


  if(country.length === 0)
    return null

  else if(country.length > 10){
    return (
      <div>
        Too many matches, please specify another filter.
      </div>
    )
  }

  else if(country.length < 10 && country.length !== 1){

    return (
      <div>
         {country.map( (element,index) =><p key={index}> {element.name.common} <button onClick={handleclick}>show</button> </p> ) }
      </div>
    )
  }

  else{

   
    /*console.log(`This is url - https://api.openweathermap.org/data/2.5/weather?q=${country[0].capital}&appid=${api}`) 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country[0].capital}&appid=${api}`).then( response => {weatherData = response.data })
    console.log('weatherData -> ',weatherData); */

    return(
      <div>
      {country.map( (element,index) =><div key={index}>       
        <h1> {element.name.common} </h1>  <br/>
        capital {element.capital[0]}  <br/>
        population {element.population} <br/>
        <h2>Spoken Languages</h2>
        <RenderLanguage lang =  {element.languages} />  <br/>
        <img src = {element.flags.png} alt='flag of respective country' />  
        <h3>Weather in {element.capital}</h3> <br/>

        <WeatherDisplayer capital={element.capital[0]}/>
        </div>) }
      </div>
    )
  }
}


function App() {
  const [searchString,setSearchString] = useState('');
  const [country,setCountry] = useState([]);



  const handleChange = (event) => {

    setSearchString(event.target.value);
    console.log(searchString);   //

    axios.get(`https://restcountries.com/v3.1/name/${searchString}?fullText=false`).then( response =>{
      setCountry(response.data);
      console.log(country);
    } ).catch(error => console.log("This is error",error) );

  }



 
  return (
    <>
      <p>find countries <input value={searchString} onChange={handleChange} setCountry={setCountry}/>   </p>
      <Display country={country} setSearchString={setSearchString} setCountry={setCountry}/>
    </>
  );
}

export default App;
