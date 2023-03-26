export default function DashAdd() {
     return (
          <form className="text-sm">
               <div className="grid grid-cols-12 gap-5 mb-6">
                    <input name="sku" placeholder="SKU" type="text" className="col-span-2 border pl-3 py-2.5" />
                    <input name="brand" placeholder="Brand" type="text" className="col-span-3 border pl-3 py-2.5" />
                    <input name="name" placeholder="Name" type="text" className="col-span-7 border pl-3 py-2.5" />
               </div>
               <div className="grid grid-cols-12 gap-5 mb-6">
                    <input name="status" placeholder="Status" type="text" className="col-span-2 border pl-3 py-2.5" />
                    <input name="category" placeholder="Category" type="text" className="col-span-2 border pl-3 py-2.5" />
                    <input name="reviews" placeholder="Reviews" type="number" className="col-span-2 border pl-3 py-2.5" />
                    <input name="rating" placeholder="Rating" type="number" className="col-span-2 border pl-3 py-2.5" />
                    <input name="price" placeholder="Price" type="number" className="col-span-2 border pl-3 py-2.5" />
                    <input name="image" type="file" className="col-span-2 border pl-3 py-2.5" />
               </div>
               <div className="grid grid-cols-12 gap-5 font-semibold uppercase mb-6">
                    <input name="tags" placeholder="Tags" type="text" className="col-span-4 h-fit border pl-3 py-2.5" />
                    <textarea name="description" placeholder="Description" type="number" className="col-span-6 border pl-3 py-2.5" ></textarea>
                    <div name="sizes" className="col-span-2">
                         <h5 className="font-bold mb-2">Size:</h5>
                         <div className="flex items-center mb-1">
                              <input id="xxxl" type="checkbox" className="w-auto mr-2"/><label htmlFor="xxxl">xxxl</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input id="xxl" type="checkbox" className="w-auto mr-2"/><label htmlFor="xxl">xxl</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input id="xl" type="checkbox" className="w-auto mr-2"/><label htmlFor="xl">xl</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input id="l" type="checkbox" className="w-auto mr-2"/><label htmlFor="l">l</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input id="m" type="checkbox" className="w-auto mr-2"/><label htmlFor="m">m</label>
                         </div>
                         <div className="flex items-center">
                              <input id="s" type="checkbox" className="w-auto mr-2"/><label htmlFor="s">s</label>
                         </div>
                         <div className="flex items-center">
                              <input id="free" type="checkbox" className="w-auto mr-2"/><label htmlFor="free">free size</label>
                         </div>
                    </div>
               </div>




               {/* <button className="w-full bg-neutral-900 text-center font-bold uppercase tracking-widest text-white text-sm py-3 mt-6">Login</button> */}
          </form>
     )
}