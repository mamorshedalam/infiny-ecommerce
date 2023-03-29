export default function DashList({ sl, data }) {
     return (
          <tr className="odd:bg-white even:bg-slate-50">
               <td className="border p-1">{sl + 1}</td>
               <td className="border p-1">{data.SKU}</td>
               <td className="border p-1">{data.Brand}</td>
               <td className="border p-1">{data.Name}</td>
               <td className="border p-1">{data.Status}</td>
               <td className="border p-1">{data.For}</td>
               <td className="border p-1">{data.Category}</td>
               <td className="border p-1">{data.Reviews}</td>
               <td className="border p-1">{data.Rating}</td>
               <td className="border p-1">{data.Price}</td>
               <td className="border p-1"><img src={data.Image} alt="img" /></td>
               <td className="border p-1">{data.Tags.map((tag, index) => <span key={index}>{tag}, </span>)}</td>
               <td className="border p-1">{data.Description}</td>
               <td className="border p-1">{data.Sizes.map((size, index) => <span key={index}>{size}, </span>)}</td>
               <td className="border p-2"><button className="fill-neutral-900"><svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg></button></td>
          </tr>
     )
}