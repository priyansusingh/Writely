import { ChangeEvent, useState} from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@priyansusingh/digital-common";
import axios from "axios"
import { BACKEND_URL } from "../config";

export const Auth =({type}: {type:'signup' | 'signin'})=>{
    const navigate = useNavigate()
    const [postInput,setPostInputs] = useState<SignupInput>({
        email:"",
        password:"",
        name:""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup":"signin"}`,postInput)
        const jwt = response.data;
        localStorage.setItem("token",jwt);
        navigate("/blogs")
        } catch(e){
            //aler the user here that the request not sent
            return console.error("request not sent",e);
            
        }
    }

    return <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">

      <div>
      <div className="text-3xl font-extrabold">
      Create account
      </div>

      <div className="text-slate-400">
        {type === "signin"? "Dont have an account?":"Already Have and account?"} <Link className="pl-2 underline" to={type === "signin"?"/signup":"/signin"}>{type === "signin"?"Signup":"Signin"}</Link>
      </div>

      <div className="pt-4">

      {type === "signup"?  <LabelledInput label="username" placeholder="John doe" onChange={(e)=>{ 
          setPostInputs({
            ...postInput,
            name: e.target.value
          })
       }}/>:null}

      <LabelledInput label="Email address" placeholder="John@example.com" onChange={(e)=>{ 
          setPostInputs({
            ...postInput,
            email: e.target.value
          })
       }}/>

<LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e)=>{ 
          setPostInputs({
            ...postInput,
            password: e.target.value
          })
       }}/>
       
      <div className=" pt-4">
      <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">{type === "signup"?"Sign up":"Sign in"}</button>
      </div>
      </div>
      </div>
   
      </div>
    </div>
}

interface LabelledInputType {
    label:string;
    placeholder: string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
    type?:string
}

function LabelledInput({label, placeholder,onChange, type}:LabelledInputType){
     
    return <div className="pt-2">
       <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">{label}</label>
       <input  onChange={onChange} type = {type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
</div>
}