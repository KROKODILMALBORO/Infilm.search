import React from 'react'

const Search = (props) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            props.onSearch(props.filters)
        }
    }

    return (
        <div className='bg-dark bg-opacity-75 rounded shadow p-4 mb-3'>
            <div className=''>
                <div className=''>
                    <div className='row'>
                        <div className='col-3 align-self-center'>
                            <h3 className='display-6'>
                                Поиск персон
                            </h3>
                        </div>
                        <div className='col-6 align-self-center'>
                            <input
                                className='form-control form-control-lg bg-dark border border-secondary text-light shadow'
                                placeholder='Введите имя на русском'
                                value={props.filters.name}
                                onChange={(e) => props.setFilters((filters) => ({...filters, name: e.target.value}))}
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                        <div className='col-3 align-self-center'>
                            <button
                                className='btn btn-lg btn-outline-info shadow w-100'
                                onClick={() => props.onSearch(props.filters)}
                            >
                                Поиск
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
