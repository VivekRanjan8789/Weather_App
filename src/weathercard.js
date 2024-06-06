import React, { useEffect, useState }  from "react";

const Weathercard = ({ weatherData }) => {
    const [weatherState, setWeatherState] = useState("")

    const {
        temp,
        pressure,
        humidity,
        speed,
        country,sunset,
        cityName,
        weatherMood
  } =  weatherData;

  useEffect(() => {
        if(weatherMood){
             switch (weatherMood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");                    
                    break;
                case "Haze":
                     setWeatherState("wi-fog");
                     break;
                case "Clear":
                      setWeatherState("wi-day-sunny");
                      break;
                case "Clear":
                      setWeatherState("wi-dust")
                      break;
             
                default:
                    setWeatherState("wi-day-sunny")
                    break;
             }
        }
  },[weatherMood])

  // converting the seconds into time
  let sec = sunset;
let date = new Date(sec * 1000);
let hours = date.getHours();
let minutes = date.getMinutes().toString().padStart(2, '0');
let timestr = `${hours}:${minutes}`;


    return (
        <>
            {/* upper-container */}
            <div className="upper-container">
                <i class={`wi ${weatherState}`}></i>
            </div>

            {/* middle container */}  
            <div className="middle-container">
                    <div className="temperature-container">

                        <div className="temperature-degree"><p>{temp}°</p></div>

                        <div className="cityandweather">
                                    <div className="weathertype">{weatherMood}</div>
                                    <div className="city">{cityName},{country}</div>
                        </div>

                    </div>
                    <div className="datetime-container">
                        <p> {new Date().toLocaleString()}</p>
                    </div>
            </div>

               {/* lower-container  */}
            <div className="lower-container">

                <div className="four-box">
                    <div className="img"><i class="wi wi-day-sunny"></i></div>
                    <p className="content">
                        {timestr} pm<br />
                        Sunset
                    </p>
                </div>

                <div className="four-box">
                    <div className="img"><i class="wi wi-humidity"></i></div>
                    <p className="content">
                        {humidity} <br />
                        Humidity
                    </p>
                </div>

                <div className="four-box">
                    <div className="img"><i class="wi wi-rain"></i></div>
                    <p className="content">
                        {pressure} <br />
                        Pressure
                    </p>
                </div>

                <div className="four-box">
                    <div className="img"><i class="wi wi-strong-wind"></i></div>
                    <p className="content">
                         {speed} <br />
                        Speed
                    </p>
                </div>


            </div>

        </>
    )
}

export default Weathercard