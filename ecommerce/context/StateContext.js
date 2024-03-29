import React, {createContext, useContext, useState, useEffect} from 'react'
import {toast} from 'react-hot-toast'


//  hook
const Context = createContext()


export const StateContext = ({children}) => {
    // state for different actions
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems]= useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const[totalQuantities, setTotalQuantities] = useState(0)
    const[qty, setQty]= useState(1)

    let foundProduct
    let index

    const onAdd = (product, quantity) =>{
        // logic that checks for items in the cart by matching the item added with the id on the product 
        const checkProductInCart = cartItems.find((item) => item._id ==product._id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice+ product.price * quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

        if(checkProductInCart){
            //  updated cart maps through the cart items and if the product matches the id returns the product spread with the new quantity
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity

            setCartItems([...cartItems, {...product}])

        }

        toast.success(`${qty} ${product.name} added to the cart`)

    

    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id ===product._id)
        const newCartItems = cartItems.filter((item) => item._id !== product._id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity)
        setCartItems(newCartItems)



    }

    const toggleCartItemQuantity = (id, value) => {
            foundProduct = cartItems.find((item) => item._id == id)
            index = cartItems.findIndex((product) => product._id == id)

            // filters out the ids that do not equal the id
            const newCartItems = cartItems.filter((item) => item._id !=id)

            if(value === 'inc') {
                // updating the cartitems with the current cartItems, spreading the properties and increasing by one
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
                console.log(foundProduct)


                setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
              } else if(value === 'dec') {
                  // updating the cartitems with the current cartItems, spreading the properties and decreasing by one
                if (foundProduct.quantity > 1) {
                  setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
                  setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                  setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
                }
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
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            incQty,
            decQty,
            onAdd,
            qty,
            toggleCartItemQuantity,
            onRemove,
            setCartItems,
            setTotalPrice,
            setTotalQuantities


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

