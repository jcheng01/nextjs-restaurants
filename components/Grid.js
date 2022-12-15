// import { data } from 'autoprefixer'
import React from 'react'
import Card from './Card'
import styles from "./Grid.module.scss"

export const Grid = ({ data }) => {
  return <div className={styles.grid}>
        {data.map((restaurant, index) => {
                return <Card key={index} data={restaurant.node}/>
            })}
    </div>
  
}
