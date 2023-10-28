"use client";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { income, accValues } from "@/config/data";

function SelectIncomeItem({ setSelectIncome }) {
  return (
    <div className="flex-col flex items-start w-full md:w-[48%]">
      <label className="text-px15 text-darkblue mb-2">
        Select Your Annual Income
      </label>
      <Select
        items={accValues}
        size="sm"
        placeholder="Select Income"
        className="max-w-sm"
        aria-label="Select Income"
        onChange={(e) => {
          setSelectIncome(income.indexOf(e.target.value));
        }}
        renderValue={(items) => {
          return items.map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              <span className="text-px18 text-darkblue font-medium">
                {item.data.income}
              </span>
            </div>
          ));
        }}
      >
        {(item) => <SelectItem key={item.income}>{item.income}</SelectItem>}
      </Select>
    </div>
  );
}

export default SelectIncomeItem;
