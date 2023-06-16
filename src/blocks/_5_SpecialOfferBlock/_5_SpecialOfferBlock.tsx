import React from 'react'
import styles from './_5_SpecialOfferBlock.module.css'
import { Link } from 'react-router-dom'
import { Block } from '../../components/Block'


function _5_SpecialOfferBlock() {
    
    const cutters = require('./icons/cutters.png')
    
    return (
        <>
            <Block
                blockHeight={390}
                zIndex={5}

                containerDisplay='flex'
                containerJustifyContent='space-between'
                containerAlignItems='center'

                bgColor='#F95F1F'
                >
                <div className={styles.dashQuad}>
                    <div className={styles.box}>
                        <p className={styles.topText}>Скидка</p>
                        <h1 className={styles.value}>25%</h1>
                        <p className={styles.bottomText}>на все услуги</p>
                        <img className={styles.cutters} src={cutters} alt="" />
                    </div>
                </div>
                <div className={styles.boxOffer}>
                    <div>
                        <h1 className={styles.tinytext}>Специальное предложение</h1>
                        <h1 className={styles.boldtext}>для первых клиентов</h1>
                        <p className={styles.desc}>Всем первым клиентам мы дарим скидку 25% на любые наши услуги</p>
                    </div>
                    <Link to='/discount' style={{textDecoration: 'none'}}>
                        <p className={styles.moreinfo}>Подробнее</p>
                    </Link>
                </div>
            </Block>
        </>
    )
}

export default _5_SpecialOfferBlock