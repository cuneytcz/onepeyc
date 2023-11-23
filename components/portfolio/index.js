import React from "react";
import TextLink from "../textlink";
import cn from "classnames";

export default function Portfolio({ data }) {
  return (
    <div className="grid xl:grid-cols-2 gap-12">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative aspect-square bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url('/${item.src}')` }}>
          <div className="absolute inset-0 flex flex-col p-4 md:p-10">
            <h6
              className={cn(
                "text-sm font-outfit uppercase tracking-wider mb-1.5 drop-shadow-sm",
                {
                  " text-black/60": item.background === "light",
                  " text-white/60": item.background === "dark",
                }
              )}>
              {item.category}
            </h6>
            <h3
              className={cn(
                "text-2xl xl:text-3xl tracking-wider !leading-tight mb-auto drop-shadow-sm",
                {
                  " text-black": item.background === "light",
                  " text-white": item.background === "dark",
                }
              )}>
              {item.title}
            </h3>
            <TextLink
              href={item.url}
              title="Projeye Detayları"
              className={cn("", {
                " text-black": item.background === "light",
                " text-white": item.background === "dark",
              })}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
