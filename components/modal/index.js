"use client";

import { AlignRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import cn from "classnames";
import Container from "../container";
import { usePathname } from "next/navigation";

export default function Modal({ data }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const trigger = React.useRef(null);
  const modal = React.useRef(null);
  const pathname = usePathname();

  //   Close on click outside
  React.useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  //   Close if the ESC key is pressed
  React.useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  //   If window can resized
  React.useEffect(() => {
    const resizeHandler = () => {
      if (!modalOpen) return;
      setModalOpen(false);
    };

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  });

  //   If window can scrolled
  React.useEffect(() => {
    const scrollHandler = () => {
      if (!modalOpen) return;
      setModalOpen(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  });
  return (
    <>
      <button
        ref={trigger}
        onClick={() => setModalOpen(!modalOpen)}
        type="button"
        className="ml-auto xl:hidden">
        <AlignRight className="w-6 h-6 ml-auto" />
      </button>
      <div
        className={cn(
          "absolute top-full left-0 w-full overflow-hidden transition-all duration-300 bg-wild-sand-500",
          {
            "max-h-96": modalOpen,
            "max-h-0": !modalOpen,
          }
        )}>
        <Container>
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full h-auto flex flex-col gap-3 px-1 pt-6 pb-8">
            {data.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                onClick={() => setModalOpen(false)}
                className={cn(
                  "font-outfit tracking-wider w-fit relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-px hover:before:scale-x-100 hover:before:origin-[0%_50%] before:rounded-full before:bg-black before:transition before:duration-300 before:ease-in-out",
                  {
                    "before:scale-x-0 before:origin-[100%_50%]":
                      pathname !== item.url,
                    "before:scale-x-100 before:origin-[0%_50%]":
                      pathname === item.url,
                  }
                )}>
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
