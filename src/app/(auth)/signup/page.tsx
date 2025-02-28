"use client";

import { register } from "@/actions/auth";
import { useActionState } from "react";
// import { Role } from '../../../types/auth.types';

const initialState = {
  name: "",
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
}

export default function Signup() {
  const [state, action, isPending] = useActionState(register, initialState);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f3f0f0]">
      <div className="bg-white rounded-2xl p-5 max-w-[600px]">
        <form action={action}>
          <h4 className='text-center font-bold text-4xl text-black mb-10'>Sign up</h4>

          <div className="flex w-full justify-center items-center flex-wrap gap-y-3.5">
            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1.5">
              <label htmlFor="name" className="font-semibold text-xs">Name</label>
              <input 
                name="name" id="name" type="text" 
                className="text-[10px] h-12 rounded-md w-full p-2 border border-[#71bced] outline-none text-[#BABABA] font-medium leading-[17px]"
              />
            </div>
            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1.5">
              <label htmlFor="email" className="font-semibold text-xs">Email</label>
              <input 
                name="email" id="email" type="email" 
                className="text-[10px] h-12 rounded-md w-full p-2 border border-[#71bced] outline-none text-[#BABABA] font-medium leading-[17px]"
              />
            </div>
            <div className="w-[97.5%] flex flex-col mx-auto gap-y-1.5">
              <label htmlFor="phone_number" className="font-semibold text-xs">Phone Number</label>
              <input 
                name="phone_number" id="phone_number" type="text" 
                className="text-[10px] h-12 rounded-md w-full p-2  border border-[#71bced] outline-none text-[#BABABA] font-medium leading-[17px]"
              />
            </div>
            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1.5">
              <label htmlFor="password" className="font-semibold text-xs">Password</label>
              <input 
                name="password" id="password" type="password" 
                className="text-[10px] h-12 rounded-md w-full p-2 border border-[#71bced] outline-none text-[#BABABA] font-medium leading-[17px]"
              />
            </div>
            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1.5">
              <label htmlFor="confirm_password" className="font-semibold text-xs">Confirm Password</label>
              <input 
                name="confirm_password" id="confirm_password" type="password" 
                className="text-[10px] h-12 rounded-md w-full p-2 border border-[#71bced] outline-none text-[#BABABA] font-medium leading-[17px]"
              />
            </div>
            <div className="w-[97.5%] flex items-center gap-x-3">
              <input 
                name="terms_and_conditions" id="terms_and_conditions" type="checkbox" 
                className="text-[10px] p-2 border border-[#71bced] outline-none text-[#BABABA] font-medium"
              />
              <label htmlFor="terms_and_conditions" className="text-xs font-semibold">I agree to the the terms & conditions</label>
            </div>

            <div className="w-[97.5%]">
              <button
                disabled={isPending} 
                type="submit" 
                className="cursor-pointer text-sm h-12 rounded-md w-full p-2 bg-[#009cff] outline-none text-[#4b4343] font-medium leading-[17px]"
                > Submit
              </button>
            </div>
          </div>
          
          
        </form>
      </div>
    </div>
  );
}