import { formatDateForInput } from "@/utils/functions";

interface DateProps {
  name: string;
  value: string;
}
export default function Date({ name, value }: DateProps) {
  return (
    <input
      value={value}
      id={name}
      name={name}
      className="text-xs h-12 rounded-md w-full p-3 border border-[#71bced] outline-none text-[#1363c6] font-medium leading-[17px] focus:border-[#009cff] focus:ring-2 focus:ring-[#009cff]/20 transition-all duration-200"
      type="date"
      required
    />
  );
}
