export default function DashAdd() {
     return (
          <form className="w-full text-sm">
               <div className="grid grid-cols-12 gap-5 mb-6">
                    <input name="sku" placeholder="SKU" type="text" className="col-span-2 border pl-3 py-2.5" />
                    <input name="brand" placeholder="Brand" type="text" className="col-span-3 border pl-3 py-2.5" />
                    <input name="name" placeholder="Name" type="text" className="col-span-7 border pl-3 py-2.5" />
               </div>
               <div className="grid grid-cols-12 gap-5 mb-6">
                    <select name="status" className="col-span-2 border pl-3 py-2.5">
                         <option value="" hidden>Status</option>
                         <option value="new">New</option>
                         <option value="sale">Sale</option>
                         <option value="offer">Offer</option>
                         <option value="non">Non</option>
                    </select>
                    <select name="category" className="col-span-2 capitalize border pl-3 py-2.5">
                         <option value="" hidden>Category</option>
                         <option value="t-shirt-plain">Plain T-shirt</option>
                         <option value="t-shirt-polo">Polo T-shirt</option>
                         <option value="shirt">Shirt</option>
                         <option value="hoodie">Hoodie</option>
                         <option value="jacket">Jacket</option>
                         <option value="joggers">Joggers</option>
                         <option value="trouser">Trouser</option>
                         <option value="shorts">Shorts</option>
                         <option value="underwear">Underwear</option>
                         <option value="jersey">Jersey</option>
                         <option value="socks">socks</option>
                         <option value="mask">Face Mask</option>
                    </select>
                    <input name="reviews" placeholder="Reviews" type="number" className="col-span-2 border pl-3 py-2.5" />
                    <input name="rating" placeholder="Rating" type="number" className="col-span-2 border pl-3 py-2.5" />
                    <input name="price" placeholder="Price" type="number" className="col-span-2 border pl-3 py-2.5" />
                    <input name="image" type="file" className="col-span-2 border pl-3 py-2.5" />
               </div>
               <div className="grid grid-cols-12 gap-5 font-semibold uppercase mb-6">
                    <input name="tags" placeholder="Tags" type="text" className="col-span-4 h-fit border pl-3 py-2.5" />
                    <textarea name="description" placeholder="Description" type="number" className="col-span-6 border pl-3 py-2.5" ></textarea>
                    <div name="sizes" className="col-span-1">
                         <h5 className="font-bold mb-2">Size:</h5>
                         <div className="flex items-center mb-1">
                              <input id="xxxl" type="checkbox" className="w-auto mr-2" /><label htmlFor="xxxl">xxxl</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input id="xxl" type="checkbox" className="w-auto mr-2" /><label htmlFor="xxl">xxl</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input id="xl" type="checkbox" className="w-auto mr-2" /><label htmlFor="xl">xl</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input id="l" type="checkbox" className="w-auto mr-2" /><label htmlFor="l">l</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input id="m" type="checkbox" className="w-auto mr-2" /><label htmlFor="m">m</label>
                         </div>
                         <div className="flex items-center">
                              <input id="s" type="checkbox" className="w-auto mr-2" /><label htmlFor="s">s</label>
                         </div>
                         <div className="flex items-center">
                              <input id="free" type="checkbox" className="w-auto mr-2" /><label htmlFor="free">free size</label>
                         </div>
                    </div>
                    <div className="col-span-1">
                         <h5 className="font-bold mb-2">For:</h5>
                         <div className="flex items-center mb-1">
                              <input id="mens" name="for" type="radio" className="w-auto mr-2" /><label htmlFor="mens">mens</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input id="womens" name="for" type="radio" className="w-auto mr-2" /><label htmlFor="womens">womens</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input id="kids" name="for" type="radio" className="w-auto mr-2" /><label htmlFor="kids">kids</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input id="all" name="for" type="radio" className="w-auto mr-2" /><label htmlFor="all">all</label>
                         </div>
                    </div>
               </div>
               <button className="bg-neutral-900 text-center font-bold uppercase tracking-widest text-white text-sm py-3 px-9 float-right mt-2">Add This</button>
          </form>
     )
}