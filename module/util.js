
    let getInUpperCase = (stringArray) => {
        return stringArray.map(s => s.toUpperCase());
    }

    let getInLowerCase = (stringArray) => {
        return stringArray.map(s => s.toLowerCase());
    }

    let getIndexPosition = (stringArray, element) => {
        return stringArray.indexOf(element);
    }

    export {getInLowerCase, getIndexPosition, getInUpperCase};