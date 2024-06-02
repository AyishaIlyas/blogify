import { Button, Label, TextInput } from "flowbite-react";
import {Link} from "react-router-dom";



export default function SingUp(){
  return <div className = "min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
      {/* left */}
      <div className="flex-1">
      <Link to="/" className="font-bold dark:text-white text-4xl">
        <span className="px-2 py-1 bg-gradient-to-r from-green-900 via-red-900 to-black rounded-lg text-white">
          Blogify
        </span>
      </Link>
      <p className="text-sm mt-5">
        A simple blog website to share your thoughts and ideas with the world. You can sign up with your email or with your Google account.
      </p>



      </div>
      {/* right */}
      <div className="flex-1"> 
        <form className="flex flex-col gap-4">
          <div>
            <Label value = "Your username"></Label>
            <TextInput type="text" placeholder="Username" id="username"/>
          </div>
          <div>
            <Label value = "Your email"></Label>
            <TextInput type="text" placeholder="name@company.com" id="email"/>
          </div>
          <div>
            <Label value = "Password"></Label>
            <TextInput type="text" placeholder="Password" id="password"/>
          </div>
          <Button className="bg-gradient-to-r from-green-800 to-red-800" type ="submit">
            Sign Up
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account</span>
          <Link to="/sing-in" className="text-blue-500">Sing In</Link>
        </div>

      </div>

    </div>
  </div>
}