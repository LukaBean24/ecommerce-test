import React from 'react'
import classes from '../styles/Card.module.scss'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdExpandMore } from 'react-icons/md'
import { Typography } from '@mui/material'
import { cartActions } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
import { uiActions } from '../store/uiSlice'

const Card = ({ data }) => {
  const dispatch = useDispatch()
  const addItem = () => {
    dispatch(cartActions.addToCart(data))
  }
  return (
    <div className={classes.card}>
      <img src={data.img} alt='Product' />
      <div className={classes.info}>
        <span className={classes.title}>
          <Typography variant='body2' color='primary'>
            {data.title}
          </Typography>
        </span>
        <span className={classes.icons}>
          <AiOutlinePlusCircle className={classes.icon} onClick={addItem} />
          <MdExpandMore
            className={classes.icon}
            onClick={() => {
              dispatch(uiActions.openProductModal(data))
            }}
          />
        </span>
      </div>
    </div>
  )
}

export default Card
