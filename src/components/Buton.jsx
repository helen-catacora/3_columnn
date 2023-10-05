import React from 'react'
import {cars} from '../assets/carsAPI'

function Button(props) {
    

  return (
    <section className='boton'>
        <a href={cars[0].link} target='blank' className='orange'>Learn More</a>
    </section>
  )
}

export default Button
