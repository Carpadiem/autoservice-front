import React from 'react'
import styles from './_1_FirstBlock.module.css'

import { Header } from '../../components/Header'
import { Block } from '../../components/Block'
import { BookAPlaceButton } from '../../components/BookAPlaceButton'


interface _1_FirstBlockProps {
    onClickBookAPlace: () => void
}

function _1_FirstBlock({ onClickBookAPlace }: _1_FirstBlockProps) {
    const bg = require('../../pages/MainPage/images/bg_main.png')

    return (
        <>
            <Block
                blockHeight={810}
                bgImage={bg}
                bgColor='#f5f5f5'
                zIndex={1}
                >
                <Header />
                <div className={styles.content}>
                    <div className={styles.boxOffer}>
                        <h1>Ищите сервис для</h1>
                        <h1>ремонта автомобиля?</h1>
                        <BookAPlaceButton onClick={() => onClickBookAPlace()}/>
                    </div>
                </div>
            </Block>
        </>
    )
}

export default _1_FirstBlock