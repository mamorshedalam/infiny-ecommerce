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
     //  filter store
     const [selectedConsumers, setSelectedConsumers] = useState([]);
     const [selectedCategories, setSelectedCategories] = useState([]);
     const [selectedHighlights, setSelectedHighlights] = useState([]);
     const [filteredData, setFilteredData] = useState([]);

     // Handle checkbox change for consumers
     const handleConsumerChange = (event) => {
          const { value, checked } = event.target;
          setSelectedConsumers(prevSelectedConsumers => {
               if (checked) {
                    return [...prevSelectedConsumers, value];
               } else {
                    return prevSelectedConsumers.filter(consumer => consumer !== value);
               }
          });
     };

     // Handle checkbox change for categories
     const handleCategoryChange = (event) => {
          const { value, checked } = event.target;
          setSelectedCategories(prevSelectedCategories => {
               if (checked) {
                    return [...prevSelectedCategories, value];
               } else {
                    return prevSelectedCategories.filter(category => category !== value);
               }
          });
     };

     // Handle checkbox change for highlights
     const handleHighlightChange = (event) => {
          const { value, checked } = event.target;
          setSelectedHighlights(prevSelectedHighlights => {
               if (checked) {
                    return [...prevSelectedHighlights, value];
               } else {
                    return prevSelectedHighlights.filter(highlight => highlight !== value);
               }
          });
     };

     useEffect(() => {
          if (effectRun.current === true) {
               setFilteredData([]);
               const filtered = data.filter(item => {
                    const consumerMatch = selectedConsumers.length === 0 || selectedConsumers.includes(item.Consumer);
                    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(item.Category);
                    const highlightMatch = selectedHighlights.length === 0 || selectedHighlights.includes(item.Highlight);
                    return consumerMatch && categoryMatch && highlightMatch;
               });
               setFilteredData(filtered);
          }
          return () => { effectRun.current = true }
     }, [selectedConsumers, selectedCategories, selectedHighlights, data]);

     return (
          <>
               <HeroSection />
               <div className="sl-container flex flex-wrap py-24">
                    <aside className="basis-1/5 px-4">
                         <form className="relative mb-12">
                              <input type="text" placeholder="Search..." className="border pl-5 py-2.5" />
                              <button className="absolute right-2 top-1/2 -translate-y-1/2"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                         </form>
                         <ProductFilter operation={handleConsumerChange} selectedArray={selectedConsumers} name="Consumer" data={consumer} />
                         <ProductFilter operation={handleCategoryChange} selectedArray={selectedCategories} name="Category" data={category} />
                         <ProductFilter operation={handleHighlightChange} selectedArray={selectedHighlights} name="Highlight" data={highlight} />
                    </aside>
                    <main className="basis-4/5 px-4">
                         <div className="flex flex-wrap justify-between items-center px-4 mb-10">
                              <div className="flex items-center">
                                   <span className="font-semibold mr-4">Showing {filteredData.length} results</span>
                                   <div className="flex items-center gap-x-2">
                                        {selectedConsumers && selectedConsumers.length > 0 && <p>{selectedConsumers.map((filter) => (<i>{filter}, </i>))}</p>}
                                        {selectedCategories && selectedCategories.length > 0 && <p>{selectedCategories.map((filter) => (<i>{filter}, </i>))}</p>}
                                        {selectedHighlights && selectedHighlights.length > 0 && <p>{selectedHighlights.map((filter) => (<i>{filter}, </i>))}</p>}
                                   </div>
                              </div>
                              {/* <div className="flex items-center">
                                   <p className="w-20">Sort by:</p>
                                   <select className="font-bold rounded-none">
                                        <option value="default">Default</option>
                                        <option value="high">Price (High To Low)</option>
                                        <option value="low">Price (Low To High)</option>
                                   </select>
                              </div> */}
                         </div>
                         {status.error && <p className="text-2xl text-center font-bold pt-6">There wsa an error!</p>}
                         {!status.loading && data.length === 0 && <p className="text-2xl text-center font-bold pt-6">No data found</p>}
                         {!status.loading && filteredData.length === 0 && <p className="text-2xl text-center font-bold pt-6">No Product Found</p>}
                         {status.loading && <LoadingMessage text="Product" />}
                         {filteredData.length > 0 && <div className="grid grid-cols-3 gap-6">
                              {filteredData && filteredData.map((product) => (
                                   <ProductCart key={product["SKU"]} product={product} />
                              ))}
                         </div>}
                    </main>
               </div>
          </>
     )
}