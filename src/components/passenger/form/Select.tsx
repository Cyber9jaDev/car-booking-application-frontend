import { City } from "@/utils/constants";

interface SelectProps {
  name: string;
  value: City
  handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectItems: { label: string; value: City }[];
}

export default function Select({ name, handleChange, value, selectItems}: SelectProps) {
  return (
    <select
        name={name}
        id={name}
        className="text-xs h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#1363c6] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
        required
        value={value}
      >
        {" "}
        {selectItems.map((item) => (
          <option
            key={item.value}
            value={item.value}
            className="text-[#1363c6] text-xs font-['Poppins']"
          >
            {item.label}
          </option>
        ))}
      </select>
  );
}