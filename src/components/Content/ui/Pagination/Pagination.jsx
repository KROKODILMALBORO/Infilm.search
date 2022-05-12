import React from 'react'
import classNames from 'classnames'

const Pagination = (props) => {
    const previousPage = () => {
        if (props.filters.page === 1) {

            return
        }

        const newFilters = {...props.filters, page: props.filters.page - 1}
        props.setFilters(newFilters)
        props.onSearch(newFilters)
    }

    const nextPage = () => {
        if (props.totalPages === props.filters.page) {

            return
        }

        if (props.persons) {
            if (props.filters.page === 2) { // Backend implementation moments :)

                return
            }
        }

        const newFilters = {...props.filters, page: props.filters.page + 1}
        props.setFilters(newFilters)
        props.onSearch(newFilters)
    }

    return (
        <div className='d-flex flex-row justify-content-center'>
            <nav className='pt-3' aria-label='Page navigation example'>
                <ul className='pagination pagination-lg shadow-lg'>
                    <li className={
                            classNames(
                                'page-item',
                                {'disabled': props.filters.page === 1},
                                {'disabled': !props.totalPages},
                            )
                        }
                    >
                        <button
                            className={
                                classNames(
                                    'page-link border-0 bg-dark bg-opacity-75 fw-bold',
                                    {'text-info': props.filters.page > 1},
                                    {'text-secondary': props.filters.page === 1},
                                    {'text-secondary': !props.totalPages},
                                )
                            }
                            onClick={previousPage}
                        >
                            &lt;
                        </button>
                    </li>
                    <li className='page-item'>
                        <span className='page-link border-0 bg-dark bg-opacity-75 fw-bold text-info'>
                            {props.filters.page}
                        </span>
                    </li>
                    <li className={
                            classNames(
                                'page-item',
                                {'disabled': props.filters.page === props.totalPages},
                                {'disabled': !props.totalPages},
                            )
                        }
                    >
                        <button
                            className={
                                classNames(
                                    'page-link border-0 bg-dark bg-opacity-75 fw-bold',
                                    {'text-info': !props.persons && props.filters.page < props.totalPages},
                                    {'text-secondary': props.filters.page === props.totalPages},
                                    {'text-secondary': props.persons && props.filters.page === 2},
                                    {'text-secondary': !props.totalPages},
                                )
                            }
                            onClick={nextPage}
                        >
                            &gt;
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
