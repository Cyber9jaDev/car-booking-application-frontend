"use client";

import { login } from "@/actions/auth";
import { initialLoginFormState } from "@/types/auth.types";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";

export default function Login() {
  const [state, action, isPending] = useActionState(login, initialLoginFormState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f0f0] p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-[750px] shadow-md border border-[#e0e0e0]">
        <form action={action}>
          <h4 className='text-center font-bold text-4xl text-black mb-6'>Log in</h4>

          <div className="flex w-full justify-center flex-wrap gap-y-5">
            
            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1">
              <label htmlFor="email" className="font-semibold text-xs text-[#7a7a7a]">Email</label>
              <div className="relative">
                <input 
                  defaultValue={state.email}
                  name="email" id="email" type="email" required
                  placeholder="example@email.com"
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1">
              <label htmlFor="password" className="font-semibold text-xs text-[#7a7a7a]">Password</label>
              <div className="relative">
                <input
                  defaultValue={state.password}
                  name="password" id="password" required
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
            </div>

            <div className="w-[97.5%] mt-2.5">
              <button
                disabled={isPending} 
                type="submit" 
                className="cursor-pointer text-sm h-12 rounded-md w-full p-2 bg-[#009cff] hover:bg-[#0089e0] outline-none text-white font-medium leading-[17px] transition-colors duration-200 flex justify-center items-center"
              > 
                {isPending ? "Processing..." : "Sign in"}
              </button>
            </div>
            
            <div className="w-[97.5%] text-center">
              <p className="text-sm text-[#888] font-semibold">
                Don't have an account? <Link href="/signup" className="text-[#009cff] hover:underline font-medium">Sign up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}