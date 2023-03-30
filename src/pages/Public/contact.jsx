import HeroSection from "../modules/hero";
import ButtonBlack from "../components/Button/button";
import Input from "../components/Input/inputField";

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
                         <form className="grid grid-cols-2 gap-6">
                                   <Input name="Name" type="text" classes="col-span-1" />
                                   <Input name="Email" type="email" classes="col-span-1" />
                                   <Input name="Message" type="textarea" classes="col-span-2 h-40" />
                                   <div className="col-span-2 text-right"><ButtonBlack>send message</ButtonBlack> </div>
                         </form>
                    </div>
               </section>
          </main>
     )
}