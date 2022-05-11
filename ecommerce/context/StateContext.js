import React, {createContext, useContext, useState, useEffect} from 'react'
import {toast} from 'react-hot-toast'


//  hook
const Context = createContext()


export const StateContext = ({children}) => {

    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems]= useState()
    const [totalPrice, setTotalPrice] = useState()
    const[totalQuantities, setTotalQuantities] = useState()
    const[qty, setQty]= useState(1)

    const incQty = () => {
        setQty((prevQty) => prevQty -1)
    }
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty -1 <1) return 1;


            return prevQty -1

        })
    }


    

  return (
    <>
    <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            incQty,
            decQty

        }}
        >
            {children}
    </Context.Provider>
    </>

  )
}

// exports the context to the global state
export const useStateContext = () => useContext(Context)

