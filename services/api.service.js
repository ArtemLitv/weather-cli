import axios from "axios";
import { keysModel } from "../models/keys.model.js";
import { getUserData } from "./store-user-data.service.js";

export const getWeather = async () => {
    const token = await getUserData(keysModel.SET_TOKEN.key);
    const city = await getUserData(keysModel.SET_CITY.key);

    const { data } = await axios(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                q: city,
                appid: token,
                lang: 'ru',
                units: 'metric'
            },
        }
    );
    return data;
};
