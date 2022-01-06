import { keysModel } from "../models/keys.model.js";
import { getWeather } from "./api.service.js";
import { writeMan, showLoader, showWeather, stopLoader } from "./log.service.js";
import { storeUserData } from "./store-user-data.service.js";

export const router = async (args) => {
    if (!args.length) {
        showLoader();
        const weatherData = await getWeather();
        stopLoader();
        showWeather(weatherData);
    }

    for (const [key, value] of args) {
        switch (key) {
            case keysModel.HELP.shortKey:
                writeMan();
                break;
            case keysModel.SET_CITY.shortKey:
            case keysModel.SET_CITY.key:
                storeUserData(keysModel.SET_CITY.key, value);
                break;
            case keysModel.SET_TOKEN.shortKey:
            case keysModel.SET_TOKEN.key:
                storeUserData(keysModel.SET_TOKEN.key, value);
                break;
            default:
                throw new Error(
                    `Unregistered key <${key}>. To see all flags use flag -h`
                );
        }
    }
};
