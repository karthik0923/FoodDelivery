import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './FoodDisplay.css'

const FoodDisplay = () => {
    const {food_list} = useContext(StoreContext)
  return (
    <div>
      
    </div>
  )
}

export default FoodDisplay
