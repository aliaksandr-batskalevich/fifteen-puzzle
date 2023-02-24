
export const initValues = (array: Array<number> = []): Array<number> => {
    if (array.length === 16) return array;

    let num = 16;
    while (num > 15 || array.includes(num)) {
        num = Math.floor(Math.random() * 16);
    }

    return initValues([...array, num]);
};

export const testIsGameFinished = (array: Array<number>) => array.filter(el => el).reduce((acc, el, index) => acc && el === index + 1, true);