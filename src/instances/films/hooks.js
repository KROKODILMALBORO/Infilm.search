import * as fetches from './fetches'
import {useState} from 'react'

export function useFilms() {
    const [films, setFilms] = useState(null)
    const [totalPages, setTotalPages] = useState(null)

    const getFilms = async (filters) => {
        setFilms(null)
        const result = await fetches.getFilms(filters)

        setFilms(result.items)
        setTotalPages(result.totalPages)
    }

    return {
        films,
        getFilms,
        totalPages,
    }
}

export function useFilm() {
    const [film, setFilm] = useState(null)

    const getFilm = async (id) => {
        const film = await fetches.getFilm(id)

        setFilm(film)
    }

    return {
        film,
        getFilm,
    }
}

export function useSimilarsFilms() {
    const [similarsFilms, setSimilarsFilms] = useState(null)

    const getSimilarsFilms = async (id) => {
        setSimilarsFilms(null)
        const result = await fetches.getSimilarsFilms(id)

        setSimilarsFilms(result.items)
    }

    return {
        similarsFilms,
        getSimilarsFilms,
    }
}
