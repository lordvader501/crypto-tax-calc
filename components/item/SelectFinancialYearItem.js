"use client";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

function SelectFinancialYearItem() {
  const financialYears = [{ year: "FY 2023-24" }];
  return (
    <div className="relative md:flex-row flex-col flex items-start md:items-center w-[48%] gap-y-1">
      <span className="whitespace-nowrap pr-2 text-px15 text-darkblue">
        Financial Year
      </span>
      <Select
        items={financialYears}
        size="sm"
        placeholder="Select Financial Year"
        className="max-w-sm"
        aria-label="Select Financial Year"
        renderValue={(items) => {
          return items.map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              <span className="text-px18 text-darkblue font-medium">
                {item.data.year}
              </span>
            </div>
          ));
        }}
      >
        {(financialYear) => (
          <SelectItem key={financialYear.year}>{financialYear.year}</SelectItem>
        )}
      </Select>
    </div>
  );
}

export default SelectFinancialYearItem;
