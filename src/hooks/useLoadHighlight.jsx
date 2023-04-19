import { useEffect, useReducer, useRef, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { initialState, reducer } from '../reducers/stateReducer';

export default function useLoadHighlight() {
     const effectRun = useRef(false)
     const [status, dispatch] = useReducer(reducer, initialState)
     const [highlight, setHighlight] = useState([])

     useEffect(() => {
          if (effectRun.current === true) {
               async function fetchData() {
                    const db = getDatabase();
                    const dataRef = query(ref(db, 'highlight'), orderByKey())

                    await get(dataRef)
                         .then((snapshot) => {
                              dispatch({ type: "SUCCESS", loading: false })
                              if (snapshot.exists()) {
                                   setHighlight([...Object.values(snapshot.val())])
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
     }, [])
     return { status, highlight }
}