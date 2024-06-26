import Loader from "@/components/Loader";
import PageTitle from "@/components/PageTitle/PageTitle";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { getProjectsData } from "@/lib/getProjectsData";
import { Suspense } from "react";
export const metadata = {
    title: "Projects",
    description: "Akash Khan Projects",
  };
const page = async () => {
  const projects = await getProjectsData();

  return (
    <section className="">
      <PageTitle title={"My Projects"} />

      <div className="my-20">
        {projects.map((project) => (
          <Suspense fallback={<Loader />} key={project.id}>
            <ProjectCard project={project} />
          </Suspense>
        ))}
      </div>
    </section>
  );
};
export default page;
