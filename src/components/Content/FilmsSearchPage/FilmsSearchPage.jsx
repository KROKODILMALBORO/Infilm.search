import React, {useState, useEffect} from 'react'

import {useFilms} from '../../../instances/films/hooks'

import Search from './Search'
import Film from './Film'
import Spinner from '../ui/Spinner'

const FilmsSearchPage = () => {
    const [filters, setFilters] = useState({
        keyword: '',
        yearFrom: 2020,
        yearTo: 2021,
        ratingFrom: 6,
        ratingTo: 9,
        type: 'ALL',
        order: 'RATING',
        page: 1,
    })

    const {films, getFilms} = useFilms()

    const onSearch = (filters) => {
        getFilms(filters)
    }

    useEffect(() => {
        onSearch(filters)
    }, [])

    return (
        <div className='container'>
            <Search
                filters={filters}
                setFilters={setFilters}
                onSearch={onSearch}
            />
            {
                films ?
                films.map((film) =>
                    <Film
                        key={film.kinopoiskId}
                        film={film}
                    />
                ) :
                <Spinner />
            }
        </div>
    )
}

export default FilmsSearchPage
