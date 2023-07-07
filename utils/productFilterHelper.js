export const brandFilter = (array, value) => {
    return [...array].filter(function (item) {
        return value.includes(item.brand)
    })
}
export const modelFilter = (array, value) => {
    return [...array].filter(function (item) {
        return value.includes(item.model)
    })
}