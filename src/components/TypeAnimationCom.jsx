"use client";

import { FlipWords } from "./ui/flip-words";

const TypeAnimationCom = () => {
  const words = ["Akash Khan", "Web Developer", "MERN Stack Developer"];
  return (
    <span className="text-[#F31559]">
      <FlipWords words={words} />
    </span>
  );
};
export default TypeAnimationCom;
