import React from 'react'
import styles from './_6_WhyWeBlock.module.css'

import { Block } from '../../components/Block'


function _6_WhyWeBlock() {
    
    const icon_estimates = require('./icons/estimates.png')
    const icon_trusted = require('./icons/trusted.png')
    const icon_guarantee = require('./icons/guarantee.png')
    
    return (
        <>
            <Block
                blockHeight={730}
                zIndex={6}

                containerDisplay='flex'
                containerFlexDir='column'
                containerAlignItems='center'
                containerJustifyContent='flex-start'
            >
                <div className={styles.header}><span>Почему</span> мы?</div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.icon_circle}><img src={icon_estimates} alt="" className={styles.icon} /></div>
                        <h1 className={styles.title}>Оценка</h1>
                        <p className={styles.text}>Мы - сервис, который честно оценивает проблемы с автомобилем и предоставляет вам точную помощь, необходимую для того, чтобы сделать ваш автомобиль безопасным!</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon_circle}><img src={icon_trusted} alt="" className={styles.icon} /></div>
                        <h1 className={styles.title}>Доверие</h1>
                        <p className={styles.text}>Многие довольные клиенты возвращаются в наш сертифицированный сервис, чтобы пройти профилактическое обслуживание или получить помощь наших квалифицированных автомехаников</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon_circle}><img src={icon_guarantee} alt="" className={styles.icon} /></div>
                        <h1 className={styles.title}>Гарантия</h1>
                        <p className={styles.text}>Мы гарантируем качество выполненных работ. Именно поэтому мы готовы бесплатно решить любую возникшую проблему.</p>
                    </div>
                </div>
            </Block>
        </>
    )
}

export default _6_WhyWeBlock