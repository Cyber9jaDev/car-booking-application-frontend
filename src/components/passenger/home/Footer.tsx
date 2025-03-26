import {
  ChevronRight,
  Clock,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Map,
  MessageCircleHeart,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative py-10  bg-black/80">
      <div className="w-[90%] mx-auto pt-0 lg:pt-5 lg:px-5">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-10 lg:mb-0">
            <h3 className="text-lg text-gray-300 font-semibold uppercase tracking-wider mb-4 sm:mb-5 mt-4 sm:mt-0 relative after:content-[''] after:absolute after:bottom-[-50%] after:bg-white after:left-0 after:w-1/5 after:h-0.5">
              About Company
            </h3>
            <p className="text-sm text-[#b2aaaa] tracking-wider leading-6 mt-10">
              Vestibulum vitae libero consectetur, orn areeros id, congue metus.
              Aliquam erat volutpat. Donec rhoncus risus vitae ullam corper
              pretium. Duis vitae nisl neque. Aliquam tincidunt, tellus quis
              hendrerit tincidunt congue metus.
            </p>
            <Link
              href="/about"
              className="w-40 flex justify-center items-center text-gray-400 text-sm tracking-wider py-3 px-5 mt-6 bg-black/80 transition-all duration-1000 hover:bg-gray-300 hover:text-gray-800 rounded-md"
            >
              Know More <ChevronRight color="white" />
            </Link>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 mb-10 lg:mb-0 lg:px-5">
            <h3 className="text-lg text-gray-300 font-semibold uppercase tracking-wider mb-4 sm:mb-5 relative after:content-[''] after:absolute after:bottom-[-50%] after:bg-white after:left-0 after:w-1/5 after:h-0.5">
              Locate Us
            </h3>
            <ul className="p-0 mt-10">
              <li className="flex items-center gap-x-2 list-none text-[#b2aaaa] font-sans text-sm my-3">
                <Map className="text-gray-400 w-4 h-4" />{" "}
                <span>
                  No 15, SAF City Building, Iyaolobe, Ekotedo Dugbe Ibadan,
                  Nigeria
                </span>
              </li>
              <li className="flex items-center gap-x-2 list-none text-[#b2aaaa] font-sans text-sm my-3">
                <Mail className="text-gray-400 w-4 h-4" />{" "}
                <a
                  href="mailto:ayodejioladapo15@gmail.com"
                  className="no-underline text-inherit font-inherit"
                >
                  Email
                </a>
              </li>
              <li className="flex items-center gap-x-2 list-none text-[#b2aaaa] font-sans text-sm my-3">
                <Phone className="text-gray-400 w-4 h-4" />{" "}
                <a
                  href="tel:+2348062128170"
                  className="no-underline text-inherit font-inherit"
                >
                  +2348062128170
                </a>
              </li>
              <li className="flex items-center gap-x-2 list-none text-[#b2aaaa] font-sans text-sm my-3">
                <Globe className="text-gray-400 w-4 h-4" />{" "}
                <a
                  href="http://www.github.com/Dipsaint1"
                  className="no-underline text-inherit font-inherit"
                >
                  Dipsaint
                </a>
              </li>
              <li className="flex items-center gap-x-2 list-none text-[#b2aaaa] font-sans text-sm my-3">
                <Clock className="text-gray-400 w-4 h-4" /> Office Time : 8:00
                a.m - 5:00 p.m
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 lg:px-5">
            <h3 className="text-lg text-gray-300 font-semibold uppercase tracking-wider mb-4 sm:mb-5 relative after:content-[''] after:absolute after:bottom-[-50%] after:bg-white after:left-0 after:w-1/5 after:h-0.5">
              Stay In Touch
            </h3>
            <div className="mt-10">
              <ul className="pl-0">
                <li className="list-none inline-block">
                  <a
                    className="text-white text-lg bg-black/20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded no-underline transition-all duration-[1.5s] hover:text-gray-800 hover:bg-gray-300"
                    href="#"
                  >
                    <Facebook color="white" />
                  </a>
                </li>
                <li className="list-none inline-block ml-3">
                  <a
                    className="text-white text-lg bg-black/20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded no-underline transition-all duration-[1.5s] hover:text-gray-800 hover:bg-gray-300"
                    href="#"
                  >
                    <Twitter color="white" />
                  </a>
                </li>
                <li className="list-none inline-block ml-3">
                  <a
                    className="text-white text-lg bg-black/20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded no-underline transition-all duration-[1.5s] hover:text-gray-800 hover:bg-gray-300"
                    href="#"
                  >
                    <Instagram color="white" />
                  </a>
                </li>
                <li className="list-none inline-block ml-3">
                  <a
                    className="text-white text-lg bg-black/20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded no-underline transition-all duration-[1.5s] hover:text-gray-800 hover:bg-gray-300"
                    href="#"
                  >
                    <MessageCircleHeart color="white" />
                  </a>
                </li>
                <li className="list-none inline-block ml-3">
                  <a
                    className="text-white text-lg bg-black/20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded no-underline transition-all duration-[1.5s] hover:text-gray-800 hover:bg-gray-300"
                    href="#"
                  >
                    <Linkedin color="white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center pt-3 sm:pt-5 mt-4 sm:mt-5">
          <div>
            <p className="text-[#64686b] tracking-wider leading-7 text-base font-sans">
              &trade; 2018 Taxi Cab, Built by
              <a
                className="text-gray-300 ml-1 no-underline font-sans"
                href="http://w3layouts.com/"
              >
                Cyber9ja
              </a>
            </p>
            <p className="text-[#64686b] tracking-wider leading-7 text-base font-sans">
              &copy; All Rights Reserved | Design Source -
              <a
                className="text-gray-300 ml-1 no-underline font-sans"
                href="http://w3layouts.com/"
              >
                w3layouts
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
