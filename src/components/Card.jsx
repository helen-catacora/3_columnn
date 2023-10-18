import React from 'react'
import Cars from './Cars'
import Buton from './Buton'

function Card(props) {
  const cars=props.cars
  const theme=cars.theme;
  return (
    <article className={theme+' card'}>
      <Cars cars={cars}/>
      <Buton cars={cars}/>
    </article>
    
  )
}

export default Card