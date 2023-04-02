import { useEffect, useReducer, useRef, useState } from "react";
import { get, getDatabase, orderByKey, query, ref, limitToFirst, startAfter } from "firebase/database";
import { initialState, reducer } from '../reducers/stateReducer';

export default function useLoadData(limit, lastSKU) {
     const effectRun = useRef(false)
     const [status, dispatch] = useReducer(reducer, initialState)
     const [data, setData] = useState([])
     const [hasMore, setHasMore] = useState(true);

     useEffect(() => {
          if (effectRun.current === true) {
               async function fetchData() {
                    const db = getDatabase();
                    const dataRef = query(ref(db, 'products'), orderByKey(), startAfter(`${lastSKU}`), limitToFirst(limit))
                    await get(dataRef)
                         .then((snapshot) => {
                              dispatch({ type: "SUCCESS", loading: true })
                              if (snapshot.exists()) {
                                   setData((prevData) => [...prevData, ...Object.values(snapshot.val())])
                              } else {
                                   setHasMore(false);
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
     }, [lastSKU])
     return { status, hasMore, data }
}