import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext();

export function useCart() {    // custom hooks for CartContext
     return useContext(CartContext);
}

export default function CartProvider({ children }) {
     const [data, setData] = useState(JSON.parse(localStorage.getItem('localData')))
     const [deliveryFee, setDeliveryFee] = useState(0)
     const [cartAlert, setCartAlert] = useState({
          status: false,
          message: ""
     })

     useEffect(() => {   // timer for alert status remove
          setTimeout(() => {
               setCartAlert({ ...cartAlert, status: false })
          }, 3000)
     }, [cartAlert.status])

     useEffect(() => {   // set delivery fee for order
          data ? setDeliveryFee(18) : setDeliveryFee(0)
     }, [data])

     function setCart(Obj) {  // add product in local store
          let localData = JSON.parse(localStorage.getItem("localData")) || [];
          let dataExists = false;

          for (let i = 0; i < localData.length; i++) { // update product
               if (Obj.SKU === localData[i].SKU) {
                    localData[i] = Obj;
                    dataExists = true;
                    setCartAlert({ status: true, message: "updated" })
               }
          }

          if (!dataExists) {  // new product added
               localData.push(Obj)
               setCartAlert({ status: true, message: "added" })
          }

          localStorage.setItem("localData", JSON.stringify(localData))
          setData(localData)
     }

     function updateCart(){

     }

     function removeCart(sku) {    // remove single product from local store
          const filterData = data.filter(product => product.SKU !== sku)
          setCartAlert({ status: true, message: "removed" })

          if (filterData.length > 0) {
               localStorage.setItem("localData", JSON.stringify(filterData))
               setData(filterData)
          } else {
               removeCart()
          }
     }

     function clearCart() {  // clear local store
          localStorage.clear();
          setData()
     }

     const value = { data, deliveryFee, cartAlert, setCart, updateCart, removeCart, clearCart }
     return (
          <CartContext.Provider value={value}>
               {children}
          </CartContext.Provider>
     )
}