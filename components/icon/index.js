import React from "react";

export default function Icon({ as, children }) {
  return React.createElement(
    as,
    { className: "w-11 h-11 md:w-12 md:h-12 stroke-1 text-black/60" },
    children
  );
}
