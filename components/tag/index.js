import React from "react";

export default function Tag({ title }) {
  return (
    <h2 className="text-3xl xl:text-4xl tracking-wider !leading-tight mb-14">
      {title}
    </h2>
  );
}
