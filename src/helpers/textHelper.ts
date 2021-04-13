export const TEXT_LENGTH_LIMIT = 17;

export const capitalizeText = (value: string) => {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};

export const normalizeText = (value: string) => {
    if (value.length > TEXT_LENGTH_LIMIT) {
        return `${value.slice(0, TEXT_LENGTH_LIMIT)}..`;
    }

    return value;
};
