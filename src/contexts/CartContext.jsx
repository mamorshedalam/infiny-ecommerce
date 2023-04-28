import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export function useCart() {    // custom hooks for CartContext
     return useContext(CartContext);
}

export default function CartProvider({ children }) {
     const [data, setData] = useState(JSON.parse(localStorage.getItem('localData')))

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
          localStorage.setItem("localData", JSON.stringify(filterData))
          setData(filterData)
     }

     const value = { data, setCart, updateCart }
     return (
          <CartContext.Provider value={value}>
               {children}
          </CartContext.Provider>
     )
}