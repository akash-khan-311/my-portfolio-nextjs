import DownloadButton from "@/components/DownloadButton";
import PageTitle from "@/components/PageTitle/PageTitle";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { getServicesData } from "@/lib/getServicesData";
import Image from "next/image";
export const metadata = {
    title: "About",
    description: "about Of Akash Khan",
  };
const AboutPage = async () => {
  const services = await getServicesData();

  return (
    <>
      <section className="">
        <PageTitle title={"About Me"} />
        <div className="min-h-screen flex justify-center items-center">
          <div className="text-gray-600 body-font">
            <div className="  flex  py-10 lg:flex-row flex-col items-start">
              <div
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="md:w-full lg:w-1/2 w-full h-[600px] mb-10 lg:mb-0"
              >
                <Image
                  className="object-cover object-center rounded h-full mx-auto w-5/6  "
                  alt="Akash Ali"
                  src={"/me.jpg"}
                  width={300}
                  height={300}
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="10"
                data-aos-easing="ease-in-out"
                className="lg:flex-grow lg:flex-1 w-full  lg:pl-5 pl-0 flex flex-col lg:items-start lg:text-left items-center text-center"
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
                    <p>Nationality</p>
                    <p>Language</p>
                    <p>Location</p>
                  </div>
                  <div className="info md:text-xl space-y-3 text-left">
                    <p>: Md Akash Khan</p>
                    <p>: 24</p>
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
