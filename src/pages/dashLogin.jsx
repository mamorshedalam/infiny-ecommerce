import { Form, redirect } from "react-router-dom";
import Input from "../components/inputField";

export async function action({ request }) {
     const formData = await request.formData();
     const user = Object.fromEntries(formData);
     console.log(user);
     return redirect(`/dashboard/list`);
}

export default function DashLogin() {
     return (
          <Form method="post" className="max-w-lg mx-auto ">
               <Input type="email" name="Email" classes="text-zinc-400 text-sm my-3" />
               <Input type="password" name="Password" classes="text-zinc-400 text-sm my-3" />
               <button className="w-full bg-neutral-900 text-center font-bold uppercase tracking-widest text-white text-sm py-3 mt-6">Login</button>
          </Form>
     )
}