import { CitiesList } from "@/utils/functions";
import Image from 'next/image'; 
import image from "../../../assets/images/car.jpg"

export default function BookingForm() {
  return (
    <section className="relative text-black bg-[#fefbfb] h-68 mt-12">
      <div className="absolute inset-0 z-0">
        <Image  src={image}  alt="Background" fill  objectFit="cover"  priority />
      </div>

      <div className="flex items-center justify-center h-full relative z-10 py-8 w-full">
        <form className="w-full flex items-center">
          <div className="flex flex-wrap w-[90%] mx-auto p-4 bg-white shadow rounded">

            {/* Departure City */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label className="block text-sm mb-2 text-black font-medium" htmlFor="departureCity">Departure City</label>
              <select
                defaultValue='none'
                className="text-xs h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#1363c6] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                name="departureCity"
                id="departureCity"
              >
                {CitiesList().map((city) => <option key={city.value} value={city.value} className="text-[#1363c6] text-xs font-['Poppins']">{city.label}</option>)}
              </select>
            </div>

            {/* Arrival City */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label className="block text-sm text-black mb-2 font-semibold" htmlFor="arrivalCity">Arrival City</label>
              <select
                defaultValue='none'
                className="text-xs h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#1363c6] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                name="arrivalCity"
                id="arrivalCity"
              >
                {CitiesList().map((city) => <option key={city.value} value={city.value} className="text-[#1363c6] text-xs font-['Poppins']">{city.label}</option>)}
              </select>
            </div>

            {/* Departure Date and Time */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label className="block text-sm mb-2 text-black font-semibold" htmlFor="departure-date">Departure Date</label>
              <input
                name='departureDate'
                className="text-xs h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#1363c6] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                id="departure-date"
                type='date'
                min="2020-01-01"
                max="2023-12-31"
              />
            </div>

            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label className="block text-sm mb-2 text-black font-semibold invisible" htmlFor="submit">{'Empty'}</label>
              <button
                id='submit'
                type='submit'
                className="bg-[#1363c6] text-sm h-12 rounded-md w-full p-3 border border-[#71bced] cursor-pointer outline-none text-white font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                // className=" p-0 m-0 px-[10px] font-['Open_Sans'] text-base cursor-pointer transition-colors duration-500 hover:bg-[#14183e] border-none"
              >
                Find Ticket
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}