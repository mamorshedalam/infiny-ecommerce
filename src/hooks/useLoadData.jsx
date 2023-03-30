import { useEffect, useReducer, useState } from "react";
import { child, get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { initialState, reducer } from '../reducers/stateReducer';

export default function useLoaderData({ SKU = 0 }) {
     const [status, dispatch] = useReducer(reducer, initialState)
     const [data, setData] = useState([])

     useEffect(() => {
          async function fetchData() {
               const db = getDatabase();
               let dataRef
               if (SKU === 1) {
                    dataRef = child(ref(db)`products/${SKU}`);
               } else {
                    dataRef = query(ref(db, 'products'), orderByKey());
               }
               await get(dataRef)
                    .then((snapshot) => {
                         dispatch({ type: "SUCCESS", loading: true })
                         if (snapshot.exists()) {
                              setData(Object.values(snapshot.val()))
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