import { HomeFilled } from "@ant-design/icons";

const Main = () => {
  return (
    <div className="h-screen  pt-24 px-4 snap-start" id="main">
      <div className="flex items-start justify-start">
        <span className="h1 dark:text-[#00FF00] text-green-700">
          <HomeFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
          /Intro
        </span>
      </div>
      <div className="space-y-4 animate-slideUp flex flex-col items-center justify-center text-center h-full">
        <h1 className="text-5xl sm:text-6xl font-extrabold dark:text-green-100 text-green-300 ">
          <span className="text-xl sm:text-lg">Hieee, </span>
          <br />
          This is Milap Magar
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-500">
          Frontend Developer
        </h2>
      </div>
    </div>
  );
};

export default Main;
