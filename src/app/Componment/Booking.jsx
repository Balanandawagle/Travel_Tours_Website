'use client'
import { createContext, useReducer } from "react"

let bookReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_BOOK':
            return {book: [...state.book, action.payload]}
        case 'remove':
            return {book: state.book.filter((a)=>a.id!==action.payload.id)}
            
        default:
            return state
    }
}
let Booking=createContext()
export let BookProvider=({children})=>{
    let[state,dispatch]=useReducer(bookReducer,{book:[]});
    return(
        <>
        <Booking.Provider value={{state,dispatch}}>
            {children}
        </Booking.Provider>
        </>
    )
}
export default Booking