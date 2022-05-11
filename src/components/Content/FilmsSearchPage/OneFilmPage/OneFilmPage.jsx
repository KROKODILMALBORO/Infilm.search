import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {useFilm} from '../../../../instances/films/hooks'

import BasicInfo from './BasicInfo'
import Spinner from '../../ui/Spinner'

const OneFilmPage = () => {
    const {film, getFilm} = useFilm()
    const params = useParams()

    useEffect(() => {
        getFilm(params.id)
    }, [params.id])

    if (!film) {

        return <Spinner />
    }

    return (
        <div className='container'>
            <BasicInfo film={film}/>
        </div>
    )
}

export default OneFilmPage
