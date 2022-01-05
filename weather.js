#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { errorNotification } from "./services/log.service.js";
import { router } from "./services/router.js";

async function main() {
    const args = getArgs(process.argv);
    await router(args);
}
main().catch((error) => errorNotification(error.message));