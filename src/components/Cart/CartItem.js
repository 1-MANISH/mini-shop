import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import './Cart.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';
import { removeFromCart } from '../../slices/cartSlice';
import {cancelFromCart} from '../../slices/cartSlice'

function CartItem(props) {

    const dispatch = useDispatch()


  return (
    <div className='cartItem'>
        <div className="leftImage">
            <img src={props.url} alt={props.title} />
        </div>
        <div className="middleInfo">
            <h3>{props.title}</h3>
            <h4>{props.category}</h4>
            <p>$ {props.price}</p>
        </div>
        <div className='showQuantity'>
            <button onClick={(e)=>{
                e.preventDefault()
                dispatch(addToCart(props.item))
            }}>+</button>
            <div>
                {props.quantity}
            </div>
            <button onClick={(e)=>{
                e.preventDefault()
                dispatch(removeFromCart(props.item))
            }}>-</button>
        </div>
        <div className='removeFromCart'>
            <button onClick={(e)=>{
                e.preventDefault()
                dispatch(cancelFromCart(props.item))
            }}>
            <ClearIcon />
            </button>
        </div>
    </div>
  )
}

export default CartItem