import { createSlice } from "@reduxjs/toolkit";

// JSON.parse(localStorage.getItem('cart'))??
const initialState=JSON.parse(localStorage.getItem('cart'))??[];
// console.log(initialState);

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload) 
        },
        deleteFromCart(state,action){
            return state.filter((item)=>item._id!==action.payload._id);
        },
        increamentQuantity :(state,action)=>{
            state=state.map(item=>{
                if(item._id===action.payload){
                    item.quantity++;
                }
                return item;
            })
        },
        decrementQuantity: (state, action) => {
            state = state.map(item => {
                if (item.quantity !== 1) {
                    if (item._id === action.payload) {
                        item.quantity--;
                    }
                }
                return item;

            })
        },
    },
})

export const {addToCart,deleteFromCart,increamentQuantity,decrementQuantity}=cartSlice.actions

export default cartSlice.reducer