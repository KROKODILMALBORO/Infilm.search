import React, {useState} from 'react'

import Actor from './Actor'
import Spinner from '../../../ui/Spinner'

import scroll from '../../../ui/scroll/scroll.module.css'
import linkHover from '../../../ui/linkHover/linkHover.module.css'

const ActorsInfo = (props) => {
    const [isShownContent, setIsShownContent] = useState(false)

    const getArrOneProfession = (key) => {
        const arrOneProfession = (props.persons || []).filter(function(person) {
            return person.professionKey == key
        })

        return arrOneProfession
    }

    return (
        <div className='bg-dark pt-0 p-4 mx-5'>
            <div
                className={`d-flex flex-row justify-content-between rounded-end border-start border-secondary shadow w-100 p-1 pt-2 ps-3 ${linkHover.informativeBlock}`}
                onClick={() => setIsShownContent(!isShownContent)}
                type='button'
            >
                <h4>
                    Актерский состав
                </h4>
                <h5
                    className='text-light text-opacity-25 fw-bold pt-1 pe-3'
                    type='button'
                >
                    {
                        isShownContent ?
                        <>&#x25B2;</> :
                        <>&#x25BC;</>
                    }
                </h5>
            </div>
            {
                isShownContent ?
                <div className={`d-flex flex-row justify-content-start bg-dark pt-1 mx-1 ${scroll.scroll}`}>
                    {
                        props.persons == null ?
                        <Spinner /> :
                        getArrOneProfession('ACTOR').length == 0 ?
                            <h5 className='text-light text-opacity-25 p-2 pb-0'>
                                Актеров по произведению не найдено..
                            </h5> :
                            getArrOneProfession('ACTOR').map((person) =>
                                <Actor
                                    key={person.staffId}
                                    person={person}
                                />
                        )
                    }
                </div> :
                <></>
            }
        </div>
    )
}

export default ActorsInfo
