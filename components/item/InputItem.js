"use client";
import { Input } from "@nextui-org/react";
import React from "react";

function InputItem({ label, placeholder, setItem, selectedCountry, ...props }) {
  const countries = {
    Australia: "$",
    India: "₹",
  };
  return (
    <div className="flex-col flex items-start md:w-[48%] w-full">
      <label className="text-px15 text-darkblue mb-2">{label}</label>
      <Input
        size="lg"
        radius="sm"
        startContent={
          <span className="text-px18 text-darkblue font-medium">
            {countries[selectedCountry]}
          </span>
        }
        placeholder={placeholder}
        onChange={(e) => setItem(parseInt(e.target.value.split(",").join("")))}
        classNames={{
          input: ["text-px18 text-darkblue font-medium"],
        }}
        {...props}
      />
    </div>
  );
}

export default InputItem;
