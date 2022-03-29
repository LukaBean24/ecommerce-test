import React from 'react'
import classes from '../styles/MainSlider.module.scss'
import Slider from 'react-slick'
import Slide from './Slide'
import {
  MdOutlineSubdirectoryArrowLeft,
  MdOutlineSubdirectoryArrowRight,
} from 'react-icons/md'
import photos from '../products/photos'

const MainSlider = () => {
  const PrevArrow = (props) => {
    const { className, onClick, style } = props
    return (
      <div
        className={`${classes.prevArrow} ${classes.arrow}`}
        onClick={onClick}
      >
        <MdOutlineSubdirectoryArrowLeft className={classes.icon} />
      </div>
    )
  }
  const NextArrow = (props) => {
    const { className, onClick, style } = props
    return (
      <div
        className={`${classes.nextArrow} ${classes.arrow}`}
        onClick={onClick}
      >
        <MdOutlineSubdirectoryArrowRight className={classes.icon} />
      </div>
    )
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }
  return (
    <div className={classes.container}>
      <h2>Single Item</h2>
      <Slider {...settings} className={classes.slider}>
        {photos.map((product) => {
          return <Slide data={product} />
        })}
      </Slider>
    </div>
  )
}
export default MainSlider
