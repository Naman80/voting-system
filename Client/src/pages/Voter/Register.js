import React from "react";

const Register = () => {
  return (
    <div>
      <div class="flex flex-col items-start justify-between w-full px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
        <div class="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
          <div class="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
            <h4 class="w-full text-4xl font-medium leading-snug">
              Example contact form
            </h4>
            <form class="relative w-full mt-6 space-y-8">
              <div class="relative">
                <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  First Name
                </label>
                <input
                  type="text"
                  class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  placeholder="John"
                />
              </div>
              <div class="relative">
                <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Last Name
                </label>
                <input
                  type="text"
                  class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  placeholder="Doe"
                />
              </div>
              <div class="relative">
                <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Email Address
                </label>
                <input
                  type="text"
                  class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  placeholder="janedoe@email.com"
                />
              </div>
              <div class="relative">
                <button class="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-cyan-500 rounded-lg hover:bg-cyan-600 ease">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
