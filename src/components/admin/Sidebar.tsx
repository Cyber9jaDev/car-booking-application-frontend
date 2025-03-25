import Link from "next/link";
import { navLinks } from "@/utils/constants";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 w-1/8 h-full bg-white border-r">
      <div className="h-full flex flex-col">
        <div className="h-18 p-4 border-b flex items-center justify-center">
          <strong className="text-2xl text-[#1363c6]">Logo</strong>
        </div>

        <nav className="flex-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="flex items-center gap-3 p-3 mb-2 rounded-lg hover:bg-[#1363c6]/10 text-gray-600 hover:text-[#1363c6] transition-colors"
            >
              <link.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
