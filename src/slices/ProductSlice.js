import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";



export const fetchData = createAsyncThunk('/products/FetechData',async (category) => {

    const url = `https://fakestoreapi.com/products/category/${category}`

    const response = await fetch(url)

    const data = await response.json()

    return data

})

const productsSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        status:'idle',
        error:null,
    },
    reducers:{
        loadProducts:(state,action) => {
            // state.products = action.payload
        },
    },
    extraReducers:function (builder){
        builder.
            addCase(fetchData.pending, (state,action) => {
                state.status = 'loading'
            }).addCase(fetchData.fulfilled, (state,action)=>{
                state.status ='succeeded'
                state.products = action.payload
            }).addCase(fetchData.rejected, (state,action)=>{
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
})

export default productsSlice.reducer

export const {loadProducts} = productsSlice.actions

