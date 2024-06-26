"use client";

const ProjectLinkButton = (title, url) => {
  return (
    <a className="" href={url} target="_blank">
      <span className="">{title}</span>
    </a>
  );
};
export default ProjectLinkButton;
