import React, {useState, useEffect} from 'react'

import {useFilms} from '../../../instances/films/hooks'

import {getDefaultFilters} from './functions'

import Search from './Search'
import Film from './Film'
import Spinner from '../ui/Spinner'
import Pagination from '../ui/Pagination'

const FilmsSearchPage = () => {
    const [filters, setFilters] = useState(getDefaultFilters)

    const {
        films,
        totalPages,
        getFilms
    } = useFilms()

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
                    films.length ?
                        films.map((film) =>
                            <Film
                                key={film.kinopoiskId}
                                film={film}
                            />
                        ) :
                        <div className='d-flex flex-row justify-content-center'>
                            <h2 className='text-secondary border border-secondary rounded p-3 m-3'>
                                По данному запросу ничего не найдено
                            </h2>
                        </div> :
                <Spinner />
            }
            {
                films && !!films.length &&
                <Pagination
                    filters={filters}
                    totalPages={totalPages}
                    setFilters={setFilters}
                    onSearch={onSearch}
                />
            }
        </div>
    )
}

export default FilmsSearchPage
