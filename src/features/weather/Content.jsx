import styled, { css } from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 600px;
  ${(props) =>
    props.img === "day" &&
    css`
      /* background-image: url("./img/day.svg"); */
      background-size: contain;
      color: var(--color-dark);
    `}

  ${(props) =>
    props.img === "night" &&
    css`
      /* background-image: url("./img/night.svg"); */
      background-size: contain;
      color: var(--color-light);
    `}
`;
const Icon = styled.div`
  background-color: var(--color-light);
  position: relative;
  top: -50px;
  border-radius: 50%;
  width: 100px;
  margin-bottom: -50px;
`;
const Img = styled.img`
  width: 100%;
`;
const Info = styled.div`
  text-transform: uppercase;
`;
const InfoH5 = styled.h5`
  margin: 1rem;
  font-size: 1.4rem;
  letter-spacing: 2px;
`;
const Temp = styled.div`
  margin: 1.5rem;
  font-size: 3rem;
`;

function Content({ cityDetails, weatherDetails, isLoading, error }) {
  if (isLoading)
    return (
      <Card>
        <InfoH5>{error ? error : "Ładowanie..."}</InfoH5>
      </Card>
    );

  if (!weatherDetails || !cityDetails) return null;
  return (
    <Card img={weatherDetails?.IsDayTime ? "day" : "night"}>
      {/* <Img
        src={weatherDetails?.IsDayTime ? "./img/day.svg" : "./img/night.svg"}
        alt="Time IMG"
      /> */}
      {/* <Icon>
        <img src={`img/icons/${weatherDetails?.WeatherIcon}.svg`} alt="" />
      </Icon> */}
      <Info>
        <InfoH5>{cityDetails?.EnglishName}</InfoH5>
        <InfoH5>{weatherDetails?.WeatherText}</InfoH5>
        <Temp>
          <span>{weatherDetails?.Temperature?.Metric.Value}</span>
          <span>&deg;C</span>
        </Temp>
      </Info>
    </Card>
  );
}

export default Content;
