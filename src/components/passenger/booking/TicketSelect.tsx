import { useContext } from 'react';
// import { BusImage, BusName, CityName, FormatAmount, FormatDateAndTime } from '../../utilities/Functions';
import { TicketType } from '@/interface/booking.interface';


const TicketSelect = ({ ticket }: { ticket: TicketType}) => {
  return (
    <div className="w-full p-3 bg-white shadow-sm rounded-lg mb-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          {/* <img 
            src={BusImage[busType]} 
            alt="bus-img" 
            className="w-full h-full object-cover rounded-lg" 
          /> */}
        </div>
        
        <div className="w-full md:w-1/2 lg:w-2/4 flex flex-col justify-center md:px-4">
          {/* <h1 className="text-xl font-bold">{BusName(busType)}</h1> */}
          <h6 className="mt-1 text-lg flex items-center">
            {/* {CityName(travellingFrom)}  */}
            {ticket.departureCity} 
            <i className="fas fa-right-long mx-2 text-blue-600"></i>
            {ticket.arrivalCity}
          </h6>
          <p className="mt-2 flex items-center">
            <i className="fas fa-couch mr-1 text-blue-600"></i> 
            {ticket.availableSeats.length} {ticket.availableSeats.length > 1 ? 'Seats' : 'Seat'} (Available)
          </p>
          <p className="my-auto flex flex-wrap items-center gap-2">
            <span className="flex items-center">
              <i className="fas fa-person-walking-luggage text-blue-600 mr-1"></i>  Adult: 1
            </span>
            <span className="flex items-center">
              <i className="fas fa-clock text-blue-600 mr-1 ml-3"></i> 
              {ticket.departureDate}
            </span>
            {/* <span className="flex items-center">
              <i className="far fa-calendar text-blue-600 mr-1 ml-3"></i> 
              {departureTime}
            </span> */}
          </p>
        </div>
        
        {/* <div className="w-full md:w-1/6 lg:w-1/4 flex flex-col items-center justify-center mt-4 md:mt-0">
          <p className="text-lg font-bold mb-4">{FormatAmount(price)}</p>
          <button 
            className="w-full h-14 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => { 
              localStorage.setItem('selectedSeatNo', JSON.stringify(null));
              localStorage.setItem('selectedBus', JSON.stringify({ busType, availableSeats, _id, bookedSeats }));
              localStorage.setItem("bookedData", JSON.stringify({ travellingFrom, travellingTo, departureDate, price }));
              setBookingState(prev => ({
                ...prev, 
                selectedSeatNo: null, 
                isOpenModal: true, 
                bookedData: { travellingFrom, travellingTo, departureDate, price },
                selectedBus: { busType, availableSeats, _id, bookedSeats }
              }));
            }}
          >
            View Seats
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TicketSelect;