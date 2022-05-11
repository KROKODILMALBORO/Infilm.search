import * as fetches from './fetches'
import {useState} from 'react'

export function usePersons() {
    const [persons, setPersons] = useState(null)
    const [totalPages, setTotalPages] = useState(null)

    const getPersons = async (filters) => {
        setPersons(null)
        const result = await fetches.getPersons(filters)

        setPersons(result.items)
        setTotalPages(Math.ceil(result.total / 50))
    }

    return {
        persons,
        getPersons,
        totalPages,
    }
}

export function usePerson() {
    const [person, setPerson] = useState(null)

    const getPerson = async (id) => {
        const person = await fetches.getPerson(id)

        setPerson(person)
    }

    return {
        person,
        getPerson,
    }
}

export function usePersonsByFilm() {
    const [personsByFilm, setPersonsByFilm] = useState(null)

    const getPersonsByFilm = async (id) => {
        setPersonsByFilm(null)
        const result = await fetches.getPersonsByFilm(id)

        setPersonsByFilm(result)
    }

    return {
        personsByFilm,
        getPersonsByFilm,
    }
}
