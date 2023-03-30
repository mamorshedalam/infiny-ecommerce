import DashList from '../../components/Table/dashTable';
import useLoaderData from '../../hooks/useLoadData';

export default function DashProductList() {
     const { status, data } = useLoaderData("all");

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
                    {data && data.map((product, index) => (<DashList key={product.SKU} sl={index} data={product} />))}
               </tbody>
          </table >
     )
}