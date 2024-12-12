"use client";
import React, { Fragment, useRef, useState } from "react";
import chatBotIcon from "../../public/chat-bot_13889187.png";
import profileImage from "../../public/profile.png";
import Image from "next/image";

const Chat = () => {
  const inputRef = useRef();
  const [responses, setResponse] = useState([]);

  const OnHandleSubmit = async (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;

    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sentence: inputValue }),
      });
      const data = await res.json();

      console.log(data);

      setResponse((prevResponses) => [
        ...prevResponses,
        {
          userInput: inputValue,
          botResponse: data.response,
        },
      ]);
    } catch (error) {
      console.log(error);
    }

    inputRef.current.value = "";
  };

  console.log(responses);
  return (
    <div className="relative !z-50">
      <div className="container px-10 mx-auto relative py-6 !z-50">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-400"></div>
          <div className="col-span-3 relative p-5 bg-white/80 ">
            <div className="box h-[400px] flex flex-col space-y-4 bg-white mb-14 overflow-y-scroll">
              {responses?.map((response, index) => {
                return (
                  <div key={index}>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={profileImage}
                        width={32}
                        className="cursor-pointer"
                        height={32}
                        alt=""
                      />
                      <div className="text text-gray-500 font-medium ">
                        {response.userInput}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={chatBotIcon}
                        width={32}
                        className="cursor-pointer"
                        height={32}
                        alt=""
                      />
                      <div className="text font-medium ">
                        {response.botResponse || "Waiting for a response..."}{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <form
              className="flex bottom-3 left-5 absolute gap-4"
              onSubmit={OnHandleSubmit}
            >
              <input
                type="text"
                name="input"
                ref={inputRef} // Attach ref to the input element
                className="!w-[42rem] rounded py-3 px-3 bg-slate-200 border-none focus:border-none shadow-none outline-none text-primary font-semibold"
              />
              <button
                type="submit"
                className="bg-gradient-to-r lowercase from-secondary to-primary btn glass text-white hover:!bg-secondary rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
