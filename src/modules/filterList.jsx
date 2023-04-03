import ProductCart from "../components/Cart/productCart"
import useFilterData from "../hooks/useFilterData"

export default function FilterList({ child, value }) {
     const { status, data } = useFilterData(child, value)
     return (
          <div className="grid grid-cols-4 gap-6">
               {data && data.map((product) => {
                    return (
                         <div key={product.SKU} className="col-span-1">
                              <ProductCart product={product} />
                         </div>
                    )
               })
               }
          </div>
     )
}