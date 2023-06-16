import React, { ReactComponentElement, ReactNode, ReactPropTypes, useEffect, useState } from 'react'
import styles from './MainPage.module.css'

import { _1_FirstBlock } from '../../blocks/_1_FirstBlock'
import { _2_ServicesBlock } from '../../blocks/_2_ServicesBlock'
import { _3_MoreServicesBlock } from '../../blocks/_3_MoreServicesBlock'
import { _4_HowWeWorkBlock } from '../../blocks/_4_HowWeWorkBlock'
import { _5_SpecialOfferBlock } from '../../blocks/_5_SpecialOfferBlock'
import { _6_WhyWeBlock } from '../../blocks/_6_WhyWeBlock'
import { _7_AboutBlock } from '../../blocks/_7_AboutBlock'
import { _8_ReviewsBlock } from '../../blocks/_8_ReviewsBlock'
import { _9_CallBlock } from '../../blocks/_9_CallBlock'
import { _10_FooterBlock } from '../../blocks/_10_FooterBlock'
import { BookAPlaceModal } from '../../components/BookAPlaceModal'
import { SomethingWrongModal } from '../../components/SomethingWrongModal'


function MainPage() {
    
    // const [modalIsOpen, setModalIsOpen] = useState(false)
    // const [swModalIsOpen, setSwModalIsOpen] = useState(false)

    // return (
    //     <>
            // {/* <div className={styles.modalArea} style={{ pointerEvents: modalIsOpen == true ? 'auto' : 'none', opacity: Number(modalIsOpen) }}>
            //     <div className={styles.modalFilter} />
            //     <div className={modalIsOpen == true ? styles.animModalOpen : styles.animModalClose}>
            //         <BookAPlaceModal onClickClose={() => setModalIsOpen(false)}/>
            //     </div>
            // </div> */}

    //         <div className={styles.modalArea} style={{pointerEvents: swModalIsOpen == true ? 'auto' : 'none', opacity: Number(swModalIsOpen)}}>
    //             <div className={styles.modalFilter} />
    //             <div className={swModalIsOpen == true ? styles.animModalOpen : styles.animModalClose}>
    //                 <SomethingWrongModal onClickClose={() => setSwModalIsOpen(false)}/>
    //             </div>
    //         </div>

    //         {/* <_1_FirstBlock onClickBookAPlace={() => setModalIsOpen(true)} /> */}
    //         <_1_FirstBlock onClickBookAPlace={() => setSwModalIsOpen(true)} />
    //         <_2_ServicesBlock />
    //         {/* <_3_MoreServicesBlock onClickBookAPlaceButton={() => setModalIsOpen(true)}/> */}
    //         <_3_MoreServicesBlock onClickBookAPlaceButton={() => setSwModalIsOpen(true)}/>
    //         <_4_HowWeWorkBlock />
    //         <_5_SpecialOfferBlock />
    //         <_6_WhyWeBlock />
    //         <_7_AboutBlock />
    //         <_8_ReviewsBlock />
    //         {/* <_9_CallBlock onClickBookAPlaceButton={() => setModalIsOpen(true)}/> */}
    //         <_9_CallBlock onClickBookAPlaceButton={() => setSwModalIsOpen(true)}/>
    //         <_10_FooterBlock />
    //     </>
    // )

    const scrollContacts = () => {
        document.getElementById('contactsBlock')?.scrollIntoView({behavior: 'smooth'})
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (window.localStorage.getItem('user') != null) {
            setIsAuth(true)
        }
    }, [])

    return (
        <>
            <div className={styles.modalArea} style={{ pointerEvents: modalIsOpen == true ? 'auto' : 'none', opacity: Number(modalIsOpen) }}>
                <div className={styles.modalFilter} />
                <div className={modalIsOpen == true ? styles.animModalOpen : styles.animModalClose}>
                    {
                        isAuth == true ?
                        <BookAPlaceModal onClickClose={() => setModalIsOpen(false)}/>
                        :
                        <SomethingWrongModal onClickClose={() => setModalIsOpen(false)}/>
                    }
                </div>
            </div>
            <_1_FirstBlock onClickBookAPlace={() => setModalIsOpen(true) } />
            <_2_ServicesBlock />
            <_3_MoreServicesBlock onClickBookAPlaceButton={() => setModalIsOpen(true)}/>
            <_4_HowWeWorkBlock />
            <_5_SpecialOfferBlock />
            <_6_WhyWeBlock />
            <_7_AboutBlock />
            <_8_ReviewsBlock />
            <_9_CallBlock />
            <_10_FooterBlock />
        </>
    )
}


export default MainPage