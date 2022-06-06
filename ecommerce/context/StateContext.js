import React, {createContext, useContext, useState, useEffect} from 'react'
import {toast} from 'react-hot-toast'


//  hook
const Context = createContext()


export const StateContext = ({children}) => {
    // state for different actions
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems]= useState()
    const [totalPrice, setTotalPrice] = useState()
    const[totalQuantities, setTotalQuantities] = useState()
    const[qty, setQty]= useState(1)

    const onAdd = (product, quantity) =>{
        // logic that checks for items in the cart
        const checkProductInCart = cartItems.find((item) => item._id ==product._id)

        if(checkProductInCart){
            setTotalPrice((prevTotalPrice) => prevTotalPrice+ product.price * quantity)
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
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
            decQty,
            onAdd,
            qty

        }}
        >
            {/* application state being passed through so Context API can be accessbile */}
            {children}
    </Context.Provider>
    </>

  )
}

// exports the context to the global state, lets you use state like a hook
export const useStateContext = () => useContext(Context)

