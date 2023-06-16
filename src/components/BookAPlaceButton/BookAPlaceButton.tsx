import React from 'react'
import styles from './BookAPlaceButton.module.css'

interface BookAPlaceButtonProps {
    onClick: () => void
}

function BookAPlaceButton({ onClick }: BookAPlaceButtonProps) {
    return (
        <>
            <button className={styles.btn} onClick={() => onClick()}>ЗАБРОНИРОВАТЬ МЕСТО</button>
        </>
    )
}

export default BookAPlaceButton