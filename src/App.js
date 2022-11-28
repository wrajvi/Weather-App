import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";


const API_KEY ="eb9940c5a14f25b4d665e30602fa24c7";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;
const AppLabel = styled.span`
 color: red;
 margin: 20px auto;
 font-size: 18px;
 font-weight: bold;



`;



function App() {
  const [city, updateCity]=useState();
  const [weather, updateWeather]=useState();

  const fetchWeather= async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,);
    updateWeather(response.data);

  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      { weather?(
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
