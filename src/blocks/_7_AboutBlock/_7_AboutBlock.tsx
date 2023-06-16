import React from 'react'
import styles from './_7_AboutBlock.module.css'

import { Block } from '../../components/Block'


function _7_AboutBlock() {
    
    const p1 = require('./images/p1.png')
    const p2 = require('./images/p2.png')
    const p3 = require('./images/p3.png')
    const p4 = require('./images/p4.png')
    
    return (
        <>
            <div id='aboutBlock'/>
            <Block
            blockHeight={700}
            zIndex={7}

            containerDisplay='flex'
            containerFlexDir='column'
            containerJustifyContent='start'
            containerAlignItems='center'

            bgColor='#1B242B'
            >
                <h1 className={styles.header}>статистика в цифрах <span>о которой вы должны знать</span></h1>
                <div className={styles.boxNumberlyStat}>
                    <div className={styles.numberlyStat}>
                        <div className={styles.number}>7</div>
                        <div className={styles.vSeparator}/>
                        <div className={styles.text}><strong>Лет</strong><br /> опыта</div>
                    </div>
                    <div className={styles.numberlyStat}>
                        <div className={styles.number}>24</div>
                        <div className={styles.vSeparator}/>
                        <div className={styles.text}>Специалистов и<br /> <strong>рабочих</strong></div>
                    </div>
                    <div className={styles.numberlyStat}>
                        <div className={styles.number}>&#62;2000</div>
                        <div className={styles.vSeparator}/>
                        <div className={styles.text}><strong>Довольных</strong><br /> клиентов</div>
                    </div>
                </div>
                <div className={styles.boxImages}>
                    <div className={styles.image}><img src={p1} alt="" /></div>
                    <div className={styles.image}><img src={p2} alt="" /></div>
                    <div className={styles.image}><img src={p3} alt="" /></div>
                    <div className={styles.image}><img src={p4} alt="" /></div>
                </div>
            </Block>
        </>
    )
}

export default _7_AboutBlock