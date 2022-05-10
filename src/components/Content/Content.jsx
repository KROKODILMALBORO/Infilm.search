import React from 'react'
import {Routes, Route} from 'react-router-dom'

import MainPage from './MainPage'
import FilmsSearchPage from './FilmsSearchPage'
import PersonsSearchPage from './PersonsSearchPage'

const Content = () => {
    return (
        <div className='pt-5'>
            <Routes>
                <Route
                    path='/'
                    element={<MainPage />}
                />
                <Route
                    path='/films_search'
                    element={<FilmsSearchPage />}
                />
                <Route 
                    path='/persons_search'
                    element={<PersonsSearchPage />}
                />
            </Routes>
        </div>
    )
}

export default Content
