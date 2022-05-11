export const getFilmLength = (length) => {
    if (!length) {

        return <span>-</span>
    }

    return <span>{length} минут(ы)</span>
}

export const getRatingAgeLimits = (ratingAgeLimits) => {
    if (!ratingAgeLimits) {

        return <span>0+</span>
    }

    const result = parseInt(ratingAgeLimits.match(/\d+/))

    return <span>{result}+</span>
}
