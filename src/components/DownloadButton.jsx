"use client";

const DownloadButton = () => {
  // https://drive.google.com/file/d/1Nq8do3O-rJ0DhhUcNGWy5rKM-RhwWrVD/view?usp=sharing
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1Nq8do3O-rJ0DhhUcNGWy5rKM-RhwWrVD"
      download={
        "https://drive.google.com/uc?export=download&id=1Nq8do3O-rJ0DhhUcNGWy5rKM-RhwWrVD"
      }
      type="button"
      className="px-8 py-3 cursor-pointer bg-[#F31559] rounded-md text-white outline-none focus:invisible shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span className="ml-2">Download resume</span>
    </a>
  );
};
export default DownloadButton;
