import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { ClipLoader } from "react-spinners";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url("https://images.theconversation.com/files/442675/original/file-20220126-17-1i0g402.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop") center/cover no-repeat; */
  background: ${({ img }) => `url(${img})`} center/cover no-repeat;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// .env 파일은 무조건 루트 폴더에 있어야 한다.
// const API_KEY = process.env.VITE_API_KEY; // 빌드독?쓰기 전
const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [background, setBackground] = useState(null);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&lang=kr&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setWeather(data);
    setLoading(false);
  };

  const getCurrentLocation = () => {
    // console.log("getCurrentLocation");
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      // console.log(position);
      let lat = coords.latitude;
      let lon = coords.longitude;
      // console.log(lat, lon); // 위도와 경도를 찾아와야함!
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setWeather(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCityChange = (city) => {
    if (city === "") setCity(null);
    else setCity(city);
    // console.log(city);
  };

  const getBackground = () => {
    const getImg = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_KEY}`;
    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) => {
        setBackground(full);
      });
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);
  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
      getBackground();
    } else {
      getWeatherByCity();
    }
  }, [city]); // city 변경 시 getWeatherByCity 호출

  console.log(background);

  return (
    <>
      <GlobalStyles />
      <Wrapper img={background}>
        <Contents>
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </Contents>
      </Wrapper>
    </>
  );
};

export default App;
