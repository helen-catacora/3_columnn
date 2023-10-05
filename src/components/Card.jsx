import React from 'react'
import Cars from './Cars'
import Buton from './Buton'
import { cars } from '../assets/carsAPI'

function Card() {
  return (
    <article className='orange card'>
        <Cars cars={cars}/>
        <Buton boton={cars}/>
    </article>
  )
}

export default Card