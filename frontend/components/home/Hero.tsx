"use client";

import {
  A,
  P,
  Div,
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motion";
import Image from "next/image";
import { FaWandMagicSparkles } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative flex flex-col size-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] size-full object-cover"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <Div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="size-full flex flex-col justify-center gap-5 m-auto text-start">
          <Div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <FaWandMagicSparkles className="text-[#b49bff] mr-[10px] size-5" />
            <h2 className="Welcome-text text-[13px]">Full Stack Developer</h2>
          </Div>
          <Div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] size-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project experience.
            </span>
          </Div>
          <P
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            I&apos;m a self taught Full Stack Developer with experience in
            Website development. Check out my projects and skills.
          </P>
          <A
            variants={slideInFromLeft(1)}
            className="button-primary py-2 text-center text-white cursor-pointer rounded-lg max-w-[150px]"
          >
            Learn More!
          </A>
        </div>
        <Div
          variants={slideInFromRight(0.8)}
          className="size-full flex justify-center items-center"
        >
          <Image
            src="/images/mainIconsdark.svg"
            alt="technology icons"
            height={650}
            width={650}
          />
        </Div>
      </Div>
    </section>
  );
};

export default Hero;
