import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../slices/cartSlice';
import './ShowCatProducts.css'


function SingleProduct(props) {


  const dispatch = useDispatch();


  return (
    <div className='singleProduct'>
        <img src={props.imgUrl} alt={props.pTitle} />
        <h3>{props.pTitle}</h3>
        <p>{props.pCategory}</p>
        <p>$ {props.pPrice}</p>

        <div className='btn'>
          <button onClick={(e)=>{
            e.preventDefault()
            dispatch(addToCart(props.item))
            console.log(props.item.title);
          }}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default SingleProduct                    