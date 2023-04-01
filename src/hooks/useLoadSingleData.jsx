import { useEffect, useReducer, useState } from "react";
import { child, get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { initialState, reducer } from '../reducers/stateReducer';

export default function useLoadSingleData({ sku }) {
     const [status, dispatch] = useReducer(reducer, initialState)
     const [data, setData] = useState([])

     useEffect(() => {
          async function fetchData() {
               const dbRef = ref(getDatabase());
               await get(child(dbRef, `products/${sku}`))
                    .then((snapshot) => {
                         console.log(object);
                         console.log(snapshot.exists());
                         dispatch({ type: "SUCCESS", loading: true })
                         if (snapshot.exists()) {
                              console.log(snapshot.val());
                              // setData(Object.values(snapshot.val()))
                              // setData((prevData) => [...prevData, ...Object.values(snapshot.val())])
                         }
                    })
                    .catch((err) => {
                         console.log(err);
                         dispatch({ type: "FAIL", error: "Fail to load Data, Try Again!" });
                    })

          }
          fetchData()
     }, [])
     return { status, data }
}