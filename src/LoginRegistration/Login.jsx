import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import app from "../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Invalid Email or Password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    console.log(email, password);
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="max-w-[500px] w-[500px] mx-4 my-4 md:mx-auto bg-blue-950 p-8">
          <h2 className="text-4xl font-bold text-white">Login</h2>
          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div className="form-control">
              <label className="text-white">Your Email</label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="p-2 mt-1 text-gray-200 bg-[#1e3b8a75] border border-blue-800"
              />
            </div>
            <div className="form-control">
              <label className="text-white">Password</label>
              <div className="flex items-center">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="w-full p-2 mt-1 bg-[#1e3b8a75] border border-blue-800 text-gray-200"
                />
                <small
                  onClick={() => setShow(!show)}
                  className="-ml-10 mt-1 cursor-pointer text-gray-200"
                >
                  {show ? "Hide" : "show"}
                </small>
              </div>
            </div>
            <div className="form-control">
              <input
                type="submit"
                value="Login"
                className="p-2 cursor-pointer mt-1 font-semibold text-xl text-white bg-blue-800 hover:bg-blue-700 border border-blue-800 shadow-xl"
              />
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="w-full text-[20px] text-white flex justify-center items-center gap-2 font-semibold mt-4"
          >
            <span className="font-bold text-blue-500">
              <FaGoogle />
            </span>
            Login With Google
          </button>
          <p className="text-center mt-2 text-white">
            <small className="flex gap-2 justify-center items-center">
              New to this website?
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
