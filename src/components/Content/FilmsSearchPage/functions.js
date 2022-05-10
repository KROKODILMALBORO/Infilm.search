export const getGenres = (arr) => {
    const str = arr.map((obj) => obj.genre).join(', ')

    if (str === '') {
        return <span>(Данные отсутствуют)</span>
    }

    const result = str[0].toUpperCase() + str.slice(1)

    return <span>{result}</span>
}

export const getCountries = (arr) => {
    if (arr.length === 0) {
        return <span>(Данные отсутствуют)</span>
    }

    const result = arr.map((obj) => obj.country).join(', ')

    return <span>{result}</span>
}

export const getType = (str) => {
    switch (str) {
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
