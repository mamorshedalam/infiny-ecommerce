import { useReducer, useState } from "react";
import { getDatabase, ref, push, set } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input/inputField";
import Button from "../../components/Button/button";
import { initialState, reducer } from "../../reducers/stateReducer";


export default function DashProductEdit() {
     const { sku } = useParams()
     const navigate = useNavigate()
     const [status, dispatch] = useReducer(reducer, initialState)
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

     async function handleSubmit(e) {   // submit data
          e.preventDefault();
          if (confirm("Confirm submit!")) {
               const db = getDatabase();
               await set(ref(db, 'products/' + object["SKU"]), {
                    SKU: object["SKU"],
                    Brand: object["Brand"],
                    Name: object["Name"],
                    Status: object["Status"],
                    Category: object["Category"],
                    Reviews: object["Reviews"],
                    Rating: object["Rating"],
                    Price: object["Price"],
                    Image: object["Image"],
                    For: object["For"],
                    Description: object["Description"],
                    Tags: object["Tags"],
                    Sizes: object["Sizes"]
               })
                    .then(() => {
                         dispatch({ type: "SUCCESS", loading: true });
                         alert("Uploaded successfully!");
                         navigate("/dashboard");
                    })
                    .catch((err) => {
                         console.log(err);
                         dispatch({ type: "FAIL", error: "Fail to Upload Data, Try Again!" });
                    })
          }
     }

     function handleChange(e) {
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
          } else if (field.name === "Size") { // create array of sizes
               let checkedSizes = []
               const sizeFields = document.querySelectorAll("input[name=Size]:checked")

               sizeFields.forEach(item => checkedSizes = [...checkedSizes, item.id])
               setObject({ ...object, Sizes: checkedSizes })
          } else {
               const newObject = { ...object }
               newObject[field.name] = field.value
               setObject(newObject)
          }
     }
     return (
          <form onSubmit={(e) => handleSubmit(e)} method="post" className="grid grid-cols-12 w-full gap-5 text-sm">
               <Input operation={handleChange} name="SKU" type="text" classes="col-span-2 uppercase" />
               <Input operation={handleChange} name="Brand" type="text" classes="col-span-3" />
               <Input operation={handleChange} name="Name" type="text" classes="col-span-7" />
               <Input operation={handleChange} name="Status" type="select" classes="col-span-2" options={statusOptions} />
               <Input operation={handleChange} name="Category" type="select" classes="col-span-2" options={categoryOptions} />
               <Input operation={handleChange} name="Reviews" type="number" classes="col-span-2" />
               <Input operation={handleChange} name="Rating" type="number" classes="col-span-2" />
               <Input operation={handleChange} name="Price" type="number" classes="col-span-2" />
               <Input operation={handleChange} name="Image" type="file" classes="col-span-2" />
               <Input operation={handleChange} name="For" type="select" classes="col-span-2" options={forOptions} />
               <Input operation={handleChange} name="Tags" type="text" classes="col-span-4" />
               <div className="col-span-1 flex items-center">
                    <h5 className="font-bold mr-6">Size:</h5>
                    {sizeOptions && sizeOptions.map((size, index) => (<Input key={index} operation={handleChange} name="Size" type="checkbox" id={size} classes="mr-6" />))}
               </div>
               <Input operation={handleChange} name="Description" type="textarea" classes="col-span-12 h-40" />
               <div className="col-span-12 text-right text-sm">
                    <Button disabled={status.loading} type="submit" classes="mt-2 ml-4">Add This</Button>
                    <Button disabled={status.loading} variant="white" type="button" operation={() => { navigate(-1) }} classes="mt-2 ml-4">Cancel</Button>
               </div>
          </form>
     )
}