import React from "react";

export default function Container({ children }) {
  return (
    <div className="max-w-7xl w-full mx-auto px-8 md:px-12 xl:px-16 2xl:px-0">
      {children}
    </div>
  );
}
