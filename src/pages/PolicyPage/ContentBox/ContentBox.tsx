import React from 'react'
import styles from './ContentBox.module.css'


interface ContentBoxProps {
  head: string
  textElements: string[]
}
function ContentBox({ head, textElements }: ContentBoxProps) {
  return (
    <>
      <div className={styles.contentBox}>
        <h2>{ head }</h2>

        { textElements.map((el: string) => {
          return <p>{el}</p>
        }) }
      </div>
    </>
  )
}

export default ContentBox