import { CitiesList, formatDateForInput } from "@/utils/functions";
import Image from "next/image";
import image from "../../../assets/images/car.jpg";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import { TicketType } from "@/interface/booking.interface";
import { baseUrl, City } from "@/utils/constants";
import { BaseErrorResponse } from "@/interface/auth.interface";
import toast from "react-hot-toast";

export interface BookingFormType {
  departureCity: City;
  arrivalCity: City;
  departureDate: string;
}

const initialBookingFormState: BookingFormType = {
  departureCity: City.ABA,
  arrivalCity: City.LAGOS,
  departureDate: new Date().toISOString().split("T")[0],
};

interface TicketsListProps {
  tickets: TicketType[];
  setTickets: Dispatch<SetStateAction<TicketType[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setHasError: Dispatch<SetStateAction<boolean>>;
}

export default function BookingForm({ setTickets, isLoading, setIsLoading, setHasError}: TicketsListProps ) {
  const [formData, setFormData] = useState<BookingFormType>( initialBookingFormState );

  useEffect(() => {
    const fetchTickets = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}/booking/all-tickets`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
  
        if (!response.ok) {
          const errorResponse: BaseErrorResponse = await response.json();
          toast.error(errorResponse.message[0]);
          setHasError(true);
          return;
        }
        const data:TicketType[] = await response.json();
        setTickets(data)
        setHasError(false);
      } catch (error) {
        setHasError(true);
        return;
      } finally {
        setIsLoading(false);
      }
    };
    fetchTickets();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/booking/all-tickets`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorResponse: BaseErrorResponse = await response.json();
        toast.error(errorResponse.message[0]);
        setHasError(true);
        return;
      }
      const data:TicketType[] = await response.json();
      setTickets(data)
      setHasError(false);
    } catch (error) {
      setHasError(true);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative text-black bg-[#fefbfb] h-68 mt-12">
      <div className="absolute inset-0 z-0">
        <Image src={image} alt="Background" fill objectFit="cover" priority />
      </div>

      <div className="flex items-center justify-center h-full relative z-10 py-8 w-full">
        <form onSubmit={handleSubmit} className="w-full flex items-center">
          <div className="flex flex-wrap w-[90%] mx-auto p-4 bg-white shadow rounded">
            {/* Departure City */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label
                className="block text-sm mb-2 text-black font-medium"
                htmlFor="departureCity"
              >
                Departure City
              </label>
              <select
                onChange={handleChange}
                value={formData.departureCity}
                name="departureCity"
                id="departureCity"
                className="text-xs h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#1363c6] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                required
              >
                {" "}
                {CitiesList().map((city) => (
                  <option
                    key={city.value}
                    value={city.value}
                    className="text-[#1363c6] text-xs font-['Poppins']"
                  >
                    {city.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Arrival City */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label
                className="block text-sm text-black mb-2 font-semibold"
                htmlFor="arrivalCity"
              >
                Arrival City
              </label>
              <select
                onChange={handleChange}
                value={formData.arrivalCity}
                className="text-xs h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#1363c6] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                name="arrivalCity"
                id="arrivalCity"
                required
              >
                {" "}
                {CitiesList().map((city) => (
                  <option
                    key={city.value}
                    value={city.value}
                    className="text-[#1363c6] text-xs font-['Poppins']"
                  >
                    {city.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Departure Date and Time */}
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label
                className="block text-sm mb-2 text-black font-semibold"
                htmlFor="departureDate"
              >
                Departure Date
              </label>
              <input
                onChange={handleChange}
                value={formData.departureDate}
                name="departureDate"
                className="text-xs h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#1363c6] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
                id="departureDate"
                type="date"
                min={formatDateForInput(new Date())}
                required
              />
            </div>

            <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
              <label
                className="block text-sm mb-2 text-black font-semibold invisible"
                htmlFor="submit"
              >
                {"Empty"}
              </label>
              <button
                disabled={isLoading}
                id="submit"
                type="submit"
                className="bg-[#1363c6] text-sm h-12 rounded-md w-full p-3 border border-[#71bced] cursor-pointer outline-none text-white font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
              >
                {isLoading ? "Loading..." : "Find Ticket"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
