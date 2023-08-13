// FUNCTIONS TO HELP FORMAT TEXT


export const capitalize = (str) => {
    const capitalizedWord = str.charAt(0).toUpperCase() + str.slice(1)
    return capitalizedWord
}