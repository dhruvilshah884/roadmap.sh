import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link href="/">Roadmap.SH</Link>
        </div>

        {/* Navigation Links */}

        <ul className="flex space-x-6">
          <li>
            <Link href="/skills" className="hover:text-gray-400">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/roadmap" className="hover:text-gray-400">
              Roadmap
            </Link>
          </li>
          <li>
            <Link href="/project" className="hover:text-gray-400">
              Project
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
