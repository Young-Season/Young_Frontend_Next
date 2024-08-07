import NicknameInput from "@/components/common/NicknameInput";
import React from "react";

const index = () => {
  return (
    <main className="bg--layout flex flex-col items-center justify-center p-7">
      <div className="z-10 flex flex-col justify-center items-center gap-3">
        <NicknameInput hostName="" />
      </div>
    </main>
  );
};

export default index;
