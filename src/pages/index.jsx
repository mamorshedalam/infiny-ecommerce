import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import Item from '../components/item'


export default function Index() {
     

     return (
          <main>
               <section className="bg-stone-100" style={{ backgroundImage: `url(${heroImg})` }}>
                    <div className="relative flex items-center h-[85vh] sl-container">
                         <div className="basis-1/3">
                              <h2 className="uppercase font-bold text-red-500">summer collection</h2>
                              <h1 className="font-bold leading-normal text-5xl my-8">Fall - Winter Collections 2023</h1>
                              <p className="leading-loose">A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
                              <Link to={`/shop`} className="flex justify-center items-center w-60 bg-neutral-900 uppercase font-bold tracking-[5px] text-white fill-white rounded py-4 mt-8 hover:fill-red-500 sl-animated-lg">shop now <svg className="w-4 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></Link>
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
                         <div className="basis-1/4 px-4 mb-10 overflow-hidden">
                              <Item />
                         </div>
                    </div>
               </section>
          </main>
     )
}