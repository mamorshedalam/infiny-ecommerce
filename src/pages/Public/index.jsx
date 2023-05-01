import { Link } from 'react-router-dom'
import heroImg from '../../assets/hero.jpg'
import ProductCart from '../../components/Cart/productCart'
import saleImg from '../../assets/product-sale.png'
import instagramImg from '../../assets/instagram-1.jpg'
import Button from '../../components/Button/button'
import useFilterData from '../../hooks/useFilterData'
import { useEffect, useMemo, useState } from 'react'
import LoadingMessage from '../../components/Spinner/loadingMessage'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';


export default function Index() {
     const [active, setActive] = useState("new")
     const { status, data } = useFilterData("Highlight", active);

     // COUNTDOWN
     const parsedDeadline = useMemo(() => Date.parse("November, 12, 2023"), []);
     const [time, setTime] = useState(parsedDeadline - Date.now());

     const SECOND = 1000;
     const MINUTE = SECOND * 60;
     const HOUR = MINUTE * 60;
     const DAY = HOUR * 24;

     useEffect(() => {
          const interval = setInterval(
               () => setTime(parsedDeadline - Date.now()),
               1000,
          );
          return () => clearInterval(interval);
     }, [parsedDeadline]);


     return (
          <main>
               <section className="bg-stone-100" style={{ backgroundImage: `url(${heroImg})` }}>
                    <div className="relative flex items-center min-h-[85vh] py-20 sl-container">
                         <div className="basis-1/3">
                              <h2 className="uppercase font-bold tracking-widest text-red-500">summer collection</h2>
                              <h1 className="font-bold leading-normal text-5xl my-8">Fall - Winter Collections 2023</h1>
                              <p className="leading-loose">A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
                              <Link to={`/shop`} className="mt-8"><Button>shop now</Button></Link>
                         </div>
                    </div>
               </section>

               <section className="sl-container py-24">
                    <ul className="flex items-center justify-center mb-10">
                         <li onClick={() => setActive("offer")} className={`font-bold text-2xl mr-20 ${active == "offer" ? "text-neutral-900" : "text-zinc-400"}`}><button>Offer Sellers</button></li>
                         <li onClick={() => setActive("new")} className={`font-bold text-2xl mr-20 ${active == "new" ? "text-neutral-900" : "text-zinc-400"}`}><button>New Arrivals</button></li>
                         <li onClick={() => setActive("sale")} className={`font-bold text-2xl mr-20 ${active == "sale" ? "text-neutral-900" : "text-zinc-400"}`}><button>Hot Sales</button></li>
                    </ul>
                    {status.error && <p className="text-center">There wsa an error!</p>}
                    {!status.loading && data.length === 0 && <p className="text-center">No data found</p>}
                    {status.loading && <LoadingMessage text="Product" />}
                    {data.length > 0 && <Swiper modules={[Autoplay]}
                         spaceBetween={30}
                         slidesPerView={4}
                         loop={true}
                         autoplay={{
                              delay: 1500,
                         }}>
                         {data && data.map((product, index) => (
                              index < 6 ? <SwiperSlide key={product["SKU"]}><ProductCart product={product} /></SwiperSlide> : ""
                         ))}
                    </Swiper>}
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
                                        <span className="relative block font-bold text-4xl mb-2 after:absolute after:content-[':'] after:right-0 after:top-1/2 after:-translate-y-1/2">{`${Math.floor(time / DAY)}`}</span>
                                        <p>Days</p>
                                   </div>
                                   <div className="basis-1/4 text-center">
                                        <span className="relative block font-bold text-4xl mb-2 after:absolute after:content-[':'] after:right-0 after:top-1/2 after:-translate-y-1/2">{`${Math.floor(time / HOUR) % 24}`}</span>
                                        <p>Hours</p>
                                   </div>
                                   <div className="basis-1/4 text-center">
                                        <span className="relative block font-bold text-4xl mb-2 after:absolute after:content-[':'] after:right-0 after:top-1/2 after:-translate-y-1/2">{`${Math.floor(time / MINUTE) % 60}`}</span>
                                        <p>Minutes</p>
                                   </div>
                                   <div className="basis-1/4 text-center">
                                        <span className="relative block font-bold text-4xl mb-2">{`${Math.floor(time / SECOND) % 60}`}</span>
                                        <p>Seconds</p>
                                   </div>
                              </div>
                              <Link to={`/shop`} className="mt-8"><Button type="button">shop now</Button></Link>
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