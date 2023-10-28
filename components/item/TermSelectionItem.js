"use client";
import { Button } from "@nextui-org/react";
import classNames from "classnames";
import React from "react";

function TermSelectionItem({ duration, setTerm, term, sortTerm }) {
  return (
    <div className="flex flex-col">
      <Button
        variant="bordered"
        radius="sm"
        size="lg"
        className={classNames(
          "text-px18 w-[158px] font-medium border-2 border-solid p-0 pl-2",
          {
            "text-[#0141CF] border-[#0141CF]": term,
          }
        )}
        onClick={() => {
          sortTerm
            ? setTerm({ isShortTerm: true, isLongTerm: false })
            : setTerm({ isShortTerm: false, isLongTerm: true });
        }}
      >
        {duration}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M27.9998 9.33337L11.9998 25.3334L4.6665 18L6.5465 16.12L11.9998 21.56L26.1198 7.45337L27.9998 9.33337Z"
            fill={term ? "#0141CF" : "#fff"}
          />
        </svg>
      </Button>
      <p className="text-px15 text-darkblue font-medium">
        {term ? ">" : "<"} 12 months
      </p>
    </div>
  );
}

export default TermSelectionItem;
