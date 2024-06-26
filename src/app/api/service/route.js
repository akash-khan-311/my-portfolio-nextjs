import { getServiceData } from "@/data/serviceData";

export const GET = () => {
  const servicesData = getServiceData();
  return Response.json(servicesData);
};
