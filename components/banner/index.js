import cn from "classnames";
import Link from "next/link";
import React from "react";

export default function Banner({ title, description, src, href, reverse }) {
  return (
    <div className="grid grid-cols-12 gap-y-12 xl:gap-x-12">
      <div
        className={cn(
          "col-span-full xl:col-span-5 flex flex-col justify-center",
          {
            "xl:pr-6": !reverse,
            "order-2 xl:pl-6": reverse,
          }
        )}>
        <h2 className="text-3xl xl:text-4xl tracking-wider !leading-tight mb-6">
          {title}
        </h2>
        <p className="text-black/60 font-outfit line-clamp-5">{description}</p>
        <Link
          href={href}
          className="w-fit flex items-center px-9 py-3 bg-black text-white font-outfit mt-12">
          Daha fazlası
        </Link>
      </div>
      <div
        className={cn("col-span-full xl:col-span-7", {
          "order-1": reverse,
        })}>
        <img
          src={src}
          alt=""
          className="max-w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
