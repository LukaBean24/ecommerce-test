import React from 'react'
import { useSelector } from 'react-redux'
import classes from '../styles/Container.module.scss'
import products from '../products/products'
import Card from './Card'

const Container = () => {
  const filter = useSelector((state) => state.ui.filter)
  return (
    <div className={`${classes.container}`}>
      {filter === null &&
        products.map((product) => {
          return <Card key={product.id} data={product} />
        })}
      {filter !== null &&
        products
          .filter((product) => {
            return product.category === filter
          })
          .map((product) => {
            return <Card key={product.id} data={product} />
          })}
      }
    </div>
  )
}

export default Container
