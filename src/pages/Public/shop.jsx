import { useState } from "react";
import ProductCart from "../../components/Cart/productCart";
import SidebarCart from "../../components/Filter/productFilter";
import useLoadData from "../../hooks/useLoadData";
import HeroSection from "../../modules/hero";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Shop() {
     const [lastSKU, setLastSKU] = useState(" ")
     const { status, hasMore, data } = useLoadData(12, lastSKU)  // PARSING LAST DATA SKU FOR LOAD NEW DATA

     function nextSKU() {     // FINDING LAST DATA SKU
          const last = data[data.length - 1];
          setLastSKU(last.SKU)
     }
     return (
          <>
               <HeroSection />

               <div className="sl-container flex flex-wrap py-24">

                    <aside className="basis-1/4 px-4">
                         <form className="relative mb-12">
                              <input type="text" placeholder="Search..." className="border pl-5 py-2.5" />
                              <button className="absolute right-2 top-1/2 -translate-y-1/2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 fill-zinc-400 -scale-x-100"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg></button>
                         </form>

                         <SidebarCart />
                    </aside>

                    <main className="basis-3/4 px-4">
                         <div className="flex flex-wrap justify-between items-center px-4 mb-10">
                              <div>
                                   <p>Showing <span>1–12</span> of <span>126</span> results</p>
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
                         <InfiniteScroll className="grid grid-cols-3 gap-6"
                              dataLength={data.length}
                              hasMore={hasMore}
                              next={nextSKU}
                              loader={<h4 className="text-center">Loading...</h4>}>
                              {data && data.map((product) => (
                                   <div key={product["SKU"]} className="col-span-1"><ProductCart product={product} /></div>
                              ))}
                         </InfiniteScroll>
                    </main>
               </div>
          </>
     )
}