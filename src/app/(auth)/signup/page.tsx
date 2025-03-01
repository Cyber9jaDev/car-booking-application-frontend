"use client";

import { register } from "@/actions/auth";
import { useActionState } from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AuthForm } from "@/types/auth.types";

const initialState: AuthForm = {
  name: "",
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
  terms_and_conditions: false,
  errors: {
    name: [""],
    email: [""],
    password: [""],
    phone_number: [""],
  }
  // errors: {
  //   // name: "",
  //   // email: "",
  //   // phone_number: "",
  //   password: [""],
  //   // confirm_password: "",
  //   // terms_and_conditions: false,
  // }
}

export default function Signup() {
  const [state, action, isPending] = useActionState(register, initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f0f0] p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-[750px] shadow-md border border-[#e0e0e0]">
        <form action={action}>
          <h4 className='text-center font-bold text-4xl text-black mb-6'>Sign up</h4>
          <p className="text-center text-[#888] mb-6 text-sm">Create your account to get started</p>

          <div className="flex w-full justify-center items-center flex-wrap gap-y-5">
            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1.5">
              <label htmlFor="name" className="font-semibold text-xs text-[#7a7a7a]">Name</label>
              <div className="relative">
                <input 
                  name="name" id="name" type="text" 
                  placeholder="Enter your name"
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1.5">
              <label htmlFor="email" className="font-semibold text-xs text-[#7a7a7a]">Email</label>
              <div className="relative">
                <input 
                  name="email" id="email" type="email" 
                  placeholder="example@email.com"
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="w-[97.5%] flex flex-col mx-auto gap-y-1.5">
              <label htmlFor="phone_number" className="font-semibold text-xs text-[#7a7a7a]">Phone Number</label>
              <div className="relative">
                <input 
                  name="phone_number" id="phone_number" type="text" 
                  placeholder="(123) 456-7890"
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1.5">
              <label htmlFor="password" className="font-semibold text-xs text-[#7a7a7a]">Password</label>
              <div className="relative">
                <input 
                  name="password" id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                />
                <button 
                  type="button"
                  className="absolute right-3 top-3 text-[#71bced] hover:text-[#009cff]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              { state?.errors?.password && (
                <div className="error">
                  <p>Password must:</p>
                  <ul className="list-disc list-inside ml-4">
                    {state.errors.password.map((err) => (
                      <li key={err}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1.5">
              <label htmlFor="confirm_password" className="font-semibold text-xs text-[#7a7a7a]">Confirm Password</label>
              <div className="relative">
                <input 
                  name="confirm_password" id="confirm_password" 
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                />
                <button 
                  type="button"
                  className="absolute right-3 top-3 text-[#71bced] hover:text-[#009cff]"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            <div className="w-[97.5%] flex items-center gap-x-3 mt-2">
              <input 
                name="terms_and_conditions" id="terms_and_conditions" type="checkbox" 
                className="w-4 h-4 text-[#009cff] border border-[#71bced] rounded focus:ring-[#009cff]"
              />
              <label htmlFor="terms_and_conditions" className="text-xs font-semibold text-[#555]">
                I agree to the <a href="#" className="text-[#009cff] hover:underline">terms & conditions</a>
              </label>
            </div>

            <div className="w-[97.5%] mt-6">
              <button
                disabled={isPending} 
                type="submit" 
                className="cursor-pointer text-sm h-12 rounded-md w-full p-2 bg-[#009cff] hover:bg-[#0089e0] outline-none text-white font-medium leading-[17px] transition-colors duration-200 flex justify-center items-center"
              > 
                {isPending ? "Processing..." : "Create Account"}
              </button>
            </div>
            
            <div className="w-[97.5%] mt-4 text-center">
              <p className="text-sm text-[#888] font-semibold">
                Already have an account? <a href="/login" className="text-[#009cff] hover:underline font-medium">Sign in</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}