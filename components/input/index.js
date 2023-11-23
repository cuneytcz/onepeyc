import React from "react";

export default function Input({ label, feedback, invalid, ...props }) {
  return (
    <label
      htmlFor={props.id}
      className="flex flex-col gap-1.5 w-full">
      <span className="text-sm text-black/60 font-outfit uppercase tracking-wider">
        {label}
      </span>
      <input
        {...props}
        className="text-xl font-literata pb-6 border-b border-black/60 bg-transparent outline-none rounded-none"
      />
      {invalid && (
        <p className="text-xs font-semibold font-outfit uppercase text-red-500 mt-8">
          {feedback}
        </p>
      )}
    </label>
  );
}
