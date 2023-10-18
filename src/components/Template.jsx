import React from 'react'
import Card from './Card'
import { cars } from '../assets/carsAPI'

function Template() {
  return (
    <main className='template'>
      {
        cars.map(car=>{
          return(
            <Card cars={car}>
            <Card cars={car}/>
            </Card>
          )
        })
      }
    </main>
    
    
  )
}

export default Template