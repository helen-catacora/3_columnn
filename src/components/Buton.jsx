import React from 'react'
import {cars} from '../assets/carsAPI'

function Buton(props) {
  const cars=props.cars
  return (
    <section className='boton'>
      <a href={cars.link} target='blank' className={cars.theme}>Learn More</a>
    </section>

  )
}

export default Buton
