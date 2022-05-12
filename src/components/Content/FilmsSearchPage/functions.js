export const formatGenresToString = (genresArr) => {
    const result = genresArr.map((genreObj) => genreObj.genre).join(', ')

    if (result === '') {
        return '(Данные отсутствуют)'
    }

    return result[0].toUpperCase() + result.slice(1)
}

export const formatCountriesToString = (countriesArr) => {
    if (countriesArr.length === 0) {
        return '(Данные отсутствуют)'
    }

    return countriesArr.map((countriesObj) => countriesObj.country).join(', ')
}

export const formatType = (type) => {
    switch (type) {
        case 'FILM':
            return 'Фильм'
        case 'TV_SERIES':
            return 'Сериал'
        case 'TV_SHOW':
            return 'Телешоу'
        case 'MINI_SERIES':
            return 'Минисериал'
        case 'VIDEO':
            return 'Видео'
    }
}

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

export const getDefaultFilters = () => {
    return {
        keyword: '',
        yearFrom: 2000,
        yearTo: 2000,
        ratingFrom: 6,
        ratingTo: 9,
        type: 'FILM',
        order: 'RATING',
        page: 1,
    }
}
