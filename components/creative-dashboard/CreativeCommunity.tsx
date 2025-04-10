import React from "react";

const CreativeCommunity = () => {
  return (
    <section className=" flex flex-col gap-5 my-5">
      <div className=" flex-col h-20 bg-linear-gradient w-full flex justify-center items-center">
        <h2 className="text-sm md:text-xl lg:text-2xl font-bold">
          {" "}
          Didn’t get the job? It’s not you, it’s them, Don’t feel down.
        </h2>
        <h2 className="text-sm">You will get the next one, hang in there...</h2>
      </div>
      <div className="bodyMargin py-5 text-primary flex flex-col gap-3">
        <h2 className="text-2xl lg:text-3xl font-bold">
          You are not alone, Interact with other Creatives
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3 items-center">
            <h2 className="">Telegram community</h2>
            <div className="flex flex-col py-3 px-15 justify-center bg-primary  text-white">
              <h2 className="text-[10px] sm:text-sm md:text-xl">Join Here</h2>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <h2 className="">Discord community</h2>
            <div className="flex flex-col py-3 px-15 justify-center bg-primary  text-white">
              <h2 className="text-[10px] sm:text-sm md:text-xl">Join Here</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeCommunity;
