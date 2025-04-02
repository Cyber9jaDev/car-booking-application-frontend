"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type Children = { children?: ReactNode }

type BookingInterface = {
  selectedSeatNo: number | null,
  isOpenModal: boolean,
}

type BookingContextType = {
  bookingState: BookingInterface,
  setBookingState: Dispatch<SetStateAction<BookingInterface>>
}

const initialBookingState: BookingInterface = {
  selectedSeatNo: null,
  isOpenModal: false,
}

export const BookingContext = createContext<BookingContextType>({} as BookingContextType)

export const BookingContextProvider = ({ children }: Children) => {
  const [ bookingState, setBookingState ] = useState<BookingInterface>(initialBookingState)
  const contextValue = { bookingState, setBookingState }

  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingContext must be used within BookingContextProvider");
  }
  return context;
}
