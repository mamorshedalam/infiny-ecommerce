import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export function useCart() {    // custom hooks for CartContext
     return useContext(CartContext);
}

export default function CartProvider({ children }) {
     const [data, setData] = useState(JSON.parse(localStorage.getItem('localData')))
     let deliveryFee

     if (data) {
          deliveryFee = 18
     } else {
          deliveryFee = 0
     }

     function setCart(Obj) {
          let localData = JSON.parse(localStorage.getItem("localData")) || [];
          let dataExists = false;

          for (let i = 0; i < localData.length; i++) {
               if (Obj.SKU === localData[i].SKU) {
                    localData[i] = Obj;
                    dataExists = true;
               }
          }

          if (!dataExists) {
               localData.push(Obj)
          }

          localStorage.setItem("localData", JSON.stringify(localData))
          setData(localData)
     }

     function updateCart(sku) {
          const filterData = data.filter(product => product.SKU !== sku)

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

     const value = { data, deliveryFee, setCart, updateCart, removeCart }
     return (
          <CartContext.Provider value={value}>
               {children}
          </CartContext.Provider>
     )
}