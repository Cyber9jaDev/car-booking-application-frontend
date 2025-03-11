import { DriverCard } from "./cards/DriverCard";
import { drivers } from "./data/data";

export default function Drivers() {
  return (
    <section className="relative w-[95%] lg:w-[90%] mx-auto mt-8 lg:mt-20">
      <header className="mb-10">
        <h4 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800 tracking-wider uppercase">
          OUR DRIVERS
        </h4>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {drivers.map((driver) => (
          <DriverCard key={driver.name} member={driver} />
        ))}
      </div>
    </section>
  );
}
