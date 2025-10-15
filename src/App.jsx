import React, { useState } from 'react'
import WeatherDisplay from './components/weatherDisplay'
import WeatherForm from './components/weatherForm'
import Spinner from './components/spinner'
import { getWeather } from '../services/weatherServices'
import "./App.css"
const App = () => {
  const [data, setData] = useState(null)
  const [Loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSearch(city) {
    setLoading(true)
    setError("");
    setData(null)

    try {
      const result = await getWeather(city)
      setData(result)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='container'>
      <h2>🌦️ Weather App</h2>
      <WeatherForm onSearch={handleSearch} />
      {Loading && <Spinner />}
      {error && <p className='error'>{error}</p>}
      {data && <WeatherDisplay data={data} />}
      <div className='cloud cloud1'></div>
      <div className='cloud cloud2'></div>
      <div className='cloud cloud3'></div>
    </div>
  )
}

export default App
