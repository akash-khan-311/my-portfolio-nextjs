"use client";
import { Suspense, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import ProjectCard from "../ProjectCard/ProjectCard";
import { getProjects } from "@/data/projects";

const InfiniteScrollCom = () => {
  const allProjects = getProjects();
  const [projects, setProjects] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [itemsPerPage] = useState(1); // Number of items to load per scroll
  const [next, setNext] = useState(1); // Next items to be displayed

  useEffect(() => {
    setProjects(allProjects.slice(0, next));
  }, [next, allProjects]);

  const fetchMoreData = () => {
    if (projects.length >= allProjects.length) {
      setHasMore(false);
      return;
    }
    setNext(next + itemsPerPage);
  };

  return (
    <>
    <InfiniteScroll
      dataLength={projects.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <section className="my-10 animate-pulse">
        <div className="flex flex-col md:flex-row justify-between items-center gap-x-10">
          <div className="bg-gray-300 h-72 rounded-md w-full md:w-2/5"></div>
          <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:items-start">
            <div className="bg-gray-300 h-10 w-3/5 my-5 md:my-0 rounded"></div>
            <div className="bg-gray-300 h-6 w-full my-4 rounded"></div>
            <div className="bg-gray-300 h-6 w-4/5 my-4 rounded"></div>
            <div className="flex gap-5 flex-wrap justify-center items-center md:items-start md:justify-start">
              <div className="bg-gray-300 h-6 w-20 my-2 rounded"></div>
              <div className="bg-gray-300 h-6 w-20 my-2 rounded"></div>
              <div className="bg-gray-300 h-6 w-20 my-2 rounded"></div>
            </div>
            <div className="flex gap-x-5 mt-5">
              <div className="bg-gray-300 h-10 w-32 rounded"></div>
              <div className="bg-gray-300 h-10 w-32 rounded"></div>
            </div>
          </div>
        </div>
      </section>
      }
    >
      <div className="my-20">
        {projects.map((project) => (
          <Suspense fallback={<Loader />} key={project.id}>
            <ProjectCard project={project} />
          </Suspense>
        ))}
      </div>
    </InfiniteScroll>
    
    </>
  );
};

export default InfiniteScrollCom;
