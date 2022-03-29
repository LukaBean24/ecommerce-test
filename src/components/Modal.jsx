import { Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/uiSlice'
import classes from '../styles/Modal.module.scss'
import CartCard from './CartCard'

const Modal = () => {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(uiActions.closeModal())
  }
  const cartItems = useSelector((state) => state.cart.cart)
  return (
    <div className={classes['modal-backdrop']} onClick={closeModal}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        {cartItems.length > 0 ? (
          cartItems.map((product) => {
            return <CartCard key={product.id} data={product} />
          })
        ) : (
          <Typography variant='h4' color='primary'>
            Cart is empty
          </Typography>
        )}
      </div>
    </div>
  )
}

export default Modal
