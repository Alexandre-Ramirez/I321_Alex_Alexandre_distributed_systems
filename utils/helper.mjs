function isValidInteger(value) {
    return Number.isInteger(Number(value)) && Number(value) > 0;
}

function validateIngredientData(name, gramme, country) {
    if (!name || typeof name !== "string") return false;
    if (!country || typeof country !== "string") return false;
    if (gramme === undefined || typeof gramme !== "number") return false;
    return true;
}

function validatePizzaData(name, description, price, imageUrl = null) {
    if (!name || typeof name !== "string") return false;
    if (!description || typeof description !== "string") return false;
    if (price === undefined || typeof price !== "number") return false;
    return true; // imageUrl est facultatif
}


export { isValidInteger, validateIngredientData, validatePizzaData };
