import React from "react";
import Icon from "../icon";
import TextLink from "../textlink";

export default function Services({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex gap-6">
          <div>
            <Icon as={item.icon} />
          </div>
          <div>
            <h3 className="text-xl xl:text-2xl mb-3">{item.title}</h3>
            <p className="text-black/60 font-outfit line-clamp-3 mb-12">
              {item.content}
            </p>
            <TextLink
              href={`services/${item.url}`}
              title="Daha fazla"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
