"use client";

import { Div } from "@/utils/motion";

const Hero = () => {
  return (
    <section className="relative flex flex-col size-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] size-full object"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <Div
        initial="hidden"
        animate="visibel"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="size-full flex flex-col justify-center gap-5 m-auto text-start">
          <Div className=""></Div>
        </div>
      </Div>
    </section>
  );
};

export default Hero;
