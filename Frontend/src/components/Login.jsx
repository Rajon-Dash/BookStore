import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


function Login() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form  onSubmit={handleSubmit(onSubmit)} >
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            </form>
          <h3 className="font-bold text-lg ">
            Login!
          </h3>
          <div className="mt-3 space-y-2">
            <span>Email</span> <br />
            <input
              className="w-80 px-3 py-2 border rounded-md outline-none"
              type="email"
              name=""
              id=""
              placeholder="enter your email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="mt-3 space-y-2">
            <span>Password</span> <br />
            <input
              className="w-80 px-3 py-2 border rounded-md outline-none"
              type="password"
              name=""
              id=""
              placeholder="enter your password"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span  className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700">Login</button>
           <p>Not registered? 
           <Link to="/signup">
           <span  className="underline text-blue-500 cursor-pointer"> signup</span>
           </Link>
            </p>
          </div>
          </form>

        </div>
      </dialog>
    </div>
  );
}

export default Login;
