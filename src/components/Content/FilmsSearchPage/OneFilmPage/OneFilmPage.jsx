import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {useFilm} from '../../../../instances/films/hooks'
import {usePersonsByFilm} from '../../../../instances/persons/hooks'

import BasicInfo from './BasicInfo'
import DirectorsInfo from './DirectorsInfo'
import Spinner from '../../ui/Spinner'

const OneFilmPage = () => {
    const {film, getFilm} = useFilm()
    const {personsByFilm, getPersonsByFilm} = usePersonsByFilm()
    const params = useParams()

    useEffect(() => {
        getFilm(params.id)
        getPersonsByFilm(params.id)
    }, [params.id])

    if (!film) {

        return <Spinner />
    }

    return (
        <div className='container'>
            <BasicInfo film={film}/>
            <DirectorsInfo persons={personsByFilm}/>
        </div>
    )
}

export default OneFilmPage
