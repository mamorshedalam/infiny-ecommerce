import { useReducer } from "react";
import { remove, getDatabase, ref } from "firebase/database";
import { initialState, reducer } from '../../reducers/stateReducer';
import { Link } from "react-router-dom";

export default function DashTable({ data }) {
     const [status, dispatch] = useReducer(reducer, initialState)

     async function handleDelete(id) {
          if (confirm(`Are you sure you want to delete ${id}`)) {
               const db = getDatabase();
               await remove(ref(db, 'products/' + id))
                    .then(() => {
                         dispatch({ type: "SUCCESS", loading: true })
                         document.getElementById(id).remove();
                    })
                    .catch((err) => {
                         console.log(err);
                         dispatch({ type: "FAIL", error: "Fail to load Data, Try Again!" });
                    })
          }
     }
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
               <tbody className="text-sm">
                    {data && data.map((product, index) => (
                         <tr key={product.SKU} id={product.SKU} className="odd:bg-white even:bg-slate-50">
                              <td className="border p-1">{index + 1}</td>
                              <td className="border p-1">{product.SKU}</td>
                              <td className="border p-1">{product.Brand}</td>
                              <td className="border p-1">{product.Name}</td>
                              <td className="border p-1">{product.Status}</td>
                              <td className="border p-1">{product.For}</td>
                              <td className="border p-1">{product.Category}</td>
                              <td className="border p-1">{product.Reviews}</td>
                              <td className="border p-1">{product.Rating}</td>
                              <td className="border p-1">{product.Price}</td>
                              <td className="border p-1"><img src={product.Image} alt="img" /></td>
                              <td className="border p-1">{product.Tags.map((tag, index) => <span key={index}>{tag}, </span>)}</td>
                              <td className="border p-1">{product.Description}</td>
                              <td className="border p-1">{product.Sizes.map((size, index) => <span key={index}>{size}, </span>)}</td>
                              <td className="border p-2">
                                   <Link to={`/dashboard/product/edit/${product.SKU}`}><svg className="h-4 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg></Link>
                                   <button onClick={() => handleDelete(product.SKU)} className="fill-neutral-900"><svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg></button>
                              </td>
                         </tr>))}
               </tbody>
          </table >
     )
}