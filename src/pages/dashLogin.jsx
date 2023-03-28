import { redirect, useNavigate } from "react-router-dom";
import Input from "../components/Input/inputField";
import ButtonBlack from "../components/Button/btnBlack";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export default function DashLogin() {
     const navigate = useNavigate();
     const { login } = useAuth();
     const [error, setError] = useState();
     const [loading, setLoading] = useState();
     const [user, setUser] = useState({
          Email: "",
          Password: ""
     })


     async function handleSubmit(e) {
          e.preventDefault();
          try {
               setError("");
               setLoading(true);
               await login(user.Email, user.Password);
               navigate("/dashboard/list");
          } catch (err) {
               console.log(err);
               setLoading(false);
               setError("Failed to login");
          }
     }

     function handleChange(e) {
          const newUser = { ...user };
          newUser[e.target.name] = e.target.value;
          setUser(newUser);
     }

     return (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto ">
               <Input operation={handleChange} type="email" name="Email" classes="text-zinc-400 text-sm my-3" />
               <Input operation={handleChange} type="password" name="Password" classes="text-zinc-400 text-sm my-3" />
               <ButtonBlack disabled={loading} classes="w-full text-sm mt-6">Login</ButtonBlack>
          </form>
     )
}