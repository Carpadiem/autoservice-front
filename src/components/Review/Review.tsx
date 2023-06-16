import React from 'react'
import styles from './Review.module.css'


interface ReviewProps {
    text: string
    author: string
    date: string
}

function Review({text, author, date}: ReviewProps) {
    
    const quote = require('./icons/quote.png')
    
    return (
        <>
            <div className={styles.review}>
                <div className={styles.icon}><img src={quote} alt="" /></div>
                <div className={styles.textBlock}>
                    <p className={styles.text}>{text}</p>
                    <div className={styles.authorBlock}>
                        <h2 className={styles.from}>{author}</h2>
                        <h2 className={styles.date}>{date}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review