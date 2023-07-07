export const sortNewToOld = (array) => {
    return [...array]?.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt)
    })
}
export const sortOldToNew = (array) => {
    return [...array]?.sort(function (a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt)
    })

}
export const sortPriceHighToLow = (array) => {
    return [...array]?.sort(function (a, b) {
        return (b.price) - (a.price)
    })

}
export const sortPriceLowToHigh = (array) => {
    return [...array]?.sort(function (a, b) {
        return (a.price) - (b.price)
    })
}
