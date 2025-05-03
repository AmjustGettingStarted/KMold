import React from "react";

const loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center text-5xl text-red-600">
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>{" "}
      loading
    </div>
  );
};

export default loading;
