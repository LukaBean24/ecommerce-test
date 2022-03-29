import classes from '../styles/CartCard.module.scss'
import React from 'react'
import { Typography } from '@mui/material'
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai'
import { cartActions } from '../store/cartSlice'
import { useDispatch } from 'react-redux'

const CartCard = ({ data }) => {
  const dispatch = useDispatch()
  const addItem = () => {
    dispatch(cartActions.addToCart(data))
  }
  const removeItem = () => {
    dispatch(cartActions.removeFromCart(data))
  }
  return (
    <div className={classes.cartCard}>
      <div className={classes.photo}>
        <img src={data.img} alt={data.title} />
      </div>
      <div className={classes.title}>
        <Typography variant='body1' color='secondary'>
          {data.title}
        </Typography>
      </div>
      <div className={classes.price}>
        <Typography variant='body1' color='secondary'>
          {data.price * data.quantity}$
        </Typography>
        <Typography variant='body1' color='secondary'>
          {data.quantity}X
        </Typography>
      </div>
      <div className={classes.icons}>
        <AiOutlinePlusSquare className={classes.icon} onClick={addItem} />
        <AiOutlineMinusSquare className={classes.icon} onClick={removeItem} />
      </div>
    </div>
  )
}

export default CartCard
