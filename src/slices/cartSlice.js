import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers:{
        addToCart:(state,action)=>{
            const itemCart = action.payload

            // if present then add qantity
            const findItem = state.cartItems.find((item,index)=>item.title === itemCart.title)

            if(findItem){
                 findItem.quantity+=1
                return
            }
            // else create new entry
            state.cartItems.push({
                title:itemCart.title,
                category:itemCart.category,
                price:itemCart.price,
                quantity:1,
                url:itemCart.image
            })

        },
        removeFromCart:(state,action)=>{
            const itemCart = action.payload

            // if present 
            const findItem = state.cartItems.find((item,index)=>item.title === itemCart.title)

            if(findItem){
                findItem.quantity-=1;
                if(findItem.quantity <= 1){
                    // state.cartItems = state.cartItems.filter((item,index)=>{
                    //    return  item.title !== findItem.title
                    // })
                    findItem.quantity=1
                }
            }
        },
        cancelFromCart:(state,action)=>{
            const itemCart = action.payload

            // if present 
            const findItem = state.cartItems.find((item,index)=>item.title === itemCart.title)

            if(findItem){
                    state.cartItems = state.cartItems.filter((item,index)=>{
                       return  item.title !== findItem.title
                    })
            }

        }
    }
})

export default cartSlice.reducer;

export const { addToCart, removeFromCart ,cancelFromCart} = cartSlice.actions