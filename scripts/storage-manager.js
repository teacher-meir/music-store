/**
 * save complex data in storage
 * @param {string} key 
 * @param {any} value 
*/
export const saveToStorage = (key, value) => {
    const str = JSON.stringify(value); // ממיר מאוביקט למחרוזת
    localStorage[key] = str;
};

/**
 * load complex data from storage
 * @param {string} key 
 * @returns 
 */
export const loadFromStorage = (key) => {
    const stObject = localStorage[key];

    if (stObject) {
        return JSON.parse(stObject)// ממיר ממחרוזת לאוביקט}
    }
    return null;
};