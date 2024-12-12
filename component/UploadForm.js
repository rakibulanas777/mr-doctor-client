"use-client";
import React, { useState } from "react";
import { toast } from "react-toastify";
//import logo from "../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Upload = () => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const file = e.target.image.files[0];
    if (!file) {
      toast.error("Please upload an image!");
      return;
    }

    // Simulate file upload process
    toast.success("Image uploaded successfully!");
    e.target.reset();
    setPreviewUrl(null);
  };

  return (
    <div className="upload">
      <div className="w-full mx-auto pt-[10vh] ">
        <form
          onSubmit={handleOnSubmit}
          className="ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-5"
        >
          <Link href="/" passHref>
            {/* <Image
              src={logo}
              alt="Logo"
              className="logo mx-auto cursor-pointer mb-6"
              width={150}
              height={50}
            /> */}
          </Link>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="image">
              Upload Image
            </label>
            <input
              className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {previewUrl && (
            <div className="mb-4">
              <p className="text-gray-700 text-sm mb-2">Image Preview:</p>
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-40 object-cover rounded-md border"
              />
            </div>
          )}

          <button
            className="bg-gradient-to-r lowercase from-secondary to-primary btn glass text-white hover:!bg-secondary w-full rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Upload Image
          </button>

          <Link
            href="/"
            className="text-primary mx-auto !text-center font-semibold mb-3 py-2 px-4"
          >
            back to home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Upload;
