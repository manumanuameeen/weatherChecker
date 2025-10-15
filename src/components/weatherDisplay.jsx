import React from 'react'

const WeatherDisplay = ({data}) => {

    
  return (
    <div className='weather-card'>
      <h2>{data.name}</h2>
      <p>🌡️ Temperature: {data.main.temp}°C</p>
      <p>☁️ Condition: {data.weather[0].description}</p>
    </div>
  )
}

export default WeatherDisplay
