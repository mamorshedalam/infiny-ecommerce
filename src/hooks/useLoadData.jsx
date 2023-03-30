import { useEffect, useReducer, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { initialState, reducer } from '../reducers/stateReducer';

export default function useLoaderData() {
     const [status, dispatch] = useReducer(reducer, initialState)
     const [data, setData] = useState([])

     useEffect(() => {
          async function fetchData() {
               const db = getDatabase();
               const dataRef = ref(db, "products");
               const dataQuery = query(dataRef, orderByKey());
               try {
                    dispatch({ type: "SUCCESS", loading: true });
                    const snapshot = await get(dataQuery);
                    if (snapshot.exists()) {
                         setData(Object.values(snapshot.val()))
                    }
               } catch (err) {
                    console.log(err);
                    dispatch({ type: "FAIL", error: "Fail to load Data, Try Again!" });
               }
          }
          fetchData()
     }, [])
     return { status, data }
}