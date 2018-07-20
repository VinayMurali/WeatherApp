import axios from "axios";

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const SHOW_MESSAGE = "SHOW_MESSAGE";


export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},IN`;
  const request = axios.get(url);

{/*this will return an promise
the below consolelog will print the promise,i.e the request.
to check the response refer consolelog of reducer_weather.
the above request is assyncrous in nature;
  */}
    console.log('Request from Action:',request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
