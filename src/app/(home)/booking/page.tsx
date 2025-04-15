"use client";

import BookingForm from "@/components/passenger/booking/BookingForm";
import TicketsList from "@/components/passenger/booking/TicketsList";
import Pagination from "@/components/passenger/common/Pagination";
// import { BookingContextProvider } from "@/contexts/passenger/BookingContext";
import { TicketType } from "@/interface/booking.interface";
import { City } from "@/utils/constants";
import { useState } from "react";

export default function Booking() {
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <section>
      {/* <BookingContextProvider> */}
      <BookingForm
        setHasError={setHasError}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        tickets={tickets}
        setTickets={setTickets}
      />
      {isLoading ? <div>Loading...</div> : <TicketsList tickets={tickets} />}
      {/* </BookingContextProvider> */}
      <Pagination />
    </section>
  );
}
