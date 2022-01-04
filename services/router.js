import { keysModel } from "../models/keys.model.js";
import { writeMan, showLoader } from "./log.service.js";
import { getUserData, storeUserData } from "./store-user-data.service.js";

export const router = async (args) => {
    for (const [key, value] of args) {
        switch (key) {
            case keysModel.LOADER.shortKey:
                showLoader();
                break;
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
                throw new Error(`Unregistered key <${key}>. To see all flags use flag -h`);
        }
    }
};
