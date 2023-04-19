import { useState } from "react";
import ProductCart from "../../components/Cart/productCart";
import LoadingMessage from "../../components/Spinner/loadingMessage";
import ProductFilter from "../../components/Filter/productFilter";
import HeroSection from "../../modules/hero";
import useLoadData from "../../hooks/useLoadData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useLoadHighlight from "../../hooks/useLoadHighlight";
import useLoadCategory from "../../hooks/useLoadCategory";
import useLoadConsumer from "../../hooks/useLoadConsumer";

export default function Shop() {
     // const [lastSKU, setLastSKU] = useState(" ")
     const { status, data } = useLoadData() // PARSING LAST DATA SKU FOR LOAD NEW DATA
     const { highlight } = useLoadHighlight()          // load highlight value from database
     const { category } = useLoadCategory()            // load category value from database
     const { consumer } = useLoadConsumer()            // load consumer value from database

     /*   function nextSKU() {     // FINDING LAST DATA SKU
            if (data.length > 0) {
                 const last = data[data.length - 1];
                 setLastSKU(last.SKU)
            }
       } */

     return (
          <>
               <HeroSection />

               <div className="sl-container flex flex-wrap py-24">

                    <aside className="basis-1/5 px-4">
                         <form className="relative mb-12">
                              <input type="text" placeholder="Search..." className="border pl-5 py-2.5" />
                              <button className="absolute right-2 top-1/2 -translate-y-1/2"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                         </form>

                         <ProductFilter name="consumer" data={consumer} />
                         <ProductFilter name="category" data={category} />
                         <ProductFilter name="highlight" data={highlight} />
                    </aside>

                    <main className="basis-4/5 px-4">
                         <div className="flex flex-wrap justify-between items-center px-4 mb-10">
                              <div>
                                   <p>Showing {data.length} results</p>
                              </div>
                              <div className="flex items-center">
                                   <p className="w-20">Sort by:</p>
                                   <select name="" id="" className="font-bold rounded-none">
                                        <option value="default">Default</option>
                                        <option value="high">Price (High To Low)</option>
                                        <option value="low">Price (Low To High)</option>
                                   </select>
                              </div>
                         </div>
                         {status.error && <p className="text-center">There wsa an error!</p>}
                         {!status.loading && data.length === 0 && <p className="text-center">No data found</p>}
                         {status.loading && <LoadingMessage text="Product" />}
                         {data.length > 0 && <div className="grid grid-cols-3 gap-6">
                              {data && data.map((product) => (
                                   <ProductCart key={product["SKU"]} product={product} />
                              ))}
                         </div>}
                    </main>
               </div>
          </>
     )
}