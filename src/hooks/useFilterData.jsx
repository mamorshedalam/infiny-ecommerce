import { useEffect, useReducer, useRef, useState } from "react";
import { get, getDatabase, query, ref, orderByChild, equalTo, orderByKey, orderByValue, limitToLast } from "firebase/database";
import { initialState, reducer } from '../reducers/stateReducer';

export default function useFilterData(child, value) {
     const effectRun = useRef(false)
     const [status, dispatch] = useReducer(reducer, initialState)
     const [data, setData] = useState([])

     useEffect(() => {
          if (effectRun.current === true) {
               async function fetchData() {
                    const db = getDatabase();
                    const dataRef = query(ref(db, 'products'), orderByChild(`${child}`), equalTo(`${value}`), limitToLast(4))
                    await get(dataRef)
                         .then((snapshot) => {
                              dispatch({ type: "SUCCESS", loading: true })
                              if (snapshot.exists()) {
                                   setData([...Object.values(snapshot.val())])
                              }
                         })
                         .catch((err) => {
                              console.log(err);
                              dispatch({ type: "FAIL", error: "Fail to load Data, Try Again!" });
                         })

               }
               fetchData()
          }
          return () => { effectRun.current = true }
     }, [value])
     return { status, data }
}