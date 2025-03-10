import {
  Banknote,
  Users,
  Car,
  Settings,
  SmilePlus,
  BusFront,
} from "lucide-react";
import Link from "next/link";

const Welcome = () => {
  return (
    <section className="w-[95%] lg:w-[90%] mx-auto py-8">
      <div className="mx-auto">
        <header className="mb-12">
          <h3 className="text-center uppercase text-2xl md:text-3xl font-extrabold tracking-wider text-gray-800">
            Welcome
          </h3>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          <div className="my-5 flex flex-col items-center">
            <Banknote size={40} className="text-[#00bce4]" />
            <h4 className="mt-5 text-black text-base font-bold uppercase tracking-wide relative after:absolute after:content-[''] after:h-0.5 after:w-1/5 after:bg-gray-800 after:-bottom-5 after:left-[40%]">
              Low Charges
            </h4>
          </div>

          <div className="my-5 flex flex-col items-center">
            <Users size={40} className="text-[#34bf49]" />
            <h4 className="mt-5 text-black text-base font-bold uppercase tracking-wide relative after:absolute after:content-[''] after:h-0.5 after:w-1/5 after:bg-gray-800 after:-bottom-5 after:left-[40%]">
              Safe & Secure
            </h4>
          </div>

          <div className="my-5 flex flex-col items-center">
            <BusFront size={40} className="text-[#ff4c4c]" />
            <h4 className="mt-5 text-black text-base font-bold uppercase tracking-wide relative after:absolute after:content-[''] after:h-0.5 after:w-1/5 after:bg-gray-800 after:-bottom-5 after:left-[40%]">
              Traffic Roads
            </h4>
          </div>

          <div className="my-5 flex flex-col items-center">
            <Car size={40} className="text-[#f48924]" />
            <h4 className="mt-5 text-black text-base font-bold uppercase tracking-wide relative after:absolute after:content-[''] after:h-0.5 after:w-1/5 after:bg-gray-800 after:-bottom-5 after:left-[40%]">
              Taxi Cabs
            </h4>
          </div>

          <div className="my-5 flex flex-col items-center">
            <Settings size={40} className="text-[#2dde98]" />
            <h4 className="mt-5 text-black text-base font-bold uppercase tracking-wide relative after:absolute after:content-[''] after:h-0.5 after:w-1/5 after:bg-gray-800 after:-bottom-5 after:left-[40%]">
              24/7 Service
            </h4>
          </div>

          <div className="my-5 flex flex-col items-center">
            <SmilePlus size={40} className="text-[#ce181e]" />
            <h4 className="mt-5 text-black text-base font-bold uppercase tracking-wide relative after:absolute after:content-[''] after:h-0.5 after:w-1/5 after:bg-gray-800 after:-bottom-5 after:left-[40%]">
              Customers
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-5 md:mb-0">
            <h4 className="mb-4 text-left leading-9 text-base text-black font-semibold tracking-wider uppercase">
              Lorem ipsum dolor sit amet, In consectetur adipiscing elit. Etiam
              commodo urna dolor,
            </h4>
            <Link
              href="/about"
              className="bg-gray-800 text-white py-4 px-8 text-sm tracking-wider capitalize inline-block hover:bg-yellow-500 transition-colors duration-300"
            > More About Us
            </Link>
          </div>

          <div className="hidden md:block">
            <p className="text-base leading-8 text-left text-gray-700">
              Lorem ipsum dolor sit init amet, consectetur elit adipiscing elit.
              Etiam commodo urna dolor, eget lacinia est aliquam id. Proin velit
              libero, vestibul umac orci eu, faucibus consectetur dolor. Cras
              ullamcorper elit eros, nec bibendum lacus accumsan eu. Donec non
            </p>
          </div>

          <div className="hidden md:block">
            <p className="text-base leading-8 text-left text-gray-700">
              Lorem ipsum dolor sit init amet, consectetur elit adipiscing elit.
              Etiam commodo urna dolor, eget lacinia est aliquam id. Proin velit
              libero, vestibul umac orci eu, faucibus consectetur dolor. Cras
              ullamcorper elit eros, nec bibendum lacus accumsan eu. Donec non
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
