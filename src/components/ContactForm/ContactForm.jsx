const ContactForm = () => {
  return (
    <>
      <div className="dark:backdrop-blur-md dark:bg-white/20 bg-gray-500 p-6 rounded-lg">
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full backdrop-blur-2xl bg-white/10 placeholder:text-white rounded-lg py-3  px-4 text-white text-sm outline-[#a91079]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full backdrop-blur-2xl bg-white/10 rounded-lg py-3 px-4 text-white placeholder:text-white text-sm outline-[#a91079]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full backdrop-blur-2xl bg-white/10 rounded-lg py-3 px-4 text-white placeholder:text-white text-sm outline-[#a91079]"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full backdrop-blur-2xl bg-white/10 rounded-lg px-4 text-white placeholder:text-white text-sm pt-3 outline-[#a91079]"
            defaultValue={""}
          />
          <button
            type="button"
            className="text-white transition-all duration-200 bg-pink-700 hover:bg-pink-600 tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              className="mr-2"
              viewBox="0 0 548.244 548.244"
            >
              <path
                fillRule="evenodd"
                d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                clipRule="evenodd"
                data-original="#000000"
              />
            </svg>
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
