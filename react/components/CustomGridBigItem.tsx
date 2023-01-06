import React, { ReactNode } from 'react'
import styles from './styles.css'

type Props = {
  element: ReactNode
}


const CustomGridBigItem = ({element}: Props) => {
  return (
    <div className={styles["grid__itemBig"]}>{element}</div>
  )
}

export default CustomGridBigItem