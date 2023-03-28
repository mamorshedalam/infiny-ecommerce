import { useState } from 'react'
import ProductCart from '../components/productCart'
import ButtonWhite from '../components/Button/btnWhite'
import bigImg1 from '../assets/product-big-2.png'
import bigImg2 from '../assets/product-big-3.png'
import bigImg3 from '../assets/product-big.png'
import ButtonBlack from '../components/Button/btnBlack'


export default function ShopDetails() {
     const [count, setCount] = useState(1)
     const [bigImg, setBigImg] = useState(bigImg1)
     const [chooseSize, setChooseSize] = useState()
     const [chooseColor, setChooseColor] = useState()

     const sizes = ["xxl", "xl", "l", "m"];
     const colors = ["green", "orange", "blue"];

     const itemArray = [
          { key: 'S1202', status: "new", name: "Piqué Biker Jacket", colors: ["green", "orange", "blue"] },
          { key: 'S3202', status: "offer", name: "Multi-pocket Chest Bag", colors: ["red", "orange", "blue"] },
          { key: 'S4302', status: "sale", name: "Diagonal Textured Cap", colors: ["yellow", "orange", "blue"] },
          { key: 'S1212', status: "", name: "Lether Backpack", colors: ["green", "black", "blue"] },
     ];


     return (
          <main className="sl-container">
               <section className="flex pt-10">
                    <div className="basis-1/2">
                         <img src={bigImg} alt="" className="max-h-96 object-contain" />
                         <ul className="w-3/4 grid grid-cols-5 gap-3 mt-10 mx-auto">
                              <li className="border cursor-pointer p-2"><img onClick={() => setBigImg(bigImg1)} className="h-20 object-contain" src={bigImg1} alt="" /></li>
                              <li className="border cursor-pointer p-2"><img onClick={() => setBigImg(bigImg2)} className="h-20 object-contain" src={bigImg2} alt="" /></li>
                              <li className="border cursor-pointer p-2"><img onClick={() => setBigImg(bigImg3)} className="h-20 object-contain" src={bigImg3} alt="" /></li>
                         </ul>
                    </div>
                    <div className="basis-1/2">
                         <h2 className="font-bold text-2xl">Hooded thermal anorak</h2>
                         <div className="flex items-center my-3">
                              <ul className="flex mr-4">
                                   <li><svg className="w-4 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg></li>
                                   <li><svg className="w-4 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg></li>
                                   <li><svg className="w-4 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg></li>
                                   <li><svg className="w-4 fill-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" /></svg></li>
                                   <li><svg className="w-4 fill-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" /></svg></li>
                              </ul>
                              <span>- 5 reviews</span>
                         </div>
                         <div className="font-bold mb-6">
                              <ul>
                                   <li className="mb-2"><span className="font-normal text-zinc-400">SKU: </span>3812912</li>
                                   <li className="mb-2"><span className="font-normal text-zinc-400">Categories: </span>Clothes</li>
                                   <li className="mb-2"><span className="font-normal text-zinc-400">Tag: </span>Clothes, Skin, Body</li>
                              </ul>
                         </div>
                         <h3 className="font-bold text-4xl mb-6">$270.00 <span className="font-normal line-through text-zinc-400 text-xl ml-2.5">70.00</span></h3>
                         <div className="flex items-center mb-6">
                              <span className="mr-2">Size:</span>
                              <ul className="flex">
                                   {sizes && sizes.map((size, index) => (
                                        <li key={index} className="relative w-10 h-6 flex items-center justify-center font-bold uppercase mr-4">
                                             <label htmlFor={index} className={`absolute inset-0 text-center cursor-pointer border border-neutral-900 m-auto ${chooseSize == size ? "bg-neutral-900 text-white" : " bg-white text-neutral-900"}`}>{size}</label>
                                             <input id={index} type="radio" name="color" onClick={() => setChooseSize(size)} className={`invisible`} />
                                        </li>
                                   ))
                                   }
                              </ul>
                         </div>
                         <div className="flex items-center mb-6">
                              <span className="mr-2">Color:</span>
                              <ul className="flex">
                                   {colors && colors.map((color, index) => (
                                        <li key={index} className="relative w-7 h-7 flex items-center justify-center cursor-pointer mr-4">
                                             <label style={{ backgroundColor: color }} className={`absolute inset-0 flex w-5 h-5 rounded-full m-auto`}></label>
                                             <input type="radio" name="color" onClick={() => setChooseColor(color)} className={`block cursor-pointer after:absolute after:inset-0 after:rounded-full after:border after:border-zinc-400 ${chooseColor == color ? "opacity-100" : "opacity-0"}`} />
                                        </li>
                                   ))
                                   }
                              </ul>
                         </div>
                         <div className="flex items-start my-9">
                              <div className="flex font-bold items-center fill-neutral-900 mr-10 mt-3">
                                   <button onClick={() => setCount(Math.max(count - 1, 1))}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4"><path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg></button>
                                   <input id="inputValue" type="text" value={count} onChange={(e) => { setCount(parseInt(e.target.value)) }} className="w-12 text-center px-2 py-1" />
                                   <button onClick={() => setCount(Math.max(count + 1, 1))}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" /></svg></button>
                              </div>
                              <div className="flex flex-col gap-4">
                                   <ButtonBlack>add to cart</ButtonBlack>
                                   <ButtonWhite>ADD TO WISHLIST</ButtonWhite>
                              </div>
                         </div>
                         <div className="flex items-center">
                         </div>
                    </div>
               </section>
               <section className="pt-20">
                    <h3 className="text-center font-bold text-3xl mb-10">Description</h3>
                    <h4 className="font-bold text-xl mb-3">Hooded thermal anorak</h4>
                    <p>A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad. As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.</p>
               </section>
               <section className="pt-20">
                    <h3 className="text-center font-bold text-3xl mb-10">Related Product</h3>
                    <div className="flex flex-wrap">
                         {itemArray && itemArray.map((item) => {
                              return (
                                   <div key={item.key} className="basis-1/4 px-4">
                                        <ProductCart product={item} />
                                   </div>
                              )
                         })
                         }
                    </div>
               </section>
          </main>
     )
}