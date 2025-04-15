"use client";

import { TicketType } from '@/interface/booking.interface';
import TicketSelect from './TicketCard';

interface TicketsProps {
  tickets: TicketType[]
}

export default function TicketsList({ tickets } : TicketsProps) {

  return (
    <>
      <section className="py-5 bg-gray-100 text-black">
        <div className="container-lg">
          <div className="row">
            {tickets.map((ticket: TicketType) => (
              <TicketSelect key={ticket.id} ticket= {ticket} />
            ))}
          </div>
          {/* <Pagination /> */}
        </div>
      </section>

      {/* <Dialog>
        <DialogTrigger asChild>
          <button className="hidden">Open Seat Modal</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <SeatModal />
        </DialogContent>
      </Dialog> */}
    </>
  );
};
