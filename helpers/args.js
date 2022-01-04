export const getArgs = (argv) => {
    const res = [];
    if (!argv?.length > 2) return res;

    for (let partIndex = 2; partIndex < argv.length; partIndex++) {
        if (argv[partIndex][0] === "-") {
            res.push([argv[partIndex].slice(1), argv[partIndex + 1] || true]);
            partIndex++;
        }
    }
    return res;
};
