"use client";

import { createTicket } from "@/actions/admin/admin.action";
import { initialTicketFormState } from "@/interface/admin.interface";
import { BusList, CitiesList } from "@/utils/functions";
import { useActionState } from "react";

export default function TicketPage() {
  const [state, action, isPending] = useActionState(
    createTicket,
    initialTicketFormState
  );

  return (
    <section className="bg-white relative w-full">
      <form action={action}>
        {/*  Error */}
        <div className="bg-red-50">
          {state?.errors?.message && (
            <div className="text-xs">
              <ul className="list-disc list-inside ml-3">
                {state.errors.message.map((error) => (
                  <li className="text-red-500" key={error}>
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Trip Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Route Details */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-5">
              Route Details
            </h3>
            <div className="space-y-5">
              {/* Departure City */}
              <div>
                <label
                  htmlFor="departureCity"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Departure City
                  </span>
                </label>
                <select
                  id="departureCity"
                  name="departureCity"
                  defaultValue={state.departureCity}
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                >
                  {CitiesList().map((city) => (
                    <option key={city.value} value={city.value}>
                      {city.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Arrival City */}
              <div>
                <label
                  htmlFor="arrivalCity"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    Arrvival City
                  </span>
                </label>
                <select
                  id="arrivalCity"
                  name="arrivalCity"
                  defaultValue={state.arrivalCity}
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                >
                  {CitiesList().map((city) => (
                    <option key={city.value} value={city.value}>
                      {city.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Trip Configuration */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-5">
              Trip Configuration
            </h3>
            <div className="space-y-5">
              {/* Departure Date and Time */}
              <div>
                <label
                  htmlFor="departureDate"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Departure Date
                  </span>
                </label>
                <input
                  defaultValue={state.departureDate}
                  id="departureDate"
                  name="departureDate"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                />
              </div>

              {/* Select Bus */}
              <div>
                <label
                  htmlFor="vehicleType"
                  className="block text-gray-700 font-medium mb-2"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Select Bus
                  </span>
                </label>
                <select
                  name="vehicleType"
                  id="vehicleType"
                  defaultValue={state.vehicleType}
                  className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                >
                  {BusList().map((bus) => (
                    <option key={bus.value} value={bus.value}>
                      {bus.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-5">Pricing</h3>
          <div>
            <label
              htmlFor="ticketFee"
              className="block text-gray-700 font-medium mb-2"
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Ticket Price (₦)
              </span>
            </label>
            <input
              id="ticketFee"
              name="ticketFee"
              type="number"
              min={1}
              required
              defaultValue={state.ticketFee}
              className="text-sm h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#555] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="mt-5">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="submit"
              disabled={isPending}
              className="cursor-pointer w-full py-3 px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {isPending ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Create New Trip
                </span>
              )}
            </button>
            <button
              type="reset"
              className="cursor-pointer w-full py-3 px-6 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 active:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Reset
              </span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
