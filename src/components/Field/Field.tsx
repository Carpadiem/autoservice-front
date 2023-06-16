import React from 'react'
import styles from './Field.module.css'


interface FieldProps {
    title: string
    placeholder: string
    width?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    tcolor?: string
    value?: string
}

function Field({ title, placeholder, width, onChange=()=>{}, tcolor, value }: FieldProps) {
    return (
        <>
            <div className={styles.field} style={{width: width}}>
                <input
                type="text"
                className={styles.field_input}
                placeholder={placeholder}
                onChange={(event) => { onChange(event) }}
                value={value}

                style={{color: tcolor}}
                />
                <div className={styles.title}>
                    <h2>{title}</h2>
                </div>
            </div>
        </>
    )
}

export default Field