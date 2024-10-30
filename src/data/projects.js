const projects = [
  {
    id: 1,
    name: "GEAR GRASP",
    image: "https://i.postimg.cc/G3fTbp9p/Screenshot-1-removebg-preview.png",
    live_link: "https://gear-grasp.netlify.app/",
    code_link: "https://github.com/akash-khan-311/gear-grasp",
    category: "react",
    tags: ["Tailwind", "React JS", "Swiper JS"],
    description:
      "A dynamic web app for gear enthusiasts, integrating React, Swiper JS and Tailwind CSS, enabling users to explore and purchase their favorite gear in an interactive online community.",
  },
  {
    id: 2,
    name: "Foodie Fellowship",
    image: "https://i.postimg.cc/ydrssWqS/projects-10.png",
    live_link: "https://ak-foodie-fellowship.netlify.app/",
    code_link: "https://github.com/akash-khan-311/ak-foodie-client",
    category: "react+nodejs",
    tags: [
      "Tailwind",
      "React JS",
      "Firebase",
      "Node Js",
      "Express Js",
      "MongoDB",
    ],
    description:
      "A dynamic web app for food enthusiasts, integrating React and Node.js, enabling users to explore and share their favorite recipes in an interactive online community.",
  },
  {
    id: 3,
    name: "as autometive",
    image: "https://i.postimg.cc/9MfC6Zkh/projects-9.png",
    live_link: "https://as-autometive.netlify.app/",
    code_link: "https://github.com/akash-khan-311/as-autometive-client",
    category: "react+nodejs",
    tags: ["Tailwind", "React JS", "Firebase", "Node Js"],
    description:
      "An automotive services platform crafted with React and Node.js, offering users a seamless experience in accessing and managing automotive-related information and services.",
  },
  {
    id: 4,
    name: "as health",
    image: "https://i.postimg.cc/8CN1bqBs/projects-8.png",
    live_link: "https://as-health.netlify.app",
    code_link: "https://github.com/akash-khan-311/as-health",
    category: "react",
    tags: ["Tailwind", "React JS", "Firebase"],
    description:
      "A health-focused React app providing valuable resources and information, promoting well-being through a user-friendly interface and curated content for a healthier lifestyle.",
  },
  {
    id: 5,
    name: "digital clock",
    image: "https://i.postimg.cc/0jMxQxxX/projects-7.png",
    live_link: "https://digital-clock-akash-khan.netlify.app/",
    code_link: "https://github.com/akash-khan-311/digital-clock",
    category: "javascript",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "A JavaScript-based digital clock web app, offering users a reliable and visually appealing timekeeping solution with customizable features for a personalized experience.",
  },
  {
    id: 6,
    name: "as career hub",
    image: "https://i.postimg.cc/7ZgH0xzp/projects-12.png",
    live_link: "https://as-career-hub.netlify.app",
    code_link: "https://github.com/akash-khan-311/as-career-hub",
    category: "react",
    tags: ["Tailwind", "React JS"],
    description:
      "A React-based career hub, connecting professionals with opportunities, resources, and insights to facilitate career growth and exploration in a dynamic online environment.",
  },
  {
    id: 7,
    name: "as programming",
    image: "https://i.postimg.cc/zXh8YJxV/projects-6.png",
    live_link: "https://as-programming-courses.netlify.app/",
    code_link: "https://github.com/akash-khan-311/as-programming",
    category: "react",
    tags: ["Tailwind", "React JS"],
    description:
      "A React-based platform offering programming courses, providing a comprehensive learning experience with diverse modules, projects, and real-world applications for aspiring developers.",
  },
  {
    id: 8,
    name: "money master",
    image: "https://i.postimg.cc/4yDGHMxf/projects-5.png",
    live_link: "https://akash-khan-311.github.io/money-master/",
    code_link: "https://github.com/akash-khan-311/money-master",
    category: "javascript",
    tags: ["HTML", "CSS", "Tailwind", "JavaScript"],
    description:
      "JavaScript-driven financial management app, empowering users to master their finances through intuitive features, insightful analytics, and personalized budgeting tools.",
  },
  {
    id: 9,
    name: "Tajam",
    image: "https://i.postimg.cc/gcQm7wqC/projects-4.png",
    live_link: "https://intructory.netlify.app/",
    code_link: "https://github.com/akash-khan-311",
    category: "css",
    tags: ["HTML", "CSS", "Bootstrap"],
    description:
      "A CSS-centric introductory website, showcasing creative design elements and interactive features to leave a lasting impression on visitors exploring the web with an aesthetic touch.",
  },
  {
    id: 10,
    name: "influencer studio",
    image: "https://i.postimg.cc/htqgSHYM/projects-3.png",
    live_link: "https://akash-khan-311.github.io/influencer-studio/",
    code_link: "https://github.com/akash-khan-311/influencer-studio",
    category: "css",
    tags: ["HTML", "CSS"],
    description:
      "CSS-driven influencer studio website, offering a visually captivating and user-friendly platform for influencers to showcase their portfolios and connect with potential collaborators.",
  },
  {
    id: 11,
    name: "search food",
    image: "https://i.postimg.cc/LsDmQNND/projects-11.png",
    live_link: "https://akash-khan-311.github.io/search-food-api/",
    code_link: "https://github.com/akash-khan-311/search-food-api",
    category: "javascript",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description:
      "JavaScript-based food search app, allowing users to explore and discover a wide range of culinary delights with a seamless and intuitive interface for a delightful food exploration experience.",
  },
  {
    id: 12,
    name: "bd tiger football club",
    image: "https://i.postimg.cc/25kDWnrZ/projects-2.png",
    live_link: "https://pensive-torvalds-7a5813.netlify.app",
    code_link: "https://github.com/akash-khan-311/The-Team-Of-Football",
    category: "css",
    tags: ["HTML", "CSS"],
    description:
      "CSS-powered website for the BD Tiger Football Club, offering fans and enthusiasts a visually appealing platform to stay updated on team news, events, and highlights in a dynamic online environment.",
  },
  {
    id: 13,
    name: "Score Board",
    image: "https://i.postimg.cc/CxH0dcT0/projects-1.png",
    live_link: "https://akash-khan-311.github.io/score-board/",
    code_link: "https://github.com/akash-khan-311/score-board",
    category: "javascript",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "The Score Board Web Application is a user-friendly and interactive platform created using HTML, CSS, and JavaScript, designed to manage and display scores for various matches. The application provides a simple and intuitive interface for users to input score increments and decrements, add new matches, and reset the total score.",
  },
];

export const getProjects = () => {
  return projects;
};
