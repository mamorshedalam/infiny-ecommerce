import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Input from "../components/inputField";
import ButtonBlack from "../components/Button/btnBlack";
import ButtonWhite from "../components/Button/btnWhite";


export default function DashAdd() {
     const navigate = useNavigate()
     const [object, setObject] = useState({
          SKU: "",
          Brand: "",
          Name: "",
          Status: "",
          Category: "",
          Reviews: "",
          Rating: "",
          Price: "",
          Image: "",
          For: "",
          Description: "",
          Tags: [],
          Sizes: [],
     });
     const [sizes, setSizes] = useState([])

     // assign value
     const statusOptions = [
          { value: 'new', label: 'New' },
          { value: 'offer', label: 'Offer' },
          { value: 'sale', label: 'Sale' },
          { value: 'non', label: 'Non' }
     ];
     const categoryOptions = [
          { value: "t-shirt-plain", label: "Plain T-shirt" },
          { value: "t-shirt-polo", label: "Polo T-shirt" },
          { value: "shirt", label: "Shirt" },
          { value: "hoodie", label: "Hoodie" },
          { value: "jacket", label: "Jacket" },
          { value: "joggers", label: "Joggers" },
          { value: "trouser", label: "Trouser" },
          { value: "shorts", label: "Shorts" },
          { value: "underwear", label: "Underwear" },
          { value: "jersey", label: "Jersey" },
          { value: "socks", label: "socks" },
          { value: "mask", label: "Face Mask" },
     ];
     const forOptions = [
          { value: "mens", label: "Mens" },
          { value: "womens", label: "Womens" },
          { value: "kids", label: "Kids" },
          { value: "all", label: "All" }
     ];
     const sizeOptions = ["xxxl", "xxl", "xl", "l", "m", "s", "free"];

     const handleChange = (e) => {
          const field = e.target;

          if (field.name === "Image") {
               const img = field.files[0]
               const reader = new FileReader()    // convert image to base64
               reader.readAsDataURL(img)
               reader.onload = () => {
                    setObject({ ...object, Image: reader.result })
               }
          } else if (field.name === "Tags") {
               const keywords = field.value.split(', ')     // create array of keywords
               setObject({ ...object, Tags: keywords })
          } else if (field.name === "Size" && field.checked && sizes.includes(field.id) !== true) { // create array of sizes
               setSizes([...sizes, field.id])
          } else {
               const newObject = { ...object }
               newObject[field.name] = field.value
               newObject["Sizes"] = sizes
               setObject(newObject)
          }
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          if (confirm("Confirm submit!")) {

          }
     }
     return (
          <form onSubmit={(e) => handleSubmit(e)} method="post" className="w-full text-sm">
               <div className="grid grid-cols-12 gap-5 mb-6">
                    <Input operation={handleChange} name="SKU" type="text" classes="col-span-2 uppercase" />
                    <Input operation={handleChange} name="Brand" type="text" classes="col-span-3" />
                    <Input operation={handleChange} name="Name" type="text" classes="col-span-7" />
               </div>
               <div className="grid grid-cols-12 gap-5 mb-6">
                    <Input operation={handleChange} name="Status" type="select" classes="col-span-2" options={statusOptions} />
                    <Input operation={handleChange} name="Category" type="select" classes="col-span-2" options={categoryOptions} />
                    <Input operation={handleChange} name="Reviews" type="number" classes="col-span-2" />
                    <Input operation={handleChange} name="Rating" type="number" classes="col-span-2" />
                    <Input operation={handleChange} name="Price" type="number" classes="col-span-2" />
                    <Input operation={handleChange} name="Image" type="file" classes="col-span-2" />
               </div>
               <div className="grid grid-cols-12 gap-5 font-semibold uppercase mb-6">
                    <Input operation={handleChange} name="For" type="select" classes="col-span-2" options={forOptions} />
                    <Input operation={handleChange} name="Tags" type="text" classes="col-span-4" />
                    <div className="col-span-1 flex items-center">
                         <h5 className="font-bold mr-6">Size:</h5>
                         {sizeOptions && sizeOptions.map((size, index) => (<Input key={index} operation={handleChange} name="Size" type="checkbox" id={size} classes="mr-6" />))}
                    </div>
                    <Input operation={handleChange} name="Description" type="textarea" classes="col-span-12 h-40" />
               </div>
               <div className="text-right text-sm">
                    <ButtonBlack type="submit" classes="mt-2 ml-4">Add This</ButtonBlack>
                    <ButtonWhite type="button" operation={() => { navigate(-1) }} classes="mt-2 ml-4">Cancel</ButtonWhite>
               </div>
          </form>
     )
}