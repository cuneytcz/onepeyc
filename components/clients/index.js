import React from "react";

export default function Clients({ data }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center py-3 relative group overflow-hidden cursor-pointer">
          <img
            src={item.src}
            alt=""
            className="group-hover:-translate-y-32 transition duration-300 ease-in-out"
          />
          <img
            src={item.src}
            alt=""
            className="absolute top-1/2 left-1/2 translate-y-32 -translate-x-1/2 group-hover:-translate-y-1/2 transition duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
}
