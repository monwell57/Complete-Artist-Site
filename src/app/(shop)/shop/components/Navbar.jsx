"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Apparel", href: "/Apparel" },
  { name: "Accessories", href: "/Accessories" },
  { name: "Vinyl", href: "Vinyl" },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <header className="mb-0 border-b bg-gray-200 text-gray-900">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            Mia's <span className="text-blue-500">Store</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:mt-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <nav className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
