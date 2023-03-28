import { Form, redirect } from "react-router-dom";
import Input from "../components/inputField";
import ButtonBlack from "../components/Button/btnBlack";

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
               <ButtonBlack classes="w-full text-sm mt-6">Login</ButtonBlack>
          </Form>
     )
}