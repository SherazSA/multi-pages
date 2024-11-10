"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <button onClick={() => router.push("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => router.push("/about")}>About</button>
        </li>
        <li>
          <button onClick={() => router.push("/contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
