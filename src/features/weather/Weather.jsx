import styled, { css } from "styled-components";
import { useState } from "react";
import { useFetch } from "./useWeather";

import Search from "./Search";

import { WiHumidity } from "react-icons/wi";
import { IoCloud } from "react-icons/io5";
import { FaWind } from "react-icons/fa";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 590px;
  border-radius: 2.5rem;
  text-align: center;
  box-shadow: var(--color-red) 1px 1px 100px;
  animation: transitionIn 0.4s ease-in;

  ${(props) =>
    props.img === "day" &&
    css`
      background-image: url("./img/day-warm.png");
      /* background-image: url("./img/day.png"); */
      background-size: cover;
      background-position: center;
      color: var(--color-dark-gray);
    `}

  ${(props) =>
    props.img === "night" &&
    css`
      background-image: url("./img/night-3.png");
      background-size: cover;
      background-position: center;
      color: var(--color-light);
    `}
`;
const EmptyCard = styled.div`
  display: flex;
  align-items: center;
  width: 450px;
  height: 590px;
  padding-bottom: 8rem;
  border-radius: 2.5rem;
  box-shadow: var(--color-red) 1px 1px 100px;
  animation: transitionIn 0.4s ease-in;
  text-align: center;
  padding-left: 3rem;
`;
const Icon = styled.div`
  position: relative;
  top: 50px;
  border-radius: 50%;
  width: 100px;
  margin-bottom: -50px;
`;
const Img = styled.img`
  scale: 2.6;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
  text-transform: none;
`;
const DetailIcon = styled.span`
  font-size: 1.8rem;
  padding-top: 6px;
`;

const Info = styled.div`
  text-transform: uppercase;
`;
const InfoH5 = styled.h5`
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 600;
`;
const InfoH4 = styled.h4`
  font-size: 1.3rem;
  font-weight: 100;
`;

const Temp = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
`;
const TempSpan1 = styled.span`
  font-size: 8rem;
  padding-left: 2rem;
`;
const TempSpan2 = styled.span`
  padding-top: 1.4rem;
  font-weight: 400;
`;

function Weather() {
  const [typedCity, setTypedCity] = useState("");
  const { cityDetails, weatherDetails, isLoading, error, getDetails } =
    useFetch();

  function handleSubmit(e) {
    e.preventDefault();

    setTypedCity("");
    getDetails(typedCity);
  }
  console.log(weatherDetails);

  if (!weatherDetails || !cityDetails)
    return (
      <EmptyCard>
        <Search
          onSubmit={handleSubmit}
          onType={setTypedCity}
          typedCity={typedCity}
        />
      </EmptyCard>
    );

  if (isLoading)
    return (
      <EmptyCard>
        <InfoH5>{error ? error : "Loading..."}</InfoH5>
      </EmptyCard>
    );

  return (
    <Card img={weatherDetails?.IsDayTime ? "day" : "night"}>
      <Search
        onSubmit={handleSubmit}
        onType={setTypedCity}
        typedCity={typedCity}
        isDayTime={weatherDetails?.IsDayTime}
      />

      <Info>
        <Details>
          <Detail>
            <DetailIcon>
              <WiHumidity />
            </DetailIcon>
            {weatherDetails?.RelativeHumidity}%
          </Detail>

          <Detail>
            <DetailIcon>
              <FaWind />
            </DetailIcon>
            {weatherDetails?.Wind.Speed.Metric.Value} km/h
          </Detail>

          <Detail>
            <DetailIcon>
              <IoCloud />
            </DetailIcon>
            {weatherDetails?.CloudCover}%
          </Detail>
        </Details>
        <Temp>
          <TempSpan1>
            {weatherDetails &&
              Math.round(weatherDetails?.Temperature?.Metric.Value)}
          </TempSpan1>
          <TempSpan2>&deg;C</TempSpan2>
        </Temp>
        <InfoH5>{cityDetails?.EnglishName}</InfoH5>
        <InfoH4>{weatherDetails?.WeatherText}</InfoH4>
      </Info>
      <Icon>
        <Img src={`img/icons/${weatherDetails?.WeatherIcon}.svg`} alt="" />
      </Icon>
    </Card>
  );
}

export default Weather;
