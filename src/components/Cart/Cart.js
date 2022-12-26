import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'
import CartItem from './CartItem'

function Cart() {


  const cartItems = useSelector(state=>state.cartReducer.cartItems)


  return (
    <div className='cartContainer'>
      <h4>MY CART</h4>
      {
        cartItems.map((item,index)=>{
          return (
          <CartItem key={index} item={item} url={item.url} title={item.title} price={item.price} quantity={item.quantity} category={item.category}/>
          )
        })
      }

    </div>
  )
}

export default Cart