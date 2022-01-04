import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

const isExist = async (path) => {
    try {
        await promises.stat(path);
        return true;
    } catch (error) {
        return false;
    }
};

export const storeUserData = async (key, value) => {
    let data = {};
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }
    data[key] = value;

    const prepareData = JSON.stringify(data);
    await promises.writeFile(filePath, prepareData);
};

export const getUserData = async (key) => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        return JSON.parse(file)[key];
    }
    throw new Error(`Config file not found here ${filePath}`);
};
