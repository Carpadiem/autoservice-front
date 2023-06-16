import React from 'react'
import styles from './_9_CallBlock.module.css'
import { Block } from '../../components/Block'

function _9_CallBlock() {
    
    const car = require('./images/car.png')
    
    return (
        <>
            <div id='contactsBlock'/>
            <Block
            blockHeight={520}
            zIndex={9}
            bgColor='#fff'
            containerDisplay='flex'
            containerJustifyContent='center'
            containerAlignItems='center'
            containerGap={90}>
                <div className={styles.boxCar}><img src={car} alt="" /></div>
                <div className={styles.boxOffer}>
                    <h1>
                        <span style={{ fontWeight: 400, color: '#333' }}>Забронируйте сегодня место</span><br />
                        <span style={{ fontWeight: 700, color: '#F95F1F' }}>Позвоните: +7 (965) 883-77-77</span>
                    </h1>
                    <p>Наш  технический специалист подготовит для вас индивидуальное предложение</p>
                </div>
            </Block>
        </>
    )
}

export default _9_CallBlock