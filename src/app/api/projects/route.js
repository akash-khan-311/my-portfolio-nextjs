import { getProjects } from "@/data/projects";

export const GET=()=> {
    const projectsData = getProjects();
    return Response.json(projectsData);
}