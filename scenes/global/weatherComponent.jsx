import React, { useState, useEffect } from "react";
import ReactWeather, { useWeatherBit } from "react-open-weather";

const WeatherComponent = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const { data, isLoading, errorMessage } = useWeatherBit({
    key: "2cd01e1d4b414073971c98bffaab23a6",
    lat: "39.925533",
    lon: "32.866287",
    lang: "tr",
    unit: "M", // values are (M,S,I)
  });
  const formattedTime = {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };

  const formattedHours = ("0" + formattedTime.hours).slice(-2);
  const formattedMinutes = ("0" + formattedTime.minutes).slice(-2);
  const formattedSeconds = ("0" + formattedTime.seconds).slice(-2);
  return (
    <>
      {/* <Box display="flex" justifyContent={"center"} alignItems={"center"} p={2}>
        <h1>
          {formattedHours}:{formattedMinutes}:{formattedSeconds}
        </h1>
      </Box> */}
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Ankara"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
    </>
  );
};

export default WeatherComponent;
