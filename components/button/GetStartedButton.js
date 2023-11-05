"use client";
import { Button } from "@nextui-org/react";
import classNames from "classnames";
import React from "react";

function GetStartedButton({ className, title }) {
  return (
    <Button
      radius="sm"
      className={classNames(
        "bg-white font-semibold text-darkblue mt-9",
        className
      )}
      size="lg"
    >
      {title}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="12"
        viewBox="0 0 15 12"
        fill="none"
      >
        <path
          d="M13.9585 5.9952L1.4585 5.9952"
          stroke="#0F1629"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.91699 0.974793L13.9587 5.99479L8.91699 11.0156"
          stroke="#0F1629"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}

export default GetStartedButton;
