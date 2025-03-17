import { CitiesList } from "@/utils/functions";
import Image from 'next/image'; // Import Next.js Image component
import image from "../../../assets/images/car.jpg"

export default function BookingForm() {
  return (
    <section className="relative text-black bg-[#fefbfb] h-100">
      <div className="absolute inset-0 z-0">
        <Image  src={image}  alt="Background" fill  objectFit="cover"  priority />
      </div>

      <div className="flex items-center justify-center h-full relative z-10 py-8 w-full">
        <form className="w-full flex items-center">
          <div className="flex flex-wrap w-[90%] mx-auto p-4 bg-white shadow rounded">

            {/* Departure City */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label className="block mb-2 text-black font-medium" htmlFor="departureCity">Departure City</label>
              <select
                defaultValue='none'
                className="block w-full mt-0 text-[#1363c6] border border-[#1363c6] h-[55px] px-[10px] font-['Open_Sans'] text-base cursor-pointer outline-none"
                name="departureCity"
                id="departureCity"
              >
                <option value="none"> --- Departure City --- </option>
                {CitiesList().map((city) => <option key={city.value} value={city.value} className="text-[#1363c6] font-['Poppins']">{city.label}</option>)}
              </select>
            </div>

            {/* Arrival City */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label className="block text-black mb-2 font-medium" htmlFor="arrivalCity">Arrival City</label>
              <select
                defaultValue='none'
                className="block w-full mt-0 text-[#1363c6] border border-[#1363c6] h-[55px] px-[10px] font-['Open_Sans'] text-base cursor-pointer outline-none"
                name="arrivalCity"
                id="arrivalCity"
              >
                <option value="none"> --- Arrival City --- </option>
                {CitiesList().map((city) => <option key={city.value} value={city.value} className="text-[#1363c6] font-['Poppins']">{city.label}</option>)}
              </select>
            </div>

            {/* Departure Date and Time */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label className="block mb-2 text-black font-medium" htmlFor="departure-date">Departure Date</label>
              <input
                name='departureDate'
                className='w-full text-[#1363c6] border border-[#1363c6] h-[55px] px-[10px] font-["Open_Sans"] text-base cursor-pointer outline-none'
                id="departure-date"
                type='date'
                min="2020-01-01"
                max="2023-12-31"
              />
            </div>

            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label className="block text-black font-medium invisible" htmlFor="submit">{'Empty'}</label>
              <button
                id='submit'
                type='submit'
                className="w-full text-white bg-[#1363c6] h-[55px] px-[10px] font-['Open_Sans'] text-base cursor-pointer transition-colors duration-500 hover:bg-[#14183e] border-none"
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