import React, { useState } from "react";
import styled from "styled-components";
import DayBackground from "../images/day.jpg";
import NightBackground from "../images/night.jpg";
import NextArrow from "../images/next_white2.png";
import PrevArrow from "../images/prev_white2.png";

export default function DailyWeatherCard({ weatherData, coordsData, coords }) {
    const [day, setDay] = useState(0);

    const next = () => {
        if (day < 7) setDay(day + 1);
    };
    const prev = () => {
        if (day > 0) setDay(day - 1);
    };
    const timestampToString = (timestamp) =>
        new Date(timestamp * 1000).toDateString();

    if (!weatherData.daily) return <div style={{color: "white", fontSize: "1.5rem"}}>Enter a city...</div>;

    return (
        <Container>
            <HeaderDiv>
                {coordsData ? (
                    <Location color="white">{coordsData}</Location>
                ) : (
                    <Location color="white">Your current location</Location>
                )}
            </HeaderDiv>

            <DateSpan>
                {timestampToString(weatherData.daily[day].dt)}
            </DateSpan>

            <Daily>
                <PrevButton onClick={prev}></PrevButton>
                <Cards>
                    <DayCard>
                        <h4>Day</h4>
                        <p>Temperature: {weatherData.daily[day].temp.day}&#8451;</p>
                        <p>Feels like: {weatherData.daily[day].feels_like.day}&#8451;</p>
                    </DayCard>

                    <NightCard>
                        <h4>Night</h4>
                        <p>Temperature: {weatherData.daily[day].temp.night}&#8451;</p>
                        <p>Feels like: {weatherData.daily[day].feels_like.night}&#8451;</p>
                    </NightCard>
                </Cards>
                <NextButton onClick={next}></NextButton>
            </Daily>
            <GeneralInfo>
                <p>{weatherData.daily[day].weather[0].description}</p>
                <p>Humidity {weatherData.daily[day].humidity}%</p> 
            </GeneralInfo>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Location = styled.span`
    color: ${(props) => props.color};
    font-size: 2rem;
`;

const DateSpan = styled.span`
    display: flex;
    justify-content: center;
    color: white;
    border: solid 1px white;
    border-radius: 10px;
    width: 17rem;
    font-size: 2rem;
    margin: 1rem;
`;
const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const GeneralInfo = styled.div`
    display: flex;
    color: white;
    font-size: 2rem;
    border: solid 1px white;
    border-radius: 10px;
    width: 17rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`;

const Daily = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const DayCard = styled.div`
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    color: #000;
    border-radius: 30px;
    height: 40rem;
    width: 30rem;
    margin-right: 1rem;
    background-image: url(${DayBackground});
    background-size: cover;
    cursor: default;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        -webkit-box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);
    }
`;

const NightCard = styled.div`
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    color: white;
    border-radius: 30px;
    height: 40rem;
    width: 30rem;
    margin-left: 1rem;
    background-image: url(${NightBackground});
    background-size: cover;
    cursor: default;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        -webkit-box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);
    }
`;

const PrevButton = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${PrevArrow});
    background-size: cover;
    margin-right: 10rem;
    cursor: pointer;
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    transform: scale(4);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(5);
        transition: all 0.2s ease-in-out;
    }
    &:active {
        transform: scale(6);
        transition: all 0.1s ease-in-out;
    }
`;

const NextButton = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${NextArrow});
    background-size: cover;
    margin-left: 10rem;
    cursor: pointer;
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    transform: scale(4);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(5);
        transition: all 0.2s ease-in-out;
    }
    &:active {
        transform: scale(6);
        transition: all 0.1s ease-in-out;
    }
`;
