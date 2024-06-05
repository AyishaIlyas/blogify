import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess, signInFailure, signInStart } from "../redux/user/userSlice";


export default function SignUp(){
  const [formData, setFormData] =useState({});
  const {loading, error: errorMessage} = useSelector (state => state.user);
  const dispatch = useDispatch;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit= async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the field'));
    }
    try{
      dispatch (signInStart());
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false){
        dispatch (signInFailure());
      }
      
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/sign-in');
      }
    } catch(error){
     dispatch(signInFailure(error.message));
    }
  }

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
        <form className="flex flex-col gap-4" onSubmit = {handleSubmit}>
          <div>
            <Label value = "Your username"></Label>
            <TextInput type="text" placeholder="Username" id="username" onChange={handleChange}/>
          </div>
          <div>
            <Label value = "Your email"></Label>
            <TextInput type="email" placeholder="name@company.com" id="email" onChange={handleChange}/>
          </div>
          <div>
            <Label value = "Password"></Label>
            <TextInput type="password" placeholder="Password" id="password" onChange={handleChange}/>
          </div>
          <Button className="bg-gradient-to-r from-green-800 to-red-800" type ="submit" disable={loading}>
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Sign Up")
              
              
            }
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account</span>
          <Link to="/sign-in" className="text-blue-500">Sing In</Link>
        </div>
        {errorMessage && (
             <Alert className="mt-5" color="failure">
             {errorMessage}
           </Alert>
        )}

      </div>

    </div>
  </div>
}