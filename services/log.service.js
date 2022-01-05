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

export const showLoader = () => {
    const sprite = ["|", "/", "-", "\\", "|", "/", "-", "\\"];
    //  const sprite = ['🙎', '🤦'];
    let index = 0;
    setInterval(() => {
        const cadr = sprite[index % sprite.length];
        process.stdout.write(`\r(${cadr}) 🤔`);
        index++;
    }, 300);
};

export const showWeather = (data) => {
    console.log(`${chalk.bgYellow(" Weather ")}
    \r${data.weather[0].main} ${getIcon(data.weather[0].icon)}
    \rTemp: ${data.main.temp}\t Pressure: ${data.main.pressure}
    `)
}

const getIcon = (iconCode) => {
	switch (iconCode.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};