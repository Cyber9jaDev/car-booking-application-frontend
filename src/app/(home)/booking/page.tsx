import BookingForm from "@/components/passenger/booking/BookingForm";
import TicketsList from "@/components/passenger/booking/TicketsList";
import Pagination from "@/components/passenger/common/Pagination";

export default function Booking() {
  return (
    <section>
      <BookingForm/>
      <TicketsList />
      <Pagination/>
    </section>
  )
}