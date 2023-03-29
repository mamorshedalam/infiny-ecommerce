import { useEffect, useReducer, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import DashList from '../components/List/dashList';
import { initialState, reducer } from '../reducers/stateReducer'

export default function Dashboard() {
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
     return (
          <table className="w-full">
               <thead>
                    <tr className="text-left font-bold uppercase">
                         <th className="border p-2">sl</th>
                         <th className="border p-2">sku</th>
                         <th className="border p-2">brand</th>
                         <th className="border p-2">name</th>
                         <th className="border p-2">status</th>
                         <th className="border p-2">for</th>
                         <th className="border p-2">category</th>
                         <th className="border p-2">reviews</th>
                         <th className="border p-2">rating</th>
                         <th className="border p-2">price</th>
                         <th className="border p-2">image</th>
                         <th className="border p-2">tags</th>
                         <th className="border p-2">description</th>
                         <th className="border p-2">size</th>
                         <th className="border p-2"></th>
                    </tr>
               </thead>
               <tbody>
                    {data && data.map((product, index) => (<DashList key={product.SKU} sl={index} data={product} />))}
               </tbody>
          </table>
     )
}