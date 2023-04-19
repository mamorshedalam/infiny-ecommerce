import { useEffect, useReducer, useRef, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { initialState, reducer } from '../reducers/stateReducer';

export default function useLoadConsumer() {
     const effectRun = useRef(false)
     const [status, dispatch] = useReducer(reducer, initialState)
     const [consumer, setConsumer] = useState([])

     useEffect(() => {
          if (effectRun.current === true) {
               async function fetchData() {
                    const db = getDatabase();
                    const dataRef = query(ref(db, 'consumer'), orderByKey())

                    await get(dataRef)
                         .then((snapshot) => {
                              dispatch({ type: "SUCCESS", loading: false })
                              if (snapshot.exists()) {
                                   setConsumer([...Object.values(snapshot.val())])
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
     return { status, consumer }
}