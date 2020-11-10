import React, { useState } from "react";

const DailyWeatherCard = ({ weatherData, coordsData, coords }) => {
    const [day, setDay] = useState(0);
    const {lat, lon} = coords;

    const next = () => {
        if (day < 7) setDay(day + 1);
    };
    const prev = () => {
        if (day > 0) setDay(day - 1);
    };
    const timestampToString = (timestamp) =>
        new Date(timestamp * 1000).toDateString();

    if (!weatherData.daily) return <div> loading... </div>;

    return (
        <div>
            <div>
                <h4>Timezone: {weatherData.timezone}</h4>
                <h1>{ coordsData || `Your current location ${lat} ${lon}`}</h1>
                <h2
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        width: "200px"
                    }}
                >
                    {timestampToString(weatherData.daily[day].dt)}
                </h2>
            </div>

            <div style={{ backgroundColor: "cyan", width: "200px" }}>
                <p>Humidity {weatherData.daily[day].humidity}%</p>
                <p>{weatherData.daily[day].weather[0].description}</p>
            </div>

            <div style={{ backgroundColor: "yellow", width: "200px" }}>
                <h4>Day</h4>
                <p>Temp: {weatherData.daily[day].temp.day}</p>
                <p>Feels like:{weatherData.daily[day].feels_like.day}</p>
            </div>

            <div
                style={{
                    backgroundColor: "darkblue",
                    color: "white",
                    width: "200px",
                }}
            >
                <h4>Night</h4>
                <p>Temp: {weatherData.daily[day].temp.night}</p>
                <p>Feels like:{weatherData.daily[day].feels_like.night}</p>
            </div>

            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </div>
    );
};

export default DailyWeatherCard;
