// "use client";

// import { AlignJustify, X } from "lucide-react";
// import Time from "./Time";
// import { useAdminContext } from "@/contexts/admin/AdminContext";

// export default function Header() {
//   const { collapsedSidebar, toggle } = useAdminContext();
//   return (
//     <header
//       className={`fixed flex ${
//         collapsedSidebar
//           ? "w-[calc(100%-12rem)] left-48"
//           : "w-[calc(100%-4rem)] left-16"
//       } top-0 h-18 items-center px-3 z-50 border-b`}
//     >
//       <div className="w-full flex items-center gap-4">
//         <button
//           onClick={toggle}
//           className="text-[#1363c6] p-1 rounded-md hover:bg-red-500/10 transition-colors"
//           aria-label={collapsedSidebar ? "Collapse sidebar" : "Expand sidebar"}
//         >
//           {collapsedSidebar ? (
//             <AlignJustify className="h-5 w-5 cursor-pointer" />
//           ) : (
//             <X className="h-5 w-5 cursor-pointer" />
//           )}
//         </button>
//         <Time />
//       </div>
//     </header>
//   );
// }


"use client";

import { AlignJustify, X } from "lucide-react";
import Time from "./Time";
import { useAdminContext } from "@/contexts/admin/AdminContext";

export default function Header() {
  const { collapsedSidebar, toggle } = useAdminContext();

  return (
    <header
      className={`fixed top-0 h-18 flex items-center px-4 z-50 border-b transition-all duration-300 ${
        collapsedSidebar ? "w-[calc(100%-12rem)]" : "w-[calc(100%-4rem)]"
      }`}
    >
      {/* Toggle Sidebar Button */}
      <button
        onClick={toggle}
        className="text-[#1363c6] p-2 hover:bg-gray-100 rounded-md transition"
      >
        {collapsedSidebar ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
      </button>

      {/* Timestamp */}
      <Time />
    </header>
  );
}
