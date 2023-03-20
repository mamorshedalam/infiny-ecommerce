import ItemCart from "../components/itemCart";
import SidebarCart from "../components/sidebarCart";
import HeroSection from "../modules/hero";

export default function Shop() {
     const itemArray = [
          { key: 'S1202', status: "new", name: "Piqué Biker Jacket", colors: ["green", "orange", "blue"] },
          { key: 'S3202', status: "offer", name: "Multi-pocket Chest Bag", colors: ["red", "orange", "blue"] },
          { key: 'S4302', status: "sale", name: "Diagonal Textured Cap", colors: ["yellow", "orange", "blue"] },
          { key: 'S1212', status: "", name: "Lether Backpack", colors: ["green", "black", "blue"] },
     ]

     return (
          <>
               <HeroSection />

               <section className="sl-container flex flex-wrap py-24">

                    <aside className="basis-1/4 px-4">
                         <form className="relative mb-12">
                              <input type="text" placeholder="Search..." className="border pl-5 py-2.5" />
                              <button className="absolute right-2 top-1/2 -translate-y-1/2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 fill-zinc-400 -scale-x-100"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg></button>
                         </form>

                         <SidebarCart />
                    </aside>

                    <main className="basis-3/4 px-4">
                         <div className="flex flex-wrap justify-between items-center px-4 mb-10">
                              <div>
                                   <p>Showing <span>1–12</span> of <span>126</span> results</p>
                              </div>
                              <div className="flex items-center">
                                   <p className="w-20">Sort by:</p>
                                   <select name="" id="" className="font-bold rounded-none">
                                        <option value="default">Default</option>
                                        <option value="high">Price (High To Low)</option>
                                        <option value="low">Price (Low To High)</option>
                                   </select>
                              </div>
                         </div>
                         <div className="flex flex-wrap">
                              {itemArray && itemArray.map((item, index) => (
                                   <div key={index} className="basis-1/3 px-4"><ItemCart item={item} /></div>
                              ))}
                         </div>
                    </main>
               </section>
          </>
     )
}