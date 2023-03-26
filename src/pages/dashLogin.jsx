export default function DashLogin(){
     return(
          <form className="max-w-lg mx-auto ">
               <input type="email" placeholder="Email" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
               <input type="password" placeholder="Password" className="text-zinc-400 text-sm border pl-4 py-3 my-3" />
               <button className="w-full bg-neutral-900 text-center font-bold uppercase tracking-widest text-white text-sm py-3 mt-6">Login</button>
          </form>
     )
}