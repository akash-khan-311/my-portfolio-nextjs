export const getServicesData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/service");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
