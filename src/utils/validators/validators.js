

export const required = (value) => {
    if (value) {
        return (undefined);
    }
    return ("Error! Field is reqired!");
};

export const maxLengthCreater = (maxLength) => {
    return ((value) => {
        if (value && value.length < maxLength) {
            return (undefined);
        }
        return ("Error! Max length: " + maxLength + ' symbols!');
    })
};