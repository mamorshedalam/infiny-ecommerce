import ProductCart from "../components/Cart/productCart"
import useFilterData from "../hooks/useFilterData"
import LoadingMessage from "../components/Spinner/loadingMessage"

export default function FilterList({ child, value, filterChild, filterValue }) {
     const { status, data } = useFilterData(child, value)

     const filterData = data.filter(product => product[filterChild] == filterValue)

     return (
          <>
               {status.error && <p className="text-center">There wsa an error!</p>}
               {!status.loading && data.length === 0 && <p className="text-center">No data found</p>}
               {status.loading && <LoadingMessage text="Product" />}
               {filterData.length > 0 && <div className="grid grid-cols-4 gap-6">
                    {filterData && filterData.map((product, index) => (
                         index < 4 ? <ProductCart key={product["SKU"]} product={product} /> : ""
                    ))}
               </div>}
          </>
     )
}