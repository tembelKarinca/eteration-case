export const brandFilter = (array, value) => {
    return [...array].filter(function (item) {
        return item.brand === value
    })
}
export const modelFilter = (array, value) => {
    return [...array].filter(function (item) {
        return item.model === value
    })
}