import Date from "./Date";
import Input from "./Input";
import Label from './Label';
import Select from "./Select";

interface FormGroupProps {
  name: string;
  value: string;
  label: string;
  type: "select" | "input" | "date";
}


export default function FormGroup({name, value, label, type}: FormGroupProps) {
  return (
    <div className="w-full sm:w-full md:w-1/2 lg:w-1/4 my-3 px-3">
      <Label htmlFor={name} label={label} />
      {/* { type === "select" && <Select  />} */}
      {/* { type === "input" && <Input />} */}
      {/* { type === "date" && <Date />} */}
    </div>
  );
}
