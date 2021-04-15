export const sleep = (timeout: number = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("");
        }, timeout);
    });
};
