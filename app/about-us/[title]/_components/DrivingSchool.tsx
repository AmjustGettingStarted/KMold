import React from "react";

const DrivingSchool = () => {
  return (
    <div className="w-full py-8 h-auto ">
      <div className="flex flex-col ">
        <div>
          <h1 className="uppercase text-xl font-bold w-full pb-4">
            MARUTI DRIVING SCHOOL
          </h1>
          <div className="border-b border-[#4d4d4dbe]/50"></div>
        </div>
        <div className="text-justify space-y-8 text-[#4d4d4dbe] py-4 leading-loose">
          <p>
            Maruti Driving School was established on 30th Nov 2011 with the goal
            to provide the best motor-driving training. The purpose is to impart
            not just better driving skills but also better awareness towards
            overall road safety. MDS provides immense opportunities to learn
            driving & develop confidence. It is definitely the right way to move
            towards a safer future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrivingSchool;
