import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import cn from "classnames";

export default function TextLink({ href, title, className }) {
  return (
    <Link
      href={href}
      className={`w-fit flex items-center gap-1.5 relative group overflow-hidden drop-shadow-sm ${
        className !== undefined ? className : ""
      }`}>
      <span className="font-medium font-outfit -mt-0.5">{title}</span>
      <Plus className="w-5 h-5 group-hover:-translate-y-8 transition duration-300 ease-in-out" />
      <Plus className="w-5 h-5 absolute top-px right-0 translate-y-8 group-hover:translate-y-0 transition duration-300 ease-in-out" />
    </Link>
  );
}
