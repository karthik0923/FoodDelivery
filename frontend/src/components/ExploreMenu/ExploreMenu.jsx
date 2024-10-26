import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and cullinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delecious meal at a time.</p>
        <dev className="explore-menu-list">
            {menu_list.map((item,index)=>{
              return(
                <div className="explore-menu-list-ietm">
                  <img src={item.menu_image} alt="" />
                  <p>{item.menu_name}</p>
                  <p>Book NOw</p>
                </div>
              )
            })}
        </dev>
    </div>
  )
}
import './ExploreMenu.css'

export default ExploreMenu
