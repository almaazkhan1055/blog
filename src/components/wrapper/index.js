import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="px-[20px] sm:px-[12%] sm:py-[50px] w-full overflow-hidden">
      {children}
    </div>
  );
};

export default ContentWrapper;
