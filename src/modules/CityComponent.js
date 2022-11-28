import styled from "styled-components";
import React from "react";
const WeatherLogo= styled.img`
    widht: 140px;
    height: 80px;
    margin: 40px auto;

`;
const ChooseCityLabel=styled.span`
   color:black;
   font-size:18px;
   font-weight:bold;
   margin:10px auto;
`;
const SearchBox=styled.form`
   display: flex;
   flex-direction:row;
   border: black solid 1px;
   border-radius:2px;
   color:black;   
   font-size:14px;
   margin:20px auto;
   
   & input{
    padding:10px;
    font-size:14 px;
    border:none;
    outline:none;
    font-weight:bold;

   }
   & button{
    padding:10px;
    font-size:14 px;
    color:white;
    background-color: black;
    border:none;
    outline:none;
    font-weight:bold;
    cursor:pointer;


   }
   
   

`;



const CityComponent = (props)=> {
    const {updateCity,fetchWeather}=props;
    return(
        <>
            <WeatherLogo src="./icons/perfect-day.svg"/>
            <ChooseCityLabel>Find Weather of your City</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="City" onChange={(e)=> updateCity(e.target.value)}/>
                <button type="submit">Search</button>
            </SearchBox>
        </>
    );
};
export default CityComponent; 