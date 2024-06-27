import InfiniteScrollCom from "@/components/InfiniteScrollCom/InfiniteScrollCom";

import PageTitle from "@/components/PageTitle/PageTitle";

export const metadata = {
  title: "Projects",
  description: "Akash Khan Projects",
};
const page = async () => {
  return (
    <section className="">
      <PageTitle title={"My Projects"} />

      <InfiniteScrollCom />
    </section>
  );
};
export default page;
