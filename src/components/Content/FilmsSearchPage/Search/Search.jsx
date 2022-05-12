import React from 'react'

const Search = (props) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            props.onSearch(props.filters)
        }
    }

    return (
        <div className='row bg-dark bg-opacity-75 rounded-bottom shadow g-2 px-5 p-4'>
            <div className='col-11'>
                <label className='display-5 mb-1'>
                    Поиск кино
                </label>
                <input
                    className='form-control form-control-lg bg-dark border border-secondary text-light shadow w-50'
                    placeholder='Введите название на русском'
                    value={props.filters.keyword}
                    onChange={(e) =>
                        props.setFilters((filters) => ({
                            ...filters,
                            keyword: e.target.value
                        }))
                    }
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className="w-100"></div>
            <div className='col-4 align-self-center bg-secondary bg-opacity-25 border-start border-secondary shadow'>
                <label className='col-form-label col-form-label-lg'>
                    Год выхода
                </label>
            </div>
            <div className='col-3'>
                <input
                    className='form-control form-control-lg bg-dark border border-secondary text-light shadow w-100'
                    type='number'
                    placeholder='от 1900'
                    value={props.filters.yearFrom}
                    onChange={(e) =>
                        props.setFilters((filters) => ({
                            ...filters,
                            yearFrom: e.target.value
                        }))
                    }
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className='col-3'>
                <input
                    className='form-control form-control-lg bg-dark border border-secondary text-light shadow w-100'
                    type='number'
                    placeholder='до 3000'
                    value={props.filters.yearTo}
                    onChange={(e) =>
                        props.setFilters((filters) => ({
                            ...filters,
                            yearTo: e.target.value
                        }))
                    }
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className="w-100"></div>
            <div className='col-4 align-self-center bg-secondary bg-opacity-25 border-start border-secondary shadow'>
                <label className='col-form-label col-form-label-lg'>
                    Рейтинг
                </label>
            </div>
            <div className='col-2'>
                <select
                    className='form-select bg-dark border border-secondary text-light shadow fs-5 p-2 ps-3'
                    type='number'
                    value={props.filters.ratingFrom}
                    onChange={(e) =>
                        props.setFilters((filters) => ({
                            ...filters,
                            ratingFrom: e.target.value
                        }))
                    }
                    onKeyPress={handleKeyPress}
                >
                    <option value='1' disabled>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>
            </div>
            <div className='col-2'>
                <select
                    className='form-select bg-dark border border-secondary text-light shadow fs-5 p-2 ps-3'
                    type='number'
                    value={props.filters.ratingTo}
                    onChange={(e) =>
                        props.setFilters((filters) => ({
                            ...filters,
                            ratingTo: e.target.value
                        }))
                    }
                    onKeyPress={handleKeyPress}
                >
                    <option value='10' disabled>10</option>
                    <option value='9'>9</option>
                    <option value='8'>8</option>
                    <option value='7'>7</option>
                    <option value='6'>6</option>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </select>
            </div>
            <div className="w-100"></div>
            <div className='col-4 align-self-center bg-secondary bg-opacity-25 border-start border-secondary shadow'>
                <label className='col-form-label col-form-label-lg'>
                    Тип произведения
                </label>
            </div>
            <div className='col-2'>
                <select
                    className='form-select bg-dark border border-secondary text-light shadow fs-5 p-2 ps-3'
                    value={props.filters.type}
                    onChange={(e) =>
                        props.setFilters((filters) => ({
                            ...filters,
                            type: e.target.value
                        }))
                    }
                    onKeyPress={handleKeyPress}
                >
                    <option value='ALL'>Все</option>
                    <option value='FILM'>Фильм</option>
                    <option value='TV_SHOW'>ТВ-ШОУ</option>
                </select>
            </div>
            <div className='row mt-3'>
                <div className='col-4 align-self-center'>
                    <label className='form-label'>
                        Сортировать по
                    </label>
                    <select
                        className='form-select bg-dark border border-secondary text-light shadow'
                        value={props.filters.order}
                        onChange={(e) =>
                            props.setFilters((filters) => ({
                                ...filters, order: e.target.value
                            }))
                        }
                        onKeyPress={handleKeyPress}
                    >
                        <option value='RATING'>Рейтинг</option>
                        <option value='YEAR'>Год выхода</option>
                    </select>
                </div>
                <div className='col align-self-end'>
                    <button
                        className='shadow btn btn-outline-info w-100 fs-4 ms-5'
                        onClick={() => props.onSearch(props.filters)}
                    >
                        Поиск
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search
