import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const { name, live_link, code_link, image, description, tags } = project;
  return (
    <section className="my-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-10">
        <div className="cursor-pointer border border-pink-600 overflow-hidden  h-72  rounded-md w-full md:w-2/5">
          <Image
            src={image}
            className=" hover:scale-105 transition-all  duration-500 h-full w-full"
            alt={name}
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black dark:text-white capitalize  font-semibold mt-5 md:mt-0">
            {name}
          </h2>
          <p className="text-black dark:text-gray-400 text-lg my-6 text-center md:text-left">
            {description}
          </p>
          <div>{/* {tags.map(tag=> <p key={tag}>{tag}</p>)} */}</div>
          <div className="flex gap-x-5 mt-5">
            {/* Live Link */}
            <Link
              href={live_link}
              target="_blank"
              className=" text-white uppercase bg-pink-600 py-2 px-8 rounded-md text-sm"
            >
              Live Link
            </Link>

            {/* Code Link */}
            <Link
              href={code_link}
              target="_blank"
              className=" text-white  uppercase bg-pink-600 py-2 px-8 rounded-md text-sm"
            >
              Code Link
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectCard;
