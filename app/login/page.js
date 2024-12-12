"use-client";
import React from "react";
import { toast } from "react-toastify";

import logo from "../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const handleOnSubmit = async (e) => {
    // e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // const loginData = { email, password };
    // fetch("https://doc-finder.onrender.com/api/v1/user/login", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(loginData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.success) {
    //       localStorage.setItem("token", data.data.token);
    //       toast.success(data.message);
    //       e.target.reset();
    //       router.push("/"); // Use router.push for navigation
    //     } else {
    //       toast.error(data.message);
    //     }
    //   });
  };

  return (
    <div className="login">
      <div className="w-full mx-auto pt-[20vh] h-screen">
        <form className="ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-5">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="Logo"
              className="logo mx-auto cursor-pointer mb-6"
              width={150}
              height={50}
            />{" "}
          </Link>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow-sm appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
            />
          </div>

          <button
            className="bg-gradient-to-r lowercase from-secondary to-primary btn glass text-white hover:!bg-secondary w-full rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>

          <Link
            href="/register"
            className="text-primary mx-auto !text-center font-semibold mb-3 py-2 px-4"
          >
            create an account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
