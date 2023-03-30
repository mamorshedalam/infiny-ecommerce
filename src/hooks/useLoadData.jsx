import { useEffect, useReducer, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { initialState, reducer } from '../reducers/stateReducer';

export default function useLoaderData() {
     const [status, dispatch] = useReducer(reducer, initialState)
     const [data, setData] = useState([])

     useEffect(() => {
          async function fetchData() {
               const db = getDatabase();
               await get(query(ref(db, 'products'), orderByKey()))
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