"use client";
import { createContext, ReactElement, useContext, useState } from "react";
type ChildrenType = { children?: ReactElement | ReactElement[] };

type AdminContextType = {
  isOpen: boolean;
  toggle: () => void;
};

const AdminContext = createContext<AdminContextType>({} as AdminContextType);

export const AdminContextProvider = ({ children }: ChildrenType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  const contexValue = { isOpen, toggle };
  return (
    <AdminContext.Provider value={contexValue}>
      {children}
    </AdminContext.Provider>
  );
};

export function useAdminContext() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within AdminContextProvider");
  }
  return context;
}
