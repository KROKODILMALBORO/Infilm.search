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
