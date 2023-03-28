import { useNavigate } from "react-router-dom";
import Input from "../components/Input/inputField";
import ButtonBlack from "../components/Button/btnBlack";
import { useAuth } from "../contexts/AuthContext";
import { useReducer, useState } from "react";
import { initialState, reducer } from "../reducers/stateReducer";

export default function DashLogin() {
     const [status, dispatch] = useReducer(reducer, initialState);
     const navigate = useNavigate();
     const { login } = useAuth();
     const [user, setUser] = useState({
          Email: "",
          Password: ""
     })


     async function handleSubmit(e) {
          e.preventDefault();
          try {
               dispatch({ type: "SUCCESS", loading: true });
               await login(user.Email, user.Password);
               navigate("/dashboard/list");
          } catch (err) {
               dispatch({ type: "FAIL", error: "Fail to Login, Try Again!" });
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
               <ButtonBlack disabled={status.loading} classes="w-full text-sm mt-6">Login</ButtonBlack>
          </form>
     )
}