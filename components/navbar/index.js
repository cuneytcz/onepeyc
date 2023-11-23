"use client";

import React from "react";
import Link from "next/link";
import cn from "classnames";
import Modal from "../modal";
import { usePathname } from "next/navigation";

const NavData = [
  {
    url: "/",
    label: "Anasayfa",
  },
  {
    url: "/about",
    label: "Hakkımızda",
  },
  {
    url: "/portfolio",
    label: "Portfolyo",
  },
  {
    url: "/services",
    label: "Hizmetlerimiz",
  },
  {
    url: "/contact",
    label: "İletişim",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="relative">
      <div className="max-w-7xl w-full min-h-[77px] xl:min-h-[120px] mx-auto flex justify-between items-center px-8 md:px-12 xl:px-16 2xl:px-0">
        <div className="w-full xl:w-1/3">
          <Link href="/">
            <img
              src="/logo_black.png"
              alt=""
              className="max-w-full h-auto object-cover"
            />
          </Link>
        </div>
        <div className="w-full xl:w-2/3 flex">
          <nav className="hidden xl:flex justify-start items-center gap-11">
            {NavData.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className={cn(
                  "font-outfit tracking-wider relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-px hover:before:scale-x-100 hover:before:origin-[0%_50%] before:rounded-full before:bg-black before:transition before:duration-300 before:ease-in-out",
                  {
                    "before:scale-x-0 before:origin-[100%_50%]":
                      pathname !== item.url,
                    "before:scale-x-100 before:origin-[0%_50%]":
                      pathname === item.url,
                  }
                )}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Modal data={NavData} />
        </div>
      </div>
    </header>
  );
}
