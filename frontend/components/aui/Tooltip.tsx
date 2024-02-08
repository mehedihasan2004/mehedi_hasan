"use client";

import Image from "next/image";
import { FC, useState } from "react";
import {
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Div } from "@/utils/motion";

interface TooltipProps {
  id: number;
  name: string;
  image: string;
}

const Tooltip: FC<TooltipProps> = ({ id, name, image }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const onMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
      className="mr-4 relative group"
      onMouseEnter={() => setHoveredIndex(id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence mode="wait">
        {hoveredIndex === id && (
          <Div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 260, damping: 10 },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-16 -right-4 translate-x-1/2 rounded-md bg-transparent z-50 shadow-xl col-span-1"
          >
            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px" />
            <div className="absolute left-10 w-[40%] z-30 -bottom-px" />
            <Image
              src={`/images/skills${image}`}
              alt={name}
              height={60}
              width={60}
              className="relative z-30"
            />
          </Div>
        )}
      </AnimatePresence>
      {/* <div
        onMouseMove={onMouseMove}
        className="object-cover !m-0 !p-0 object-top rounded-lg w-fit group-hover:scale-105 group-hover:z-30 relative transition duration-500 bg-transparent"
      >
        <p className="px-4 py-2 truncate">{name}</p>
      </div> */}
      <div
        onMouseMove={onMouseMove}
        className="relative inline-flex items-center justify-center font-bold overflow-hidden group rounded-r-md object-cover object-top rounded-lg w-fit group-hover:scale-105 group-hover:z-30 transition duration-500 bg-transparent cursor-default"
      >
        <span className="size-full bg-gradient-to-br from-indigo-700 via-cyan-700 to-purple-700 group-hover:from-indigo-700 group-hover:via-cyan-700 group-hover:to-purple-700 absolute group-hover:blur-3xl ease-out transition"></span>
        <span className="relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
          <span className="relative text-white/70 group-hover:text-white/80">
            {name}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
