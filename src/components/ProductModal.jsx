import { Typography } from '@mui/material'
import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/uiSlice'
import classes from '../styles/ProductModal.module.scss'

const ProductModal = () => {
  const data = useSelector((state) => state.ui.productModalData)
  const dispatch = useDispatch()
  return (
    <div
      className={classes['modal-backdrop']}
      onClick={() => {
        dispatch(uiActions.closeProductModal())
      }}
    >
      <div
        className={classes.modal}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <AiOutlineCloseCircle
          className={classes.icon}
          onClick={() => {
            dispatch(uiActions.closeProductModal())
          }}
        />
        <div className={classes['img-container']}>
          <img src={data.img} alt={data.title} />
        </div>
        <div className={classes.info}>
          <Typography variant='body2' color='secondary'>
            Title: {data.title}
          </Typography>
          <Typography variant='body1' color='secondary'>
            Brand: {data.brand}
          </Typography>
          <Typography variant='body1' color='secondary'>
            Ram: {data.ram}GB
          </Typography>
          <Typography variant='body1' color='secondary'>
            Storage: {data.storage}GB
          </Typography>
          <Typography variant='body1' color='secondary'>
            Color: {data.color}
          </Typography>
          <Typography variant='body1' color='secondary'>
            Screen: {data.screen} Inches
          </Typography>
          <Typography variant='body1' color='secondary'>
            Price: {data.price}$
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
