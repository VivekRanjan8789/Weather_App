import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import Weathercard from "./weathercard.js";

const  Weather = () => {

      const [searchValue, setSearchValue] = useState("Bihār Sharīf");
      const [weatherData, setWeatherData] = useState({});

      const apiKey = process.env.REACT_APP_API_KEY;

      const getWeatherInfo = async () => {
            try {
                  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${apiKey}`

                  let res =await fetch(url);
                  let data = await res.json();
                  const { temp, pressure, humidity } = data.main;
                  const { speed } = data.wind;
                  const { country, sunset } = data.sys;
                  const { name: cityName} = data;  // object destructuring and "name" is changed to "cityName"
                  const { main: weatherMood } = data.weather[0];


                  const myNewWeatherInfo = {
                        temp,
                        pressure,
                        humidity,
                        speed,
                        country,sunset,
                        cityName,
                        weatherMood
                  }   
                  setWeatherData(myNewWeatherInfo);     
                  console.log(weatherData);        
                  
            } catch (error) {
               console.log(error);
            }
      }

      useEffect(()=> {
            getWeatherInfo();
      },[])

     return (
        <>
            <div className="outer-container">
                    <div className="inner-container">
                          <div className="search-container">
                                <input type="search" className="search-form" placeolder="City Name..." onChange={(event) => setSearchValue(event.target.value)} value={searchValue}></input>
                                <button className="search-btn" onClick={getWeatherInfo} >Search</button>
                          </div>
                         
                          <div className="main-container">

                                <Weathercard weatherData = { weatherData }/>
                              
                          </div>
                          
                    </div>
            </div>
            

        </>
     )
     
}

export default Weather;