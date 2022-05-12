import React, {useState, useEffect} from 'react'

import {usePersons} from '../../../instances/persons/hooks'

import {getDefaultFilters} from './functions'

import Search from './Search'
import Person from './Person'
import Spinner from '../ui/Spinner'
import Pagination from '../ui/Pagination'

const PersonsSearchPage = () => {
    const [filters, setFilters] = useState(getDefaultFilters)

    const {
        persons,
        totalPages,
        getPersons
    } = usePersons()

    useEffect(() => {
        onSearch(filters)
    }, [])

    const onSearch = (filters) => {
        if (filters.name === '') {

            return alert('Введите имя для поиска')
        }

        getPersons(filters)
    }

    return (
        <div className='container'>
            <Search
                filters={filters}
                setFilters={setFilters}
                onSearch={onSearch}
            />
            <div className='container ps-5'>
                {
                    persons ?
                    persons.length ?
                            persons.map((person) =>
                                <Person
                                    key={person.kinopoiskId}
                                    person={person}
                                />
                            ) :
                        <div className='d-flex flex-row justify-content-center'>
                            <h2 className='text-light text-opacity-25 m-3'>
                                По данному запросу ничего не найдено
                            </h2>
                        </div> :
                    <Spinner />
                }
            </div>
            {
                persons && !!persons.length &&
                <Pagination
                    filters={filters}
                    totalPages={totalPages}
                    persons={persons}
                    setFilters={setFilters}
                    onSearch={onSearch}
                />
            }
        </div>
    )
}

export default PersonsSearchPage
