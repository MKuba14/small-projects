import { useState } from "react";

const key = `jMdjzWyJ35Jxi6zl0Qxa4zKl87iRyGby`;
const weatherURI = `http://dataservice.accuweather.com/currentconditions/v1/`;
const cityURI = `http://dataservice.accuweather.com/locations/v1/cities/search`;

export function useFetch() {
  const [cityDetails, setCityDetails] = useState(null);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function getDetails(city) {
    try {
      setIsLoading(true);
      setError("");
      const queryCity = `?apikey=${key}&q=${city}`;
      const res = await fetch(cityURI + queryCity);
      const data = await res.json();

      setCityDetails(data[0]);

      const queryWeather = `${data[0].Key}?apikey=${key}`;
      const res2 = await fetch(weatherURI + queryWeather + "&details=true");
      const data2 = await res2.json();

      setWeatherDetails(data2[0]);
      setIsLoading(false);
    } catch (err) {
      setError("There is no such city");
    }
  }

  return { cityDetails, weatherDetails, isLoading, error, getDetails };
}
