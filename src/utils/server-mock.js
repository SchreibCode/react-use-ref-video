export const requestData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wichtige Daten vom Server");
        }, 3000);
    });
};
