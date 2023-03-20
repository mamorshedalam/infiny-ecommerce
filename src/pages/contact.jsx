import HeroSection from "../modules/hero";

export default function Contact() {
     return (
          <main>
               <HeroSection />

               <section className="sl-container flex flex-wrap items-end py-24">
                    <div className="basis-1/2 px-4">
                         <h3 className="uppercase font-bold tracking-widest text-red-500">information</h3>
                         <h2 className="font-bold leading-tight text-5xl my-3">Contact Us</h2>
                         <p className="mb-9">As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
                         <div className="mt-6">
                              <h4 className="font-bold text-2xl mb-2">America</h4>
                              <span className="block mb-1">195 E Parker Square Dr, Parker, CO 801</span>
                              <span>+43 982-314-0958</span>
                         </div>
                         <div className="mt-6">
                              <h4 className="font-bold text-2xl mb-2">America</h4>
                              <span className="block mb-1">195 E Parker Square Dr, Parker, CO 801</span>
                              <span>+43 982-314-0958</span>
                         </div>
                    </div>
                    <div className="basis-1/2 px-4">
                         <form>
                              <div className="flex flex-wrap">
                                   <div className="basis-1/2 px-4 mb-6"><input type="text" placeholder="Name" className="border py-4 pl-5" /></div>
                                   <div className="basis-1/2 px-4 mb-6"><input type="email" placeholder="Email" className="border py-4 pl-5" /></div>
                                   <div className="basis-full px-4 mb-6"><textarea placeholder="Message" className="border py-4 pl-5 h-40"></textarea></div>
                                   <div className="basis-1/2 px-4 mb-6"><button className="bg-neutral-900 font-bold tracking-widest uppercase text-white py-3 px-8">send message</button></div>
                              </div>
                         </form>
                    </div>
               </section>
          </main>
     )
}