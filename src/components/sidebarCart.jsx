import { useState } from "react";

export default function SidebarCart() {
     const [isCollapsed, setIsCollapsed] = useState(true)

     const accordionToggle = () => {
          if (isCollapsed) {
               setIsCollapsed(false)
          } else {
               setIsCollapsed(true)
          }
     }
     return (
          <div className="border-b mb-12">
               <h4 onClick={accordionToggle} className="flex flex-wrap justify-between items-center font-bold uppercase text-lg cursor-pointer"><span>categories</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 fill-neutral-900"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg></h4>
               <ul className={`cardBar overflow-y-scroll mt-2.5 mb-5 ${isCollapsed ? "max-h-60" : "h-0"}`}>
                    <li><a href="" className="text-zinc-400 py-1 hover:text-neutral-900 sl-animated-lg"><span>Men</span> <span>(20)</span></a></li>
               </ul>
          </div>
     )
}