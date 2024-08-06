import axios from 'axios'
import React, { useEffect, useState } from 'react'

const apiKey = import.meta.env.VITE_SOME_KEY;

const Country = ({ country }) => {
    const [weather, setWeather] = useState();

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${apiKey}&units=metric`)
            .then(response => {
                setWeather(response.data);
            })
    }, [])

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <p><strong>Languages: </strong></p>
            <ul>
                {
                    Object.entries(country.languages).map((language) => <li>{language[1]}</li>)
                }
            </ul>
            <img src={country.flags.png} alt={country.name.common} />
            <h2>Weather in {country.capital[0]}</h2>
            {
                weather ?
                    <>
                        <p>Temperature: {weather.main.temp} Celesius</p>
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                        <p>Wind: {weather.wind.speed} m/s</p>
                    </>
                    :
                    null
            }

        </div>
    )
}

export default Country;
