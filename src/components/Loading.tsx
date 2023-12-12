import React from "react";
import { GoSync } from "react-icons/go";

const Loading: React.FC = () => {
  return (
    <div className="loader-container">
      <div>
        <GoSync />
      </div>
    </div>
  );
};

export default Loading;
