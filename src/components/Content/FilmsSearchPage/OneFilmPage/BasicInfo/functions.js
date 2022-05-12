export const formatFilmLength = (filmLength) => {
    if (!filmLength) {

        return '-'
    }

    return `${filmLength} минут(ы)`
}

export const fomatRatingAgeLimits = (ratingAgeLimits) => {
    if (!ratingAgeLimits) {

        return '0+'
    }

    const result = parseInt(ratingAgeLimits.match(/\d+/))

    return `${result}+`
}
