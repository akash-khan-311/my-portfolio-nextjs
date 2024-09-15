/* eslint-disable react/no-unescaped-entities */
import PageTitle from "@/components/PageTitle/PageTitle";

import ContactForm from "@/components/ContactForm/ContactForm";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

const ContactPage = () => {
  return (
    <>
      <PageTitle title={"Contact with me"} />
      <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto ">
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
          <GetInTouch />
          <ContactForm />
        </div>
      </div>
    </>
  );
};
export default ContactPage;
