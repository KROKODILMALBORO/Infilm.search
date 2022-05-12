import queryString from 'query-string'

import {ROOT_URL} from '../constans'
import {TOKEN} from '../token'
import {INSTANCE_PATH_FILMS} from './constans'

export async function getFilms(filters) {
    try {
        const stringified = queryString.stringify(filters)

        const res = await fetch(`${ROOT_URL}${INSTANCE_PATH_FILMS}?${stringified}`, {
            method: 'GET',
            headers: [
                ['X-API-KEY', TOKEN],
                ['Content-Type', 'application/json']
            ]
        })

        return res.json()
    }
    catch (e) {
        console.log(e)

        return {
            items: [],
            totalPages: 1,
        }
    }
}

export async function getFilm(id) {
    try {
        const res = await fetch(`${ROOT_URL}${INSTANCE_PATH_FILMS}/${id}`, {
            method: 'GET',
            headers: [
                ['X-API-KEY', TOKEN],
                ['Content-Type', 'application/json']
            ]
        })

        return await res.json()
    }
    catch (e) {
        console.log(e)

        return null
    }
}

export async function getSimilarsFilms(id) {
    try {
        const res = await fetch(`${ROOT_URL}${INSTANCE_PATH_FILMS}/${id}/similars`, {
            method: 'GET',
            headers: [
                ['X-API-KEY', TOKEN],
                ['Content-Type', 'application/json']
            ]
        })

        return res.json()
    }
    catch (e) {
        console.log(e)

        return {
            items: [],
        }
    }
}
