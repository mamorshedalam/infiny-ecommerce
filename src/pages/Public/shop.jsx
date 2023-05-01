import React, { useEffect, useRef, useState } from "react";
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
     const effectRun = useRef(false)
     const { status, data } = useLoadData()
     const { highlight } = useLoadHighlight()
     const { category } = useLoadCategory()
     const { consumer } = useLoadConsumer()
     const [filterData, setFilterData] = useState([])
     const [filterList, setFilterList] = useState([])

     useEffect(() => {
          if (effectRun.current === true) {
               setFilterData(data)
          }
          return () => { effectRun.current = true }
     }, [data])

     function handleFilter(filterName, filterValue) {
          const newFilterData = filterData.filter(product => product[filterName] == filterValue)

          setFilterList(prevList => [...prevList, filterValue])
          setFilterData(newFilterData)
     }

     return (
          <>
               <HeroSection />
               <div className="sl-container flex flex-wrap py-24">
                    <aside className="basis-1/5 px-4">
                         <form className="relative mb-12">
                              <input type="text" placeholder="Search..." className="border pl-5 py-2.5" />
                              <button className="absolute right-2 top-1/2 -translate-y-1/2"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                         </form>
                         <ProductFilter operation={handleFilter} name="Consumer" data={consumer} />
                         <ProductFilter operation={handleFilter} name="Category" data={category} />
                         <ProductFilter operation={handleFilter} name="Highlight" data={highlight} />
                    </aside>
                    <main className="basis-4/5 px-4">
                         <div className="flex flex-wrap justify-between items-center px-4 mb-10">
                              <div>
                                   <span className="mr-4">Showing {data.length} results</span>
                                   {filterList.length > 0 && filterList.map((list, index) => (<span key={index}>{list}; </span>))}
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