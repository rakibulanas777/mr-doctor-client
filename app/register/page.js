"use client";
import React, { useState } from "react";
import avater from "../../public/profile.png";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  //   const handleImage = async (e) => {
  //     const file = e.target.files[0];
  //     let formData = new FormData();
  //     formData.append("image", file);
  //     setUploading(true);
  //     try {
  //       const { data } = await axios.post(
  //         "https://food-hut-server.onrender.com/api/v1/all/upload-image",
  //         formData
  //       );
  //       setUploading(false);
  //       setImage({
  //         url: data.url,
  //         public_id: data.public_id,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const navigate = useNavigate();

  //   const handleOnSUbmit = (event) => {
  //     event.preventDefault();
  //     const form = event.target;
  //     const name = form.name.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     const passwordConfrim = form.confrimPassword.value;
  //     const profileImage = image?.url;
  //     const userData = { name, email, profileImage, password, passwordConfrim };
  //     console.log(userData);

  //     fetch("https://food-hut-server.onrender.com/api/v1/user/register", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(userData),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.success) {
  //           localStorage.setItem("token", data.data.token);
  //           toast.success(data.message);

  //           form.reset();

  //           navigate("/");
  //         } else {
  //           toast.error(data.message);
  //         }
  //       });
  //   };

  return (
    <div className="register">
      <div className="w-full mx-auto pt-[16vh]">
        <form className=" ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-4 flex flex-col space-y-3">
          <label htmlFor="file-upload" className="custom-file-upload">
            <Image
              src={avater}
              alt="Logo"
              className="logo mx-auto cursor-pointer"
              width={100}
              height={100}
            />
          </label>
          <label className="block text-center text-gray-900 text-base">
            Profile Picture
          </label>
          <input
            type="file"
            label="Image"
            name="myFile"
            id="file-upload"
            className="hidden"
            accept=" .jpeg, .png, .jpg"
            // onChange={handleImage}
          />

          <div className="">
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              className=" shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className=" shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className=" shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <input
              type="password"
              placeholder="confrim Password"
              name="confrimPassword"
              className=" shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            className=" bg-gradient-to-r lowercase from-secondary to-primary btn glass text-white hover:!bg-secondary w-full rounded focus:outline-none focus:shadow-outlines"
            type="submit"
          >
            Register
          </button>

          <Link
            href="/login"
            className=" text-primary mx-auto !text-center font-semibold  rounded"
          >
            Already Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
