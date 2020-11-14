import React, { useState, useEffect } from "react";
import DailyWeatherCard from "./components/DailyWeatherCard";
import Selector from "./components/Selector";
import "./App.css";

function App() {
    const weatherAPI_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const geocodingAPI_KEY = process.env.REACT_APP_GEOCODING_API_KEY;
    console.log(weatherAPI_KEY);
    console.log(geocodingAPI_KEY);

    const [weatherData, setWeatherData] = useState([]);
    const [county, setCounty] = useState("");
    const [error, setError] = useState("");
    const [coords, setCoords] = useState({ lat: null, lon: null });

    const [city, setCity] = useState("");

    const fetchGeoData = async () => {
        try {
            const geocoding_url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${geocodingAPI_KEY}`;
            let response = await fetch(geocoding_url);
            const geo_data = await response.json();
            setCounty(geo_data.results[0].formatted);
            return geo_data;
        } catch (error) {
            console.log(error);
        }
    };
    const fetchWeatherData = async (lat, lon) => {
        try {
            const weather_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${weatherAPI_KEY}`;
            let response = await fetch(weather_url);
            const weather_data = await response.json();
            setWeatherData(weather_data);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchData = async (event) => {
        event.preventDefault();
        if (city) {
            setError("");
            const cityInfo = await fetchGeoData();
            if (cityInfo)
                fetchWeatherData(
                    cityInfo.results[0].geometry.lat,
                    cityInfo.results[0].geometry.lng
                );
            else setError("enter a valid city name");
        } else setError("enter a city");
    };

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                fetchWeatherData(
                    position.coords.latitude,
                    position.coords.longitude
                );
                console.log(
                    position.coords.latitude,
                    position.coords.longitude
                );
                setCoords({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            });
        } else {
            console.log("Not Available");
        }
    }, []);

    return (
        <div className="App">
            <Selector
                changeCity={(e) => setCity(e.target.value)}
                city={city}
                fetchData={fetchData}
                error={error}
            />
            <DailyWeatherCard
                weatherData={weatherData}
                coordsData={county}
                coords={coords}
            />
        </div>
    );
}

export default App;
