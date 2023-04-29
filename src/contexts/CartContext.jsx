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

     useEffect(() => {
          setTimeout(() => {
               setCartAlert({ ...cartAlert, status: false })
          }, 3000)
     }, [cartAlert.status])

     useEffect(() => {
          data ? setDeliveryFee(18) : setDeliveryFee(0)
     }, [data])

     function setCart(Obj) {
          let localData = JSON.parse(localStorage.getItem("localData")) || [];
          let dataExists = false;

          for (let i = 0; i < localData.length; i++) {
               if (Obj.SKU === localData[i].SKU) {
                    localData[i] = Obj;
                    dataExists = true;
                    setCartAlert({ status: true, message: "updated" })
               }
          }

          if (!dataExists) {
               localData.push(Obj)
               setCartAlert({ status: true, message: "added" })
          }

          localStorage.setItem("localData", JSON.stringify(localData))
          setData(localData)
     }

     function updateCart(sku) {
          const filterData = data.filter(product => product.SKU !== sku)
          setCartAlert({ status: true, message: "removed" })

          if (filterData.length > 0) {
               localStorage.setItem("localData", JSON.stringify(filterData))
               setData(filterData)
          } else {
               removeCart()
          }
     }

     function removeCart() {
          localStorage.clear();
          setData()
     }

     const value = { data, deliveryFee, cartAlert, setCart, updateCart, removeCart }
     return (
          <CartContext.Provider value={value}>
               {children}
          </CartContext.Provider>
     )
}