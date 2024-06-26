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
    <InfiniteScroll
      dataLength={projects.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <div
          aria-label="Loading..."
          role="status"
          className="flex items-center justify-center space-x-2 overflow-y-hidden"
        >
          <svg
            className="h-20 w-20 animate-spin stroke-yellow-600"
            viewBox="0 0 256 256"
          >
            <line
              x1={128}
              y1={32}
              x2={128}
              y2={64}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1={224}
              y1={128}
              x2={192}
              y2={128}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1={128}
              y1={224}
              x2={128}
              y2={192}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1={32}
              y1={128}
              x2={64}
              y2={128}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            ></line>
          </svg>
          <span className="text-4xl font-medium text-yellow-600 ">
            Loading...
          </span>
        </div>
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
  );
};

export default InfiniteScrollCom;
