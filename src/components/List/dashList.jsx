import { useReducer } from "react";
import { remove, getDatabase, ref } from "firebase/database";
import { initialState, reducer } from '../../reducers/stateReducer';

export default function DashList({ sl, data }) {
     const { SKU, Brand, Name, Status, For, Category, Reviews, Rating, Price, Image, Tags, Description, Sizes } = data;
     const [status, dispatch] = useReducer(reducer, initialState)

     async function handleDelete() {
          const db = getDatabase();
          remove(ref(db, 'users/' + SKU),)
     }
     return (
          <tr className="odd:bg-white even:bg-slate-50">
               <td className="border p-1">{sl + 1}</td>
               <td className="border p-1">{SKU}</td>
               <td className="border p-1">{Brand}</td>
               <td className="border p-1">{Name}</td>
               <td className="border p-1">{Status}</td>
               <td className="border p-1">{For}</td>
               <td className="border p-1">{Category}</td>
               <td className="border p-1">{Reviews}</td>
               <td className="border p-1">{Rating}</td>
               <td className="border p-1">{Price}</td>
               <td className="border p-1"><img src={Image} alt="img" /></td>
               <td className="border p-1">{Tags.map((tag, index) => <span key={index}>{tag}, </span>)}</td>
               <td className="border p-1">{Description}</td>
               <td className="border p-1">{Sizes.map((size, index) => <span key={index}>{size}, </span>)}</td>
               <td className="border p-2"><button onClick={handleDelete} className="fill-neutral-900"><svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg></button></td>
          </tr>
     )
}