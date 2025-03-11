import Link from "next/link";

export default function AuthLinks() {
  return (
    <nav className="p-0 m-0 text-white">
      <ul className="flex p-0 m-0 items-center gap-x-2">
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
