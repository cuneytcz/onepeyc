import React from "react";

export default function Figure({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <figure key={index}>
          <img
            src={`/${item.src}`}
            alt={item.title}
          />
          <figcaption className="mt-6">
            <h3 className="text-xl xl:text-2xl mb-3">{item.title}</h3>
            <h6 className="text-sm text-black/60 font-outfit uppercase tracking-wider">
              {item.category}
            </h6>
          </figcaption>
        </figure>
      ))}
    </>
  );
}
