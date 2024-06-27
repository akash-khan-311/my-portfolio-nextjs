import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const { name, live_link, code_link, image, description, tags } = project;

  return (
    <section className="my-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-10">
        <div className="cursor-pointer border border-pink-600 overflow-hidden  w-full lg:w-2/4 md:w-3/4 md:h-96  rounded-md">
          <Image
            src={image}
            blurDataURL="blur"
  
            className=" hover:scale-105 transition-all duration-500 w-full h-full "
            alt={name}
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-black dark:text-white capitalize  font-semibold mt-5 md:mt-0">
            {name}
          </h2>
          <p className="text-black dark:text-gray-400 text-lg lg:my-6 my-1 text-center md:text-left">
            {description}
          </p>
          <div className="flex gap-5 flex-wrap justify-center items-center md:items-start md:justify-start"> {tags.map(tag=> <p key={tag} className="text-gray-600  bg-gray-300 p-1 rounded-lg">{tag}</p>)}</div>
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
