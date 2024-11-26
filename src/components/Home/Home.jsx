import ParticlesComponent from "../Particles";
import SocialAcount from "../SocialAccount/SocialAcount";
import DownloadButton from "../DownloadButton";
import TypeAnimationCom from "../TypeAnimationCom";
import BioText from "../BioText/BioText";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <ParticlesComponent />
      <div className=" min-h-[calc(100vh-160px)] flex flex-col justify-center items-center max-w-4xl mx-auto space-y-4 ">
        <h2 className="text-black dark:text-white text-3xl lg:text-5xl font-semibold">
          {"Hi, I'm "}
          <TypeAnimationCom />
        </h2>
        <div className="text-center flex flex-col justify-center text-black dark:text-gray-400 text-sm md:text-xl">
          <BioText />
          <Link
            href="https://akash-khan-2.vercel.app/"
            target="_blank"
            className="text-[#F31559] underline underline-offset-4 my-5"
          >
            Visit My Another Portfolio
          </Link>
        </div>
        <SocialAcount />

        <DownloadButton />
      </div>
    </div>
  );
};
export default Home;
