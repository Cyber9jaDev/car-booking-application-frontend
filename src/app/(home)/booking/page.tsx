"use client";

import BookingForm from "@/components/passenger/booking/BookingForm";
import TicketsList from "@/components/passenger/booking/TicketsList";
import Pagination from "@/components/passenger/common/Pagination";
import { BookingContextProvider } from "@/contexts/passenger/BookingContext";

export default function Booking() {
  return (
    <section>
      <BookingContextProvider>
          <BookingForm/>
          <TicketsList />
      </BookingContextProvider>
      <Pagination/>
    </section>
  )
}