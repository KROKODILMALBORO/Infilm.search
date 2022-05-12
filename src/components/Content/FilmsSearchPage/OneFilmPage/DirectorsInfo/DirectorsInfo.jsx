import React, {useState} from 'react'

import Director from './Director'
import Spinner from '../../../ui/Spinner'

import {getPersonsByProfession} from '../functions'

import scroll from '../../../ui/scroll/scroll.module.css'
import linkHover from '../../../ui/linkHover/linkHover.module.css'

const DirectorsInfo = (props) => {
    const [isShownContent, setIsShownContent] = useState(false)
    const directors = getPersonsByProfession('DIRECTOR', props.persons)

    return (
        <div className='bg-dark pt-4 px-4 p-4 mx-5'>
            <div
                className={`d-flex flex-row justify-content-between rounded-end border-start border-secondary shadow w-100 p-1 pt-2 ps-3 ${linkHover.informativeBlock}`}
                onClick={() => setIsShownContent(!isShownContent)}
            >
                <h4>
                    Режиссеры
                </h4>
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
                <div className={`d-flex flex-row justify-content-start bg-dark py-1 pb-2 mx-1 ${scroll.scroll}`}>
                    {
                        props.persons ?
                            directors.length === 0 ?
                                <h5 className='text-light text-opacity-25 p-2 pb-0'>
                                    Режиссеров по произведению не найдено
                                </h5> :
                                directors.map((person) =>
                                    <Director
                                        key={person.staffId}
                                        person={person}
                                    />
                                ) :
                        <Spinner />
                    }
                </div>
            }
        </div>
    )
}

export default DirectorsInfo
