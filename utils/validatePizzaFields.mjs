//Générer avec l'aide de chatGPT

/**
 * Vérifie si une valeur est un entier positif
 */
export const isValidInteger = (value) => {
    const n = Number(value);
    return Number.isInteger(n) && n >= 0;
};

/**
 * Vérifie si une valeur est un nombre flottant positif
 */
export const isValidFloat = (value) => {
    const n = Number(value);
    return !isNaN(n) && n >= 0;
};

/**
 * Vérifie si une chaîne est non vide
 */
export const isNonEmptyString = (value) => {
    return typeof value === 'string' && value.trim().length > 0;
};

/**
 * Vérifie si une date est valide au format YYYY-MM-DD
 */
export const isValidDate = (value) => {
    if (!value || typeof value !== 'string') return false;
    const d = new Date(value);
    return !isNaN(d.getTime()) && /^\d{4}-\d{2}-\d{2}$/.test(value);
};

/**
 * Valide un objet pizza pour POST ou PUT
 * Retourne un tableau d'erreurs, vide si tout est ok
 */
export const validatePizza = (data) => {
    const errors = [];

    if (!isNonEmptyString(data.name)) errors.push("name must be a non-empty string");
    if (!isNonEmptyString(data.description)) errors.push("description must be a non-empty string");
    if (!isValidInteger(data.quantity)) errors.push("quantity must be a positive integer");
    if (!isNonEmptyString(data.imageUrl)) errors.push("imageUrl must be a non-empty string");
    if (!isValidFloat(data.price)) errors.push("price must be a positive number");
    if (!isValidDate(data.start_date)) errors.push("start_date must be a valid date YYYY-MM-DD");
    if (!isValidDate(data.end_date)) errors.push("end_date must be a valid date YYYY-MM-DD");

    if (data.start_date && data.end_date) {
        if (new Date(data.start_date) > new Date(data.end_date)) {
            errors.push("start_date cannot be after end_date");
        }
    }

    return errors;
};
