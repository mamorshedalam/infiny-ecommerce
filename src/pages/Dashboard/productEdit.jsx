import { useEffect, useReducer, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/inputField";
import Button from "../../components/Button/button";
import { initialState, reducer } from "../../reducers/stateReducer";
import useLoadHighlight from "../../hooks/useLoadHighlight";
import useLoadCategory from "../../hooks/useLoadCategory";
import useLoadConsumer from "../../hooks/useLoadConsumer.jsx";
import useLoadSize from "../../hooks/useLoadSize";


export default function DashProductEdit() {
     const navigate = useNavigate()
     const [status, dispatch] = useReducer(reducer, initialState)
     const [sizeOption, setSizeOption] = useState("default")
     const [object, setObject] = useState({
          SKU: "",
          Brand: "",
          Name: "",
          Highlight: "",
          Category: "",
          Reviews: "",
          Rating: "",
          Price: "",
          Image: "",
          Consumer: "",
          Description: "",
          Tags: [],
          Sizes: [],
     });

     const { highlight } = useLoadHighlight()     // load highlight value from database
     const { category } = useLoadCategory()       // load category value from database
     const { consumer } = useLoadConsumer()       // load consumer value from database
     const { sizes } = useLoadSize(sizeOption)    // load size value from database

     async function handleSubmit(e) {   // submit data
          e.preventDefault();

          if (confirm("Confirm submit!")) {
               const db = getDatabase();
               await set(ref(db, 'products/' + object["SKU"].toUpperCase()), {
                    SKU: object["SKU"].toUpperCase(),
                    Brand: object["Brand"].toLowerCase(),
                    Name: object["Name"],
                    Highlight: object["Highlight"],
                    Category: object["Category"],
                    Reviews: object["Reviews"],
                    Rating: object["Rating"],
                    Price: object["Price"],
                    Image: object["Image"],
                    Consumer: object["Consumer"],
                    Description: object["Description"],
                    Tags: object["Tags"],
                    Sizes: object["Sizes"]
               })
                    .then(() => {
                         dispatch({ type: "SUCCESS", loading: true });
                         alert("Uploaded successfully!");
                         // navigate("/dashboard");
                    })
                    .catch((err) => {
                         console.log(err);
                         dispatch({ type: "FAIL", error: "Fail to Upload Data, Try Again!" });
                    })
          }
     }

     function handleChange(e) {
          const field = e.target;

          switch (field.name) {
               case "Image":  // convert image to base64 & store
                    const img = field.files[0]
                    const reader = new FileReader()
                    reader.readAsDataURL(img)
                    reader.onload = () => {
                         setObject({ ...object, Image: reader.result })
                    }
                    break;
               case "Tags":   // create array of keywords & store
                    const keywords = field.value.toLowerCase().split(', ')
                    setObject({ ...object, Tags: keywords })
                    break;
               case "Size":   // create array of sizes & store
                    let checkedSizes = []
                    const sizeFields = document.querySelectorAll("input[name=Size]:checked")
                    sizeFields.forEach(item => checkedSizes = [...checkedSizes, item.id])
                    setObject({ ...object, Sizes: checkedSizes })
                    break;
               default:       // store rest of fields
                    const newObject = { ...object }
                    newObject[field.name] = field.value
                    setObject(newObject)
                    break;
          }
     }
     return (
          <form onSubmit={(e) => handleSubmit(e)} method="post" className="grid grid-cols-12 w-full gap-5 text-sm">
               <Input operation={handleChange} name="SKU" type="text" classes="col-span-2 uppercase" />
               <Input operation={handleChange} name="Brand" type="text" classes="col-span-3" />
               <Input operation={handleChange} name="Name" type="text" classes="col-span-7" />
               {highlight && <Input operation={handleChange} name="Highlight" type="select" classes="col-span-2" options={highlight} />}
               {category && <Input operation={handleChange} name="Category" type="select" classes="col-span-2" options={category} />}
               <Input operation={handleChange} name="Reviews" type="number" classes="col-span-2" />
               <Input operation={handleChange} name="Rating" type="number" classes="col-span-2" />
               <Input operation={handleChange} name="Price" type="number" classes="col-span-2" />
               <Input operation={handleChange} name="Image" type="file" classes="col-span-2" />
               {consumer && <Input operation={handleChange} name="Consumer" type="select" classes="col-span-2" options={consumer} />}
               <Input operation={handleChange} name="Tags" type="text" classes="col-span-4" />
               <div className="col-span-1">
                    <ul className="flex gap-2 font-semibold mb-2">
                         <li className="bg-neutral-900 text-white px-2 py-px cursor-pointer"><button type="button" onClick={() => setSizeOption("default")}>Default</button></li>
                         <li className="bg-neutral-900 text-white px-2 py-px cursor-pointer"><button type="button" onClick={() => setSizeOption("inch")}>Inch</button></li>
                         <li className="bg-neutral-900 text-white px-2 py-px cursor-pointer"><button type="button" onClick={() => setSizeOption("kids")}>Kids</button></li>
                    </ul>
                    <div className="flex items-center">
                         <h5 className="font-bold mr-2">Size:</h5>
                         {sizes && sizes.map((size, index) => (<Input key={index} operation={handleChange} name="Size" type="checkbox" id={size} classes="mr-4" />))}
                    </div>
               </div>
               <Input operation={handleChange} name="Description" type="textarea" classes="col-span-12 h-40" />
               <div className="col-span-12 text-right text-sm">
                    <Button disabled={status.loading} type="submit" classes="mt-2 ml-4">Add This</Button>
                    <Button disabled={status.loading} variant="white" type="button" operation={() => { navigate(-1) }} classes="mt-2 ml-4">Cancel</Button>
               </div>
          </form>
     )
}