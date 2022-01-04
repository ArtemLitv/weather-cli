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
