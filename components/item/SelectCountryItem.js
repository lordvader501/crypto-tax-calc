"use client";
import { Avatar, Select, SelectItem } from "@nextui-org/react";
import React from "react";

function SelectCountryItem() {
  const countries = [{ name: "Australia", logo: "https://flagcdn.com/au.svg" }];
  return (
    <div className=" relative md:flex-row flex-col items-start flex md:items-center w-[48%] gap-y-1">
      <span className="whitespace-nowrap pr-2 text-px15 text-darkblue">
        Country
      </span>
      <Select
        items={countries}
        size="lg"
        placeholder="Select country"
        aria-label="Select country"
        labelPlacement="outside"
        className="max-w-sm"
        radius="sm"
        renderValue={(items) => {
          return items.map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              <Avatar
                alt={item.data.name}
                className="h-6 w-6"
                src={item.data.logo}
              />
              <div className="flex flex-col">
                <span className="text-px18 text-darkblue font-medium">
                  {item.data.name}
                </span>
              </div>
            </div>
          ));
        }}
      >
        {(country) => (
          <SelectItem
            key={country.name}
            startContent={
              <Avatar
                alt={country.name}
                className="w-6 h-6"
                src={country.logo}
              />
            }
          >
            {country.name}
          </SelectItem>
        )}
      </Select>
    </div>
  );
}

export default SelectCountryItem;
