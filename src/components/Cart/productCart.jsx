import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCart({ product }) {
     const [chooseSize, setChooseSize] = useState()

     const { SKU, Name, Highlight, Image, Price, Sizes } = product;

     function handleSubmit(e) {
          e.preventDefault();
          let localData = JSON.parse(localStorage.getItem("localData")) || [];
          let dataExists = false;

          const storeObj = {
               SKU: SKU,
               Name: Name,
               Image: Image,
               Price: Price,
               Size: chooseSize,
               Quantity: 1,
          }

          for (let i = 0; i < localData.length; i++) {
               if (storeObj.SKU === localData[i].SKU) {
                    localData[i] = storeObj;
                    dataExists = true;
               }
          }

          if (!dataExists) {
               localData.push(storeObj)
          }

          localStorage.setItem("localData", JSON.stringify(localData))
     }

     return (
          <div className="group relative overflow-hidden">
               <div className="relative">
                    <img src={Image} alt="item" />
                    {Highlight !== "non" ? <span className={`absolute top-5 left-0 ${Highlight == "new" ? "bg-white text-neutral-900" : Highlight == "sale" ? "bg-neutral-900 text-white" : "bg-blue-500 text-white"} font-bold tracking-widest uppercase text-xs py-1 px-4`}>{Highlight}</span> : ""}
                    <ul className="absolute top-5 -right-14 opacity-0 space-y-2.5 group-hover:right-5 group-hover:opacity-100 sl-animated-xl z-30">
                         <li className="h-9 w-9 flex justify-center items-center bg-white hover:text-red-500 sl-animated-xl"><button><FontAwesomeIcon icon={faHeart} /></button></li>
                    </ul>
                    <Link to={`/shop/${SKU}`} className="absolute inset-0 w-full h-full z-20" />
               </div>
               <form onSubmit={handleSubmit} className="relative mt-2">
                    <h3 className="font-semibold truncate opacity-100 group-hover:opacity-0 sl-animated-lg">{Name}</h3>
                    <button href="" className="absolute -top-10 left-0 font-bold text-red-500 opacity-0 group-hover:top-0 group-hover:opacity-100 sl-animated-xl">+ Add To Cart</button>
                    <ul className="flex my-2">
                         <li><svg className="w-4 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg></li>
                         <li><svg className="w-4 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg></li>
                         <li><svg className="w-4 fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg></li>
                         <li><svg className="w-4 fill-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" /></svg></li>
                         <li><svg className="w-4 fill-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" /></svg></li>
                    </ul>
                    <h4 className="font-bold text-lg">{Price}TK</h4>
                    <div className="absolute bottom-1.5 right-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 sl-animated-xl">
                         <ul className="flex">
                              {Sizes && Sizes.map((size, index) => (
                                   <li key={SKU + index} className="relative w-10 h-5 flex items-center justify-center font-bold uppercase mr-4">
                                        <label htmlFor={SKU + index} className={`absolute inset-0 text-center text-sm cursor-pointer border border-neutral-900 m-auto ${chooseSize == size ? "bg-neutral-900 text-white" : " bg-white text-neutral-900"}`}>{size}</label>
                                        <input id={SKU + index} type="radio" name="color" onClick={() => setChooseSize(size)} className={`invisible`} />
                                   </li>
                              ))
                              }
                         </ul>
                    </div>
               </form>
          </div>
     )
}