import DownloadButton from "@/components/DownloadButton";
import PageTitle from "@/components/PageTitle/PageTitle";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { getServiceData } from "@/data/serviceData";

import Image from "next/image";
export const metadata = {
  title: "About",
  description: "about Of Akash Khan",
};
const AboutPage = async () => {
  const services = getServiceData();

  return (
    <>
      <section className="">
        <PageTitle title={"About Me"} />
        <div className="min-h-screen flex justify-center items-center">
          <div className="text-gray-600 body-font">
            <div className="flex justify-between py-10 lg:flex-row flex-col mx-auto items-center gap-x-10">
              <div className=" lg:w-1/3  h-[600px] overflow-hidden mb-10 lg:mb-0">
                <Image
                  className="w-full h-full rounded   md:w-full mx-auto "
                  alt="Akash Ali"
                  placeholder="blur"
                  blurDataURL="/akash.jpeg"
                  width={500}
                  height={500}
                  src={"/akash.jpeg"}
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="10"
                data-aos-easing="ease-in-out"
                className="lg:flex-grow lg:flex-1 lg:pl-5 pl-0 flex flex-col lg:items-start lg:text-left items-center text-center"
              >
                <h1 className="text-4xl text-black dark:text-white">
                  I&apos;m <span className="text-[#F31559]">Akash Khan</span>
                </h1>
                <p className="mb-8 leading-relaxed text-gray-800 dark:text-white text-sm lg:text-lg">
                  {`I believe in the power of technology to make a positive impact
                on people's lives. Each line of code I write is fueled by a
                desire to create solutions that are not just functional but also
                intuitive and delightful for users.`}
                </p>
                <div className="flex justify-center items-center text-gray-800 dark:text-[#A4ACC4]">
                  <div className="info-title font-semibold  pr-10 md:text-xl space-y-3 text-left">
                    <p>Full Name</p>
                    <p>Age</p>
                    <p>Relationship</p>
                    <p>Nationality</p>
                    <p>Language</p>
                    <p>Location</p>
                  </div>
                  <div className="info md:text-xl space-y-3 text-left">
                    <p>: Md Akash Khan</p>
                    <p>: 24</p>
                    <p>: Married</p>
                    <p>: Bangladeshi</p>
                    <p>: Bengali, English</p>
                    <p>: Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="mt-5">
                  <DownloadButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <PageTitle title={"services"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 ">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  );
};
export default AboutPage;
