import React, {useState} from 'react'

import FilmByPerson from './FilmByPerson'
import Spinner from '../../../ui/Spinner'

import scroll from '../../../ui/scroll/scroll.module.css'
import linkHover from '../../../ui/linkHover/linkHover.module.css'

const FilmsByPerson = (props) => {
    const [isShownContent, setIsShownContent] = useState(true)

    return (
        <div className='bg-dark rounded-bottom p-4 mx-5'>
            <div
                className={`d-flex flex-row justify-content-between rounded-end border-start border-secondary shadow w-100 p-1 pt-2 ps-3 ${linkHover.informativeBlock}`}
                onClick={() => setIsShownContent(!isShownContent)}
            >
                {
                    props.person.sex === 'MALE' ?
                    <h4>Принимал участие</h4> :
                    <h4>Принимала участие</h4>
                }
                <h5 className='text-light text-opacity-25 fw-bold pt-1 pe-3'>
                    {
                        isShownContent ?
                        <>&#x25B2;</> :
                        <>&#x25BC;</>
                    }
                </h5>
            </div>
            {
                isShownContent &&
                <div className={`d-flex flex-row justify-content-start bg-dark pt-1 mx-1 ${scroll.scroll}`}>
                    {
                        props.person.films ?
                        props.person.films.slice(0, 50).map((filmByPerson) =>
                            <FilmByPerson
                                key={filmByPerson.filmId}
                                filmByPerson={filmByPerson}
                            />
                        ) :
                        <Spinner />
                    }
                </div>
            }
        </div>
    )
}

export default FilmsByPerson
