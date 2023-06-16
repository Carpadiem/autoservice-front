import React from 'react'
import styles from './_4_HowWeWorkBlock.module.css'

import { Block } from '../../components/Block'


function _4_HowWeWorkBlock() {

    const s1 = require('./images/s1.png')
    const s2 = require('./images/s2.png')
    const s3 = require('./images/s3.png')
    const s4 = require('./images/s4.png')

    return (
        <>
            <Block
                blockHeight={680}
                
                containerDisplay='flex'
                containerFlexDir='column'
                containerJustifyContent='start'
                containerAlignItems='center'
                
                zIndex={4}
                bgColor='#fff'
                >
                
                <h1 className={styles.header}><span>Как мы</span> работаем?</h1>
                
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src={s1} alt="" className={styles.image} />
                        <div>
                            <p>
                                <span className={styles.bolderText}>Забронируйте</span><br />
                                <span className={styles.lighterText}>место</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={s2} alt="" className={styles.image} />
                        <div>
                            <p>
                                <span className={styles.bolderText}>Выберите</span><br />
                                <span className={styles.lighterText}>услугу</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={s3} alt="" className={styles.image} />
                        <div>
                            <p>
                                <span className={styles.bolderText}>Подтвердите</span><br />
                                <span className={styles.lighterText}>свой запрос</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={s4} alt="" className={styles.image} />
                        <div>
                            <p>
                                <span className={styles.bolderText}>Заберите</span><br />
                                <span className={styles.lighterText}>автомобиль</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Block>        
        </>
    )
}

export default _4_HowWeWorkBlock