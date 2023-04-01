import { useEffect, useReducer, useState } from "react";
import { get, getDatabase, orderByKey, query, ref, limitToFirst, startAt } from "firebase/database";
import { initialState, reducer } from '../reducers/stateReducer';

export default function useLoadData(limit, page = 1) {
     const [status, dispatch] = useReducer(reducer, initialState)
     const [data, setData] = useState([])
     const [hasMore, setHasMore] = useState(true);

     useEffect(() => {
          async function fetchData() {
               const db = getDatabase();
               let dataRef
               if (limit) { dataRef = query(ref(db, 'products'), orderByKey(), limitToFirst(limit)), startAt("" + page) }
               else { dataRef = query(ref(db, 'products'), orderByKey()) }
               await get(dataRef)
                    .then((snapshot) => {
                         dispatch({ type: "SUCCESS", loading: true })
                         if (snapshot.exists()) {
                              // setData(Object.values(snapshot.val()))
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
     }, [])
     return { status, hasMore, data }
}