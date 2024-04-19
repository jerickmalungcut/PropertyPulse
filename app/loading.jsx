"use client";

import { Audio } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
export default LoadingPage;
