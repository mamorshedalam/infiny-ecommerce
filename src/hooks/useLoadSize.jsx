import { useEffect, useReducer, useRef, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { initialState, reducer } from '../reducers/stateReducer';

export default function useLoadSize(child) {
     const effectRun = useRef(false)
     const [status, dispatch] = useReducer(reducer, initialState)
     const [sizes, setSizes] = useState([])

     useEffect(() => {
          if (effectRun.current === true) {
               async function fetchData() {
                    const db = getDatabase();
                    const dataRef = query(ref(db, 'size/' + child), orderByKey())
                    await get(dataRef)
                         .then((snapshot) => {
                              dispatch({ type: "SUCCESS", loading: true })
                              if (snapshot.exists()) {
                                   setSizes([...Object.values(snapshot.val())])
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
     }, [child])
     return { status, sizes }
}