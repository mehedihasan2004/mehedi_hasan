"use client";

const Resume = () => {
  return (
    <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-r-md">
      <span className="w-full h-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-purple-500 group-hover:from-indigo-500 group-hover:via-fuchsia-500 group-hover:to-purple-500 absolute"></span>
      <span className="relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-white">Resume</span>
      </span>
    </button>
  );
};

export default Resume;
