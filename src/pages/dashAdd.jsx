import { useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";

// export async function action({ request }) {
//      const formData = await request.formData();
//      const data = Object.fromEntries(formData);
//      const object = await createObject(data);

//      return redirect(`/dashboard/list`);
// }


export default function DashAdd() {
     const [object, setObject] = useState({
          sku: "",
          brand: "",
          name: "",
          status: "",
          category: "",
          reviews: "",
          rating: "",
          price: "",
          image: "",
          for: "",
          tags: [],
          description: "",
          sizes: [],
     });
     const [sizes, setSizes] = useState([]);

     const navigate = useNavigate();

     const handleSubmit = async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData);
          await getSizes();
          await convertImg(data.image);
          await createObject(data);
          console.log(sizes);
     }

     const getSizes = () => {
          const sizeInput = document.querySelectorAll(`[name="size"]`);
          sizeInput.forEach(size => {
               if (size.checked) { setSizes((prevSizes) => [...prevSizes, `${size.id}`]) }
          })
     }

     const convertImg = (img) => {
          const reader = new FileReader();
          reader.readAsDataURL(img);
          reader.onload = () => {
               setObject({ ...object, image: reader.result });
          }
     }

     const createObject = (data) => {
          const newObject = {
               sku: data.sku,
               brand: data.brand,
               name: data.name,
               status: data.status,
               category: data.category,
               reviews: data.reviews,
               rating: data.rating,
               price: data.price,
               for: data.for,
               description: data.description,
               sizes: sizes
          }

          setObject({ ...object, newObject })
     }

     return (
          <Form onSubmit={handleSubmit} method="post" className="w-full text-sm">
               <div className="grid grid-cols-12 gap-5 mb-6">
                    <input name="sku" placeholder="SKU" type="text" className="col-span-2 uppercase border pl-3 py-2.5" />
                    <input name="brand" placeholder="Brand" type="text" className="col-span-3 border pl-3 py-2.5" />
                    <input name="name" placeholder="Name" type="text" className="col-span-7 border pl-3 py-2.5" />
               </div>
               <div className="grid grid-cols-12 gap-5 mb-6">
                    <select name="status" className="col-span-2 border pl-3 py-2.5"  >
                         <option value="" hidden>Status</option>
                         <option value="new">New</option>
                         <option value="sale">Sale</option>
                         <option value="offer">Offer</option>
                         <option value="non">Non</option>
                    </select>
                    <select name="category" className="col-span-2 capitalize border pl-3 py-2.5"  >
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
                    <select name="for" className="col-span-2 h-fit capitalize border pl-3 py-2.5"  >
                         <option value="" hidden>for</option>
                         <option value="mens">mens</option>
                         <option value="womens">womens</option>
                         <option value="kids">kids</option>
                         <option value="all">all</option>
                    </select>
                    <input name="tags" placeholder="Tags" type="text" className="col-span-4 h-fit border pl-3 py-2.5" />
                    <textarea name="description" placeholder="Description" type="number" className="col-span-5 border pl-3 py-2.5"  ></textarea>
                    <div className="col-span-1">
                         <h5 className="font-bold mb-2">Size:</h5>
                         <div className="flex items-center mb-1">
                              <input name="size" id="xxxl" type="checkbox" className="w-auto mr-2" /><label htmlFor="xxxl">xxxl</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input name="size" id="xxl" type="checkbox" className="w-auto mr-2" /><label htmlFor="xxl">xxl</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input name="size" id="xl" type="checkbox" className="w-auto mr-2" /><label htmlFor="xl">xl</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input name="size" id="l" type="checkbox" className="w-auto mr-2" /><label htmlFor="l">l</label>
                         </div>
                         <div className="flex items-center mb-1">
                              <input name="size" id="m" type="checkbox" className="w-auto mr-2" /><label htmlFor="m">m</label>
                         </div>
                         <div className="flex items-center">
                              <input name="size" id="s" type="checkbox" className="w-auto mr-2" /><label htmlFor="s">s</label>
                         </div>
                         <div className="flex items-center">
                              <input name="size" id="free" type="checkbox" className="w-auto mr-2" /><label htmlFor="free">free size</label>
                         </div>
                    </div>
               </div>
               <div className="text-right">
                    <button type="submit" className="bg-neutral-900 text-center font-bold uppercase tracking-widest text-white text-sm py-3 px-9  mt-2 ml-4">Add This</button>
                    <button type="button" onClick={() => { navigate(-1) }} className="text-center font-bold uppercase tracking-widest text-sm border py-3 px-9 mt-2 ml-4">Cancel</button>
               </div>
          </Form>
     )
}