"use client";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { income, accValues } from "@/config/data";

function SelectIncomeItem({ setSelectIncome, selectedCountry }) {
  const countries = React.useMemo(() => {
    return {
      Australia: "$",
      India: "₹",
    };
  }, []);
  const [currency, setCurrency] = React.useState("$");
  React.useEffect(() => {
    if (selectedCountry !== null) {
      setCurrency(countries[selectedCountry]);
    }
  }, [countries, selectedCountry]);
  return (
    <div className="flex-col flex items-start w-full md:w-[48%]">
      <label className="text-px15 text-darkblue mb-2">
        Select Your Annual Income
      </label>
      <Select
        items={accValues}
        usOpen={true}
        size="sm"
        placeholder="Select Income"
        className="max-w-sm"
        aria-label="Select Income"
        onChange={(e) => {
          console.log(e.target.value);
          setSelectIncome(e.target.value);
        }}
        renderValue={(items) => {
          return items.map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              <span className="text-px18 text-darkblue font-medium">
                {item.textValue.replaceAll("$", countries[selectedCountry])}
              </span>
            </div>
          ));
        }}
      >
        {accValues.map((item, index) => (
          <SelectItem key={index}>
            {item.income.replaceAll("$", countries[selectedCountry] || "$")}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectIncomeItem;
