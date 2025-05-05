import React from "react";

const Awards = () => {
  return (
    <div className="w-full py-4 sm:py-8 h-auto ">
      <div className="flex flex-col ">
        <div>
          <h1 className="uppercase text-xl font-bold w-full pb-4">
            awards and achievements{" "}
          </h1>
          <div className="border-b border-[#4d4d4dbe]/50"></div>
        </div>
        <div className="sm:text-justify text-left space-y-8 text-[#4d4d4dbe] py-4 leading-loose">
          <p>
            Our longstanding reputation is sure to continue with strong growth
            in the future. We have received innumerable awards that speak for
            the innovations introduced by us and the various milestones
            achieved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
