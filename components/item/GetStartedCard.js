import GetStartedLogo from "@/icons/GetStartedLogo";
import React from "react";
import GetStartedButton from "../button/GetStartedButton";

function GetStartedCard() {
  return (
    <div className="bg-[#0052FE] w-full lg:max-w-[426px] rounded-2xl h-min flex flex-col items-center px-4 py-px55">
      <div className="lg:flex flex-col hidden">
        <h1 className="text-white text-3xl font-bold text-center px-5 mb-4">
          Get Started with KoinX for FREE
        </h1>
        <h4 className="text-[#F2F2F2] text-sm font-medium text-center px-5 lg:mb-10">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </h4>
      </div>
      <GetStartedLogo />
      <div className="flex flex-col lg:hidden mt-8">
        <h1 className="text-white text-3xl font-bold text-center px-5 mb-4">
          Track your portfolio & taxes
        </h1>
        <h4 className="text-[#F2F2F2] text-sm font-medium text-center px-5 lg:mb-10">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </h4>
      </div>
      <GetStartedButton
        title="Get Started for FREE"
        className="hidden lg:flex"
      />
      <GetStartedButton
        title="Sign up at KoinX for free"
        className="lg:hidden flex"
      />
    </div>
  );
}

export default GetStartedCard;
