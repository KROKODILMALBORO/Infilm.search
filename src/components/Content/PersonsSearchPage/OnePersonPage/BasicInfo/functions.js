export const getBirthDay = (birthDay) => {
    const day = birthDay[8] + birthDay[9]
    const month = birthDay[5] + birthDay[6]
    const year = birthDay[0] + birthDay[1] + birthDay[2] + birthDay[3]

    return `${day}.${month}.${year}`
}

export const getDeathDay = (deathDay) => {
    const day = deathDay[8] + deathDay[9]
    const month = deathDay[5] + deathDay[6]
    const year = deathDay[0] + deathDay[1] + deathDay[2] + deathDay[3]

    return `${day}.${month}.${year}`
}
