"use client";

import { useActionState } from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { initialSignupFormState } from "@/interface/auth.interface";
import { signup } from "@/actions/auth/signup.action";

export default function Signup() {
  const [state, action, isPending] = useActionState(
    signup,
    initialSignupFormState
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f0f0] p-4">
      <div className="mt-16 bg-white rounded-2xl p-8 w-full max-w-[750px] shadow-md border border-[#e0e0e0]">
        <form action={action}>
          <h4 className="text-center font-bold text-4xl text-black mb-6">
            Sign up
          </h4>

          {state?.errors?.message && (
            <div className="text-base font-bold bg-red-50 mb-6 p-2 w-full">
              <ul className="list-disc list-inside ml-3">
                {state.errors.message.map((error) => (
                  <li className="text-red-500" key={error}>
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex w-full justify-center flex-wrap gap-y-5">
            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1">
              <label
                htmlFor="name"
                className="font-semibold text-xs text-[#7a7a7a]"
              >
                {" "}
                Name{" "}
              </label>
              <div className="relative">
                <input
                  defaultValue={state.name}
                  name="name"
                  id="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                />
              </div>
              {state?.errors?.name && (
                <div className="text-xs">
                  <p>Name must:</p>
                  <ul className="list-disc list-inside ml-3">
                    {state.errors.name.map((err) => (
                      <li className="text-red-500" key={err}>
                        {err}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1">
              <label
                htmlFor="email"
                className="font-semibold text-xs text-[#7a7a7a]"
              >
                {" "}
                Email{" "}
              </label>
              <div className="relative">
                <input
                  defaultValue={state.email}
                  name="email"
                  id="email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                />
              </div>
              {state?.errors?.email && (
                <div className="text-xs">
                  <ul className="list-disc list-inside ml-3">
                    {state.errors.email.map((err) => (
                      <li className="text-red-500" key={err}>
                        {err}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="w-[97.5%] flex flex-col mx-auto gap-y-1">
              <label
                htmlFor="phoneNumber"
                className="font-semibold text-xs text-[#7a7a7a]"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  defaultValue={state.phoneNumber}
                  name="phoneNumber"
                  id="phoneNumber"
                  type="text"
                  required
                  placeholder="(123) 456-7890"
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                />
              </div>
              {state?.errors?.phoneNumber && (
                <div className="text-xs">
                  <ul className="list-disc list-inside ml-3">
                    {state.errors.phoneNumber.map((err) => (
                      <li className="text-red-500" key={err}>
                        {err}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1">
              <label
                htmlFor="password"
                className="font-semibold text-xs text-[#7a7a7a]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  defaultValue={state.password}
                  name="password"
                  id="password"
                  required
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
              {state?.errors?.password && (
                <div className="text-xs">
                  <p>Password must:</p>
                  <ul className="list-disc list-inside ml-3">
                    {state.errors.password.map((err) => (
                      <li className="text-red-500" key={err}>
                        {err}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="w-[47.5%] flex flex-col mx-auto gap-y-1">
              <label
                htmlFor="confirmPassword"
                className="font-semibold text-xs text-[#7a7a7a]"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  defaultValue={state.confirmPassword}
                  name="confirmPassword"
                  id="confirmPassword"
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-[#71bced] hover:text-[#009cff]"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              {state?.errors?.confirmPassword && (
                <div className="text-xs mt-1">
                  <ul className="list-disc list-inside ml-4">
                    {state.errors.confirmPassword.map((err) => (
                      <li className="text-red-500" key={err}>
                        {err}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="w-[97.5%] flex items-center gap-x-3 mt-2">
              <input
                defaultChecked={state.hasAgreedTermsAndConditions}
                name="hasAgreedTermsAndConditions"
                id="hasAgreedTermsAndConditions"
                type="checkbox"
                required
                className="w-4 h-4 text-[#009cff] border border-[#71bced] rounded focus:ring-[#009cff]"
              />
              <label
                htmlFor="hasAgreedTermsAndConditions"
                className="text-xs font-semibold text-[#555]"
              >
                I agree to the{" "}
                <a href="#" className="text-[#009cff] hover:underline">
                  terms & conditions
                </a>
              </label>
            </div>

            <div className="w-[97.5%] mt-2.5">
              <button
                disabled={isPending}
                type="submit"
                className="cursor-pointer text-sm h-12 rounded-md w-full p-2 bg-[#009cff] hover:bg-[#0089e0] outline-none text-white font-medium leading-[17px] transition-colors duration-200 flex justify-center items-center"
              >
                {isPending ? "Processing..." : "Create Account"}
              </button>
            </div>

            <div className="w-[97.5%] text-center">
              <p className="text-sm text-[#888] font-semibold">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#009cff] hover:underline font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
