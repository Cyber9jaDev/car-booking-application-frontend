"use client";

import { TicketType } from '@/interface/booking.interface';
import TicketCard from './TicketCard';

interface TicketsProps { tickets: TicketType[] }

export default function TicketsList({ tickets } : TicketsProps) {

  return (
    <>
      <section className="py-25 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto">
          <div className='flex gap-y-10 flex-col'>
            {tickets.map((ticket: TicketType) => (
              <TicketCard key={ticket.id} ticket= {ticket} />
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
