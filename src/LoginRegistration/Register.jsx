import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import app from "../firebase/firebase.config";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/(?=.*[!#$%&? "])/.test(password)) {
      return setError("Don't have a special character");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return setError("Don't have a capital letter");
    } else if (password.length < 6) {
      return setError("Password cannot be less than 6 characters");
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(name, photo)
          .then(() => {
            const loggedProfile = result.user;
            console.log(loggedProfile);
          })
          .catch((error) => {
            console.log(error.message);
          });

        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Congratulation! Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Email Already Exist",
          showConfirmButton: false,
          timer: 1500,
        });
      });

    console.log(name, photo, email, password);
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
        <div className="max-w-[500px] w-[500px] my-4 mx-4 md:mx-auto bg-blue-950 p-8">
          <h2 className="text-4xl font-bold text-white">Register</h2>
          <form onSubmit={handleRegister} className="mt-8 space-y-4">
            <div className="form-control">
              <label className="text-white">Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="p-2 mt-1 text-gray-200 bg-[#1e3b8a75] border border-blue-800"
              />
            </div>
            <div className="form-control">
              <label className="text-white">Photo URL</label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="p-2 mt-1 text-gray-200 bg-[#1e3b8a75] border border-blue-800"
              />
            </div>
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
                  className="p-2 mt-1 w-full text-gray-200 bg-[#1e3b8a75] border border-blue-800"
                />
                <small
                  onClick={() => setShow(!show)}
                  className="-ml-14 mt-1 cursor-pointer text-gray-200"
                >
                  {show ? <span>Hide</span> : <span>Show</span>}
                </small>
              </div>
              <p className="text-red-500">
                <small>{error}</small>
              </p>
            </div>
            <div className="form-control">
              <input
                type="submit"
                value="Register"
                className="p-2 mt-1 text-xl font-semibold text-white bg-blue-800 hover:bg-blue-700 border border-blue-800 shadow-xl"
              />
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="w-full text-[20px] flex justify-center items-center gap-2 font-semibold mt-4 text-white"
          >
            <span className="font-bold text-blue-500">
              <FaGoogle />
            </span>
            Continue With Google
          </button>
          <p className="text-center mt-2 text-white">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
