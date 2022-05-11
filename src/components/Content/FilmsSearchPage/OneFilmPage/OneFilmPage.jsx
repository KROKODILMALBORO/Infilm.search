import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {useFilm} from '../../../../instances/films/hooks'
import {usePersonsByFilm} from '../../../../instances/persons/hooks'
import {useSimilarsFilms} from '../../../../instances/films/hooks'

import BasicInfo from './BasicInfo'
import DirectorsInfo from './DirectorsInfo'
import ActorsInfo from './ActorsInfo'
import SimilarsFilms from './SimilarsFilms'
import Spinner from '../../ui/Spinner'

const OneFilmPage = () => {
    const {film, getFilm} = useFilm()
    const {personsByFilm, getPersonsByFilm} = usePersonsByFilm()
    const {similarsFilms, getSimilarsFilms} = useSimilarsFilms()
    const params = useParams()

    useEffect(() => {
        getFilm(params.id)
        getPersonsByFilm(params.id)
        getSimilarsFilms(params.id)
    }, [params.id])

    if (!film) {

        return <Spinner />
    }

    return (
        <div className='container'>
            <BasicInfo film={film}/>
            <DirectorsInfo persons={personsByFilm}/>
            <ActorsInfo persons={personsByFilm}/>
            <SimilarsFilms similarsFilms={similarsFilms} />
        </div>
    )
}

export default OneFilmPage
