const data  = [
  {
    id: 1,
    title: "React JS",
    image: "https://i.postimg.cc/nhxsgkks/react.png",
    description: "JavaScript library for UIs. Create reusable components, manage state efficiently, and enhance performance with React's virtual DOM."
  },
  {
    id: 2,
    title: "Node JS",
    image: "https://i.postimg.cc/CMWnHYns/nodejs.png",
    description: "Server-side JavaScript runtime. Enables scalable, high-performance web apps with an event-driven, non-blocking I/O model, ideal for APIs."
  },
  {
    id: 3,
    title: "WordPress",
    image: "https://i.postimg.cc/c4wgFjQy/wordpress.png",
    description: "Versatile CMS in PHP. Powers websites, blogs, and e-commerce stores with themes, plugins, and a customizable framework."
  }
]


const getServiceData = ()=> {
  return data
}

export {getServiceData}