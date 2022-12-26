import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../slices/ProductSlice';
import './ShowCatProducts.css'
import SingleProduct from './SingleProduct';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function ShowCatProduct(props) {

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


    const  [ category,setCategory] = useState('electronics')

    const dispatch = useDispatch();

    useEffect(()=>{

        setCategory(props.categoryName)
            
        dispatch(fetchData(props.categoryName))

    },[category,props.categoryName])


    const status = useSelector(state=>state.productReducer.status)

    const products = useSelector(state=>state.productReducer.products)

  return (
    <div className='categories'>

        {
            status ==='loading'  && 

            <div className='loading'>
                 <Spin indicator={antIcon} />
            </div>
        }
        
        {

            status ==='succeeded' && 

        
             products.map((product,index)=>{
                            return (
                                <SingleProduct key={index} imgUrl={product.image} pTitle={product.title} pCategory={product.category} pPrice={product.price} item={product}/>
                            )
            })

        }
    </div>
  )
}

export default ShowCatProduct