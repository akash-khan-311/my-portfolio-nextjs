import InfiniteScrollCom from "@/components/InfiniteScrollCom/InfiniteScrollCom";
import Loader from "@/components/Loader";
import PageTitle from "@/components/PageTitle/PageTitle";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { getProjects } from "@/data/projects";

import { Suspense } from "react";
export const metadata = {
    title: "Projects",
    description: "Akash Khan Projects",
  };
const page = async () => {
  const projects = getProjects();

  return (
    <section className="">
      <PageTitle title={"My Projects"} />

      <InfiniteScrollCom/>
    </section>
  );
};
export default page;
