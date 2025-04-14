interface LabelProps {
  htmlFor: string;
  label: string;
}

export default function Label({ htmlFor, label }: LabelProps) {
  return (
    <label
      className="block text-sm mb-2 text-black font-medium"
      htmlFor={htmlFor}
      id={htmlFor}
    >
      {label}
    </label>
  );
}
