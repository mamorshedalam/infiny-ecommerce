import HeroSection from "../../modules/hero"
import aboutImg from "../../assets/about-us.jpg"
import testImg from "../../assets/testimonial-pic.jpg"
import authorImg from "../../assets/testimonial-author.jpg"
import teamImg from "../../assets/team-1.jpg"
import clientImg from "../../assets/client-2.png"

export default function About() {
     return (
          <main>
               <HeroSection />

               <section className="sl-container py-24">
                    <img src={aboutImg} alt="" />
                    <div className="flex flex-wrap mt-10">
                         <div className="basis-1/3 px-4">
                              <h3 className="font-bold text-2xl mb-2.5">Who Are We ?</h3>
                              <p>Contextual advertising programs sometimes have strict policies that need to be adhered too. Let’s take Google as an example.</p>
                         </div>
                         <div className="basis-1/3 px-4">
                              <h3 className="font-bold text-2xl mb-2.5">Who Are We ?</h3>
                              <p>Contextual advertising programs sometimes have strict policies that need to be adhered too. Let’s take Google as an example.</p>
                         </div>
                         <div className="basis-1/3 px-4">
                              <h3 className="font-bold text-2xl mb-2.5">Who Are We ?</h3>
                              <p>Contextual advertising programs sometimes have strict policies that need to be adhered too. Let’s take Google as an example.</p>
                         </div>
                    </div>
               </section>

               <section className="bg-stone-100">
                    <div className="flex flex-wrap items-center max-w-[1600px] mx-auto">
                         <div className="basis-1/2 px-40">
                              <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-16 fill-red-500 mx-auto"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" /></svg></span>
                              <p className="italic text-center text-xl mt-4 mb-6">“Going out after work? Take your butane curling iron with you to the office, heat it up,
                                   style your hair before you leave the office and you won’t have to make a trip back home.”</p>
                              <div className="flex items-center justify-center">
                                   <div className="w-20 h-20 rounded-full mr-5 overflow-hidden"><img src={authorImg} alt="" /></div>
                                   <div>
                                        <h4 className="font-bold text-lg mb-px">Augusta Schultz</h4>
                                        <p className="text-zinc-400">Fashion Design</p>
                                   </div>
                              </div>
                         </div>
                         <div className="basis-1/2"><img src={testImg} alt="" /></div>
                    </div>
               </section>

               <section className="sl-container flex items-center border-b py-24">
                    <div className="flex items-center basis-1/4 px-4">
                         <h5 className="font-bold text-6xl mr-2">102</h5>
                         <span className="font-bold text-lg text-neutral-700">Our <br />Clients</span>
                    </div>
                    <div className="flex items-center basis-1/4 px-4">
                         <h5 className="font-bold text-6xl mr-2">102</h5>
                         <span className="font-bold text-lg text-neutral-700">Our <br />Clients</span>
                    </div>
                    <div className="flex items-center basis-1/4 px-4">
                         <h5 className="font-bold text-6xl mr-2">102</h5>
                         <span className="font-bold text-lg text-neutral-700">Our <br />Clients</span>
                    </div>
                    <div className="flex items-center basis-1/4 px-4">
                         <h5 className="font-bold text-6xl mr-2">102</h5>
                         <span className="font-bold text-lg text-neutral-700">Our <br />Clients</span>
                    </div>
               </section>

               <section className="sl-container py-24">
                    <div className="font-bold text-center mb-12">
                         <h3 className="uppercase tracking-widest text-red-500 mb-2">our team</h3>
                         <h2 className="leading-tight text-5xl">Meet Our Team</h2>
                    </div>
                    <div className="flex flex-wrap">
                         <div className="group basis-1/4 px-4">
                              <div className="relative h-96 overflow-hidden">
                                   <img src={teamImg} alt="item" />
                                   <ul className="absolute top-5 -right-14 opacity-0 group-hover:right-5 group-hover:opacity-100 sl-animated-xl">
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900 mb-2.5"><button><svg className="w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></button></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900 mb-2.5"><button><svg className="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></button></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900"><button><svg className="h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></button></li>
                                   </ul>
                              </div>
                              <div className="mt-5">
                                   <h3 className="font-bold text-2xl">John Smith</h3>
                                   <span className="text-zinc-400">Fashion Design</span>
                              </div>
                         </div>
                         <div className="group basis-1/4 px-4">
                              <div className="relative h-96 overflow-hidden">
                                   <img src={teamImg} alt="item" />
                                   <ul className="absolute top-5 -right-14 opacity-0 group-hover:right-5 group-hover:opacity-100 sl-animated-xl">
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900 mb-2.5"><button><svg className="w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></button></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900 mb-2.5"><button><svg className="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></button></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900"><button><svg className="h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></button></li>
                                   </ul>
                              </div>
                              <div className="mt-5">
                                   <h3 className="font-bold text-2xl">John Smith</h3>
                                   <span className="text-zinc-400">Fashion Design</span>
                              </div>
                         </div>
                         <div className="group basis-1/4 px-4">
                              <div className="relative h-96 overflow-hidden">
                                   <img src={teamImg} alt="item" />
                                   <ul className="absolute top-5 -right-14 opacity-0 group-hover:right-5 group-hover:opacity-100 sl-animated-xl">
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900 mb-2.5"><button><svg className="w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></button></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900 mb-2.5"><button><svg className="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></button></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900"><button><svg className="h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></button></li>
                                   </ul>
                              </div>
                              <div className="mt-5">
                                   <h3 className="font-bold text-2xl">John Smith</h3>
                                   <span className="text-zinc-400">Fashion Design</span>
                              </div>
                         </div>
                         <div className="group basis-1/4 px-4">
                              <div className="relative h-96 overflow-hidden">
                                   <img src={teamImg} alt="item" />
                                   <ul className="absolute top-5 -right-14 opacity-0 group-hover:right-5 group-hover:opacity-100 sl-animated-xl">
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900 mb-2.5"><button><svg className="w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></button></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900 mb-2.5"><button><svg className="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></button></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-neutral-900"><button><svg className="h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></button></li>
                                   </ul>
                              </div>
                              <div className="mt-5">
                                   <h3 className="font-bold text-2xl">John Smith</h3>
                                   <span className="text-zinc-400">Fashion Design</span>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="sl-container">
                    <div className="font-bold text-center mb-12">
                         <h3 className="uppercase tracking-widest text-red-500 mb-2">partner</h3>
                         <h2 className="leading-tight text-5xl">Happy Clients</h2>
                    </div>
                    <div className="flex flex-wrap">
                         <a href="" className="basis-1/4 px-9 mb-20 opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="basis-1/4 px-9 mb-20 opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="basis-1/4 px-9 mb-20 opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="basis-1/4 px-9 mb-20 opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="basis-1/4 px-9 mb-20 opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="basis-1/4 px-9 mb-20 opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="basis-1/4 px-9 mb-20 opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="basis-1/4 px-9 mb-20 opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                    </div>
               </section>
          </main>
     )
}