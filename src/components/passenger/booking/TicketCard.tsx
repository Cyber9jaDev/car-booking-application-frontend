import { TicketType } from "@/interface/booking.interface";
import Image from "next/image";
import { formatTicketFee, getVehicleImage } from "@/utils/functions";
import { ArrowRight, Clock, Ticket, Armchair, Luggage, MapPin, ChevronRight, BadgeCheck } from "lucide-react";

const TicketCard = ({ ticket }: { ticket: TicketType }) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 mb-6 group">
      {/* Card Header with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-medium text-sm">
            {ticket.departureCity} → {ticket.arrivalCity}
          </span>
        </div>
        <div className="flex items-center bg-white/20 px-2 py-1 rounded-full">
          <BadgeCheck className="w-4 h-4 text-white mr-1" />
          <span className="text-white text-xs font-medium">Verified</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Vehicle Image */}
          <div className="w-full md:w-1/4 h-44 relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
            <Image
              src={getVehicleImage(ticket.vehicleType)}
              alt="vehicle image"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-3 left-3 bg-white text-blue-600 px-3 py-1 rounded-lg text-xs font-semibold shadow-sm flex items-center">
              <Ticket className="w-3 h-3 mr-1.5" />
              {ticket.vehicleType}
            </div>
          </div>

          {/* Ticket Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="hidden text-xl font-bold text-gray-900 items-center">
                Premium {ticket.vehicleType} Service
                <span className="ml-3 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                  <BadgeCheck className="w-3 h-3 mr-1" />
                  Executive Class
                </span>
              </h3>
              
              <div className="mt-3 flex items-center text-blue-600">
                <Clock className="w-4 h-4 mr-1.5" />
                <span className="text-sm font-medium">{ticket.departureDate}</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
                  <Armchair className="w-5 h-5 text-blue-600 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Seats Available</p>
                    <p className="font-medium">
                      {ticket.availableSeats.length} {ticket.availableSeats.length > 1 ? "Seats" : "Seat"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
                  <Luggage className="w-5 h-5 text-blue-600 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Passengers</p>
                    <p className="font-medium">Adult: 1</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <span className="flex items-center bg-blue-50 text-blue-600 px-2 py-1 rounded mr-2">
                  <BadgeCheck className="w-3 h-3 mr-1" />
                  Free cancellation
                </span>
                <span>•</span>
                <span className="ml-2">WiFi Available</span>
              </div>
              
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="text-right">
                  <p className="text-xs text-gray-500">Starting from</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatTicketFee(ticket.ticketFee)}
                  </p>
                </div>
                <button
                  className="flex-1 sm:flex-none h-12 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  onClick={() => {
                    localStorage.setItem("selectedSeatNo", JSON.stringify(null));
                    localStorage.setItem(
                      "selectedBus",
                      JSON.stringify({
                        vehicleType: ticket.vehicleType,
                        availableSeats: ticket.availableSeats,
                        id: ticket.id,
                      })
                    );
                    localStorage.setItem(
                      "bookedData",
                      JSON.stringify({
                        departureCity: ticket.departureCity,
                        arrivalCity: ticket.arrivalCity,
                        departureDate: ticket.departureDate,
                        ticketFee: ticket.ticketFee,
                      })
                    );
                  }}
                >
                  View Seats
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;