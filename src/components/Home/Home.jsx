import ParticlesComponent from "../Particles";
import SocialAcount from "../SocialAccount/SocialAcount";
import DownloadButton from "../DownloadButton";
import TypeAnimationCom from "../TypeAnimationCom";

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
          <p>
            {`I'm always open to new opportunities, collaborations, and discussions
        about the exciting possibilities in the world of web development.Whether you're a fellow developer, potential collaborator, or someone
        with a shared passion for innovation, I'd love to connect.`}
          </p>
        </div>
        <SocialAcount />

        <DownloadButton />
      </div>
    </div>
  );
};
export default Home;
