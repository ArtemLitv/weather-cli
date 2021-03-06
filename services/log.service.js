import chalk from "chalk";
import { keysModel } from "../models/keys.model.js";

export const writeMan = () => {
    const msg = Object.values(keysModel)
        .map((value) => `-${value.shortKey}\t${value.description}${value.key ? '\n--' + value.key: ''}`)
        .join("\n");
    infoNotification(msg);
};

export const infoNotification = (msg) => {
    console.log(`${chalk.bgCyan(" INFO ")}\n${msg}`);
};

export const errorNotification = (msg) => {
    console.log(`${chalk.bgRed(" ERROR ")}\n${msg}`);
};

let loaderTimer = null;

export const showLoader = () => {
    const sprite = ["|", "/", "-", "\\", "|", "/", "-", "\\"];
    let index = 0;
    loaderTimer = setInterval(() => {
        const cadr = sprite[index % sprite.length];
        process.stdout.write(`\r(${cadr}) đ¤`);
        index++;
    }, 300);
};

export const stopLoader = () => {
	clearInterval(loaderTimer);
	process.stdout.write(`\r`);
};

export const showWeather = (data) => {
    console.log(`${chalk.bgYellow(" Weather ")}
    \r${data.weather[0].main} ${getIcon(data.weather[0].icon)}
    \rTemp: ${data.main.temp}\t Pressure: ${data.main.pressure}
    `);
};

const getIcon = (iconCode) => {
    switch (iconCode.slice(0, -1)) {
        case "01":
            return "âī¸";
        case "02":
            return "đ¤ī¸";
        case "03":
            return "âī¸";
        case "04":
            return "âī¸";
        case "09":
            return "đ§ī¸";
        case "10":
            return "đĻī¸";
        case "11":
            return "đŠī¸";
        case "13":
            return "âī¸";
        case "50":
            return "đĢī¸";
    }
};
