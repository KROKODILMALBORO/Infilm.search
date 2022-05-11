import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {usePerson} from '../../../../instances/persons/hooks'

import BasicInfo from './BasicInfo'
import FilmsByPerson from './FilmsByPerson'
import Spinner from '../../ui/Spinner'

const OnePersonPage = () => {
    const {person, getPerson} = usePerson()
    const params = useParams()

    useEffect(() => {
        getPerson(params.id)
    }, [params.id])

    if (!person) {

        return <Spinner />
    }

    return (
        <div className='container'>
            <BasicInfo person={person}/>
            <FilmsByPerson person={person}/>
        </div>
    )
}

export default OnePersonPage
