import React from 'react'
import classes from '../styles/Slide.module.scss'

const Slide = ({ data }) => {
  return (
    <div className={classes.slide}>
      <img src={data} alt='Poster' />
    </div>
  )
}

export default Slide
