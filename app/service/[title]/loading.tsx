import React from "react";

const loading = () => {
  return (
    <div className="h-screen text-5xl text-red-600 flex items-center justify-center">
      loading
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>{" "}
    </div>
  );
};

export default loading;
