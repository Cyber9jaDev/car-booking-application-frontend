'use client';

import { createTrip } from "@/actions/admin/admin.action";
import { initialNewTripCreationFormState } from "@/interface/admin.interface";
import { BusList, CitiesList } from "@/utils/functions";
import { useActionState } from "react";


const TripCreationForm = () => {
  const [state, action, isPending] = useActionState(createTrip, initialNewTripCreationFormState);
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <form action={action} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <strong className="text-2xl font-bold text-blue-600">New Trip</strong>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="trip" value="one-way" className="h-4 w-4 border-blue-600 focus:ring-blue-500" />
                <span>One way trip</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* DepartureCity From */}
            <div>
              <label htmlFor="departureCity" className="block text-gray-700 font-semibold">Travelling From</label>
              <select
                id="departureCity"
                name="departureCity"
                defaultValue={state.departureCity}
                className="w-full p-2 border border-blue-600 rounded-lg"
              >
                {CitiesList().map((city) => (
                  <option key={city.value} value={city.value}>{city.label}</option>
                ))}
              </select>
            </div>

            {/* Travelling To */}
            <div>
              <label htmlFor="arrivalCity" className="block text-gray-700 font-semibold">Travelling To</label>
              <select
                id="arrivalCity"
                name="arrivalCity"
                defaultValue={state.arrivalCity}
                className="w-full p-2 border border-blue-600 rounded-lg"
              >
                {CitiesList().map((city) => (
                  <option key={city.value} value={city.value}>{city.label}</option>
                ))}
              </select>
            </div>

            {/* Departure Date and Time */}
            <div>
              <label htmlFor="departureDate" className="block text-gray-700 font-semibold">Departure Date and Time</label>
              <input
                defaultValue = {state.departureDate}
                id="departureDate"
                name="departureDate"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-2 border border-blue-600 rounded-lg"
              />
            </div>

            {/* Ticket Price */}
            <div>
              <label htmlFor="price" className="block text-gray-700 font-semibold">Ticket Price (₦)</label>
              <input
                id="price"
                name="price"
                type="number"
                min={1}
                defaultValue={state.price}
                className="w-full p-2 border border-blue-600 rounded-lg"
              />
            </div>

            {/* Select Bus */}
            <div>
              <label htmlFor="busType" className="block text-gray-700 font-semibold">Select Bus</label>
              <select
                name="busType"
                id="busType"
                defaultValue={state.busType}
                className="w-full p-2 border border-blue-600 rounded-lg"
              >
                {BusList().map((bus) => (
                  <option key={bus.value} value={bus.value}>{bus.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={ isPending}
              className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-800 disabled:bg-gray-400"
            >
              {isPending ? 'Loading...' : 'Add New Trip'}
            </button>
            <button
              type="reset"
              className="w-full py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TripCreationForm;
