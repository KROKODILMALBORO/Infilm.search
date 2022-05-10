import React from 'react'

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
            if (props.filters.page === 2) {

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
                    <li className='page-item'>
                        <button
                            className='page-link border-0 bg-dark bg-opacity-75 fw-bold text-info'
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
                    <li className='page-item'>
                        <button
                            className='page-link border-0 bg-dark bg-opacity-75 fw-bold text-info'
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
