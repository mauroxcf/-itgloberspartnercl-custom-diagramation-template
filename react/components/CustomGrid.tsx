import React, { ReactNode } from 'react'
import { customGridSchema } from '../schemas/custom-grid-schemas'
import CustomGridBigItem from './CustomGridBigItem'
import CustomGridSmallItem from './CustomGridSmallItem'

import styles from './styles.css'

type Props = {
  gridType: number
  children: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode]
}

const CustomGrid = ({gridType = 1, children}:Props) => {
  const gridTypeClass:string = `grid__${gridType}`
  console.log(gridType)
  return (
    <div className={`grid ${styles[gridTypeClass]}`}>
      <CustomGridBigItem element={children[0]} />
      <CustomGridSmallItem elementOne={children[1]} elementTwo={children[2]} />
      <CustomGridSmallItem elementOne={children[3]} elementTwo={children[4]} />
    </div>
  )
}

CustomGrid.schema = customGridSchema


export default CustomGrid
