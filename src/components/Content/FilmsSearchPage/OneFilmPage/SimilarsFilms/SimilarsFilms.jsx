import React, {useState} from 'react'

import SimilarFilm from './SimilarFilm'
import Spinner from '../../../ui/Spinner'

import scroll from '../../../ui/scroll/scroll.module.css'
import linkHover from '../../../ui/linkHover/linkHover.module.css'

const SimilarsFilms = (props) => {
    const [isShownContent, setIsShownContent] = useState(true)

    return (
        <div className='bg-dark pt-0 p-4 mx-5'>
            <div
                className={`d-flex flex-row justify-content-between rounded-end border-start border-secondary shadow w-100 p-1 pt-2 ps-3 ${linkHover.informativeBlock}`}
                onClick={() => setIsShownContent(!isShownContent)}
                type='button'
            >
                <h4>
                    Похожие
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
                        props.similarsFilms == null ?
                        <Spinner /> :
                        props.similarsFilms.length == 0 ?
                            <h5 className='text-light text-opacity-25 pb-0 p-2'>
                                Похожих произведений не найдено..
                            </h5> :
                            props.similarsFilms.map((similarFilm) =>
                                <SimilarFilm
                                    key={similarFilm.staffId}
                                    similarFilm={similarFilm}
                                />
                        )
                    }
                </div> :
                <></>
            }
        </div>
    )
}

export default SimilarsFilms
