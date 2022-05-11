import queryString from 'query-string'

import {ROOT_URL} from '../constans'
import {TOKEN} from '../token'
import {INSTANCE_PATH_PERSONS} from './constans'
import {INSTANCE_PATH_STAFF} from './constans'

export async function getPersons(filters) {
    try {
        const stringified = queryString.stringify(filters)

        const res = await fetch(`${ROOT_URL}${INSTANCE_PATH_PERSONS}?${stringified}`, {
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

export async function getPersonsByFilm(id) {
    try {
        const res = await fetch(`${ROOT_URL}${INSTANCE_PATH_STAFF}?filmId=${id}`, {
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

        return []
    }
}

export async function getPerson(id) {
    try {
        const res = await fetch(`${ROOT_URL}${INSTANCE_PATH_STAFF}/${id}`, {
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
