"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
const BioText = () => {
  const words = `I'm always open to new opportunities, collaborations, and discussions
        about the exciting possibilities in the world of web development.Whether you're a fellow developer, potential collaborator, or someone
        with a shared passion for innovation, I'd love to connect.
`;
  return (
    <>
      <TextGenerateEffect words={words} />
    </>
  );
};
export default BioText;
