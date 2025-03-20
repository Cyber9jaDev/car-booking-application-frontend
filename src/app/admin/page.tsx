import Header from "@/components/admin/Header";
import Outlet from "@/components/admin/Outlet";

export default function AdminPage() {
  return (
    <div className="w-full bg-green-400">
      <Outlet/>
    </div>
  );
}