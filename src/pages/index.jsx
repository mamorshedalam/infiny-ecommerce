import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import ProductCart from '../components/productCart'
import saleImg from '../assets/product-sale.png'
import instagramImg from '../assets/instagram-1.jpg'


export default function Index() {

     const itemArray = [
          { key: 'S1202', status: "new", name: "Piqué Biker Jacket", colors: ["green", "orange", "blue"] },
          { key: 'S3202', status: "offer", name: "Multi-pocket Chest Bag", colors: ["red", "orange", "blue"] },
          { key: 'S4302', status: "sale", name: "Diagonal Textured Cap", colors: ["yellow", "orange", "blue"] },
          { key: 'S1212', status: "", name: "Lether Backpack", colors: ["green", "black", "blue"] },
     ]

     return (
          <main>
               <section className="bg-stone-100" style={{ backgroundImage: `url(${heroImg})` }}>
                    <div className="relative flex items-center h-[85vh] sl-container">
                         <div className="basis-1/3">
                              <h2 className="uppercase font-bold tracking-widest text-red-500">summer collection</h2>
                              <h1 className="font-bold leading-normal text-5xl my-8">Fall - Winter Collections 2023</h1>
                              <p className="leading-loose">A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
                              <Link to={`/shop`} className="w-60 bg-neutral-900 text-center uppercase font-bold tracking-[5px] text-white py-4 mt-8">shop now</Link>
                         </div>
                    </div>
               </section>

               <section className="sl-container py-24">
                    <ul className="flex items-center justify-center mb-10">
                         <li className="font-bold text-2xl mr-20"><button>Best Sellers</button></li>
                         <li className="font-bold text-2xl text-zinc-400 mr-20"><button>New Arrivals</button></li>
                         <li className="font-bold text-2xl text-zinc-400 mr-20"><button>Hot Sales</button></li>
                    </ul>
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

               <section className="bg-stone-100 py-32">
                    <div className="flex items-center max-w-[1600px] w-4/5 mx-auto">
                         <div className="relative basis-1/4 before:absolute before:top-0 before:-left-1/2 before:w-80 before:h-full before:bg-white before:z-10">
                              <h3 className="relative leading-loose text-4xl text-zinc-400 py-10 z-20">Clothings Hot<br /><span className="font-bold text-neutral-900">Shoes Collection</span><br />Accessories</h3>
                         </div>
                         <div className="relative basis-1/3">
                              <img src={saleImg} alt="sale" />
                              <div className="absolute right-0 -top-10 flex flex-col justify-center items-center w-24 h-24 rounded-full bg-neutral-900 text-white">
                                   <span>Sale Of</span>
                                   <h4 className="font-bold text-xl">$29.99</h4>
                              </div>
                         </div>
                         <div className="basis-1/3 ml-auto">
                              <h2 className="uppercase font-bold tracking-widest text-red-500 mb-2">deal of the week</h2>
                              <h3 className="font-bold leading-tight text-4xl">Multi-pocket Chest Bag Black</h3>
                              <div className="flex flex-wrap my-5">
                                   <div className="basis-1/4 text-center">
                                        <span className="relative block font-bold text-4xl mb-2 after:absolute after:content-[':'] after:right-0 after:top-1/2 after:-translate-y-1/2">30</span>
                                        <p>Days</p>
                                   </div>
                                   <div className="basis-1/4 text-center">
                                        <span className="relative block font-bold text-4xl mb-2 after:absolute after:content-[':'] after:right-0 after:top-1/2 after:-translate-y-1/2">04</span>
                                        <p>Hours</p>
                                   </div>
                                   <div className="basis-1/4 text-center">
                                        <span className="relative block font-bold text-4xl mb-2 after:absolute after:content-[':'] after:right-0 after:top-1/2 after:-translate-y-1/2">59</span>
                                        <p>Minutes</p>
                                   </div>
                                   <div className="basis-1/4 text-center">
                                        <span className="relative block font-bold text-4xl mb-2">21</span>
                                        <p>Seconds</p>
                                   </div>
                              </div>
                              <Link to={`/shop`} className="flex justify-center items-center w-60 bg-neutral-900 uppercase font-bold tracking-[5px] text-white py-4 mt-8">shop now</Link>
                         </div>
                    </div>
               </section>

               <section className="sl-container py-32">
                    <div className="flex flex-wrap items-center">
                         <div className="grid grid-cols-3 basis-2/3 pr-10">
                              <img src={instagramImg} alt="" />
                              <img src={instagramImg} alt="" />
                              <img src={instagramImg} alt="" />
                              <img src={instagramImg} alt="" />
                              <img src={instagramImg} alt="" />
                              <img src={instagramImg} alt="" />
                         </div>
                         <div className="basis-1/3">
                              <h2 className="font-bold text-4xl mb-8">Instagram</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              <h3 className="font-bold text-3xl text-red-500 mt-12">#Male_Fashion</h3>
                         </div>
                    </div>
               </section>
          </main>
     )
}