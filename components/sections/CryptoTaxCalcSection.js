"use client";
import { useState, useEffect } from "react";
import SelectFinancialYearItem from "../item/SelectFinancialYearItem";
import SelectCountryItem from "../item/SelectCountryItem";
import InputItem from "../item/InputItem";
import TermSelectionItem from "../item/TermSelectionItem";
import SelectIncomeItem from "../item/SelectIncomeItem";
import { taxrate } from "@/config/data";
import classNames from "classnames";

function CryptoTaxCalcSection() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [capitalGain, setCapitalGain] = useState(0);
  const [selectTerm, setSelectTerm] = useState({
    isLongTerm: true,
    isShortTerm: false,
  });
  const [selectIncome, setSelectIncome] = useState("");
  const countries = [
    { name: "Australia", logo: "https://flagcdn.com/au.svg", currency: "$" },
    { name: "India", logo: "https://flagcdn.com/in.svg", currency: "₹" },
  ];
  const countriesCurr = {
    Australia: "$",
    India: "₹",
  };
  const [selectedCountry, setSelectedCountry] = useState(null);
  useEffect(() => {
    setCapitalGain(salePrice - purchasePrice - expenses);
  }, [purchasePrice, salePrice, expenses]);
  console.log(selectIncome);
  return (
    <div className="flex flex-col items-center justify-center bg-white lg:max-w-[881px] lg:min-w-[680px] w-full lg:pt-px35 lg:px-px76 lg:pb-px58 p-px17 rounded-2xl">
      <h1 className="text-center font-bold md:text-4xl text-2xl text-darkblue mb-10">
        Free Crypto Tax Calculator Australia
      </h1>
      <div className="flex justify-between w-full md:pb-7 pb-px25 border-b solid border-[rgba(201,207,221,0.60)]">
        <SelectFinancialYearItem />
        <SelectCountryItem
          countries={countries}
          setCountry={setSelectedCountry}
        />
      </div>
      <div className="flex w-full flex-col md:gap-y-7 md:pt-7 pt-px25 gap-y-5">
        <div className="flex md:flex-row flex-col justify-between w-full gap-y-2">
          <InputItem
            label="Enter purchase price of Crypto"
            placeholder="Purchase price"
            setItem={setPurchasePrice}
            selectedCountry={selectedCountry}
          />
          <InputItem
            label="Enter sale price of Crypto"
            placeholder="Sale Price"
            setItem={setSalePrice}
            selectedCountry={selectedCountry}
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between w-full gap-y-2">
          <InputItem
            label="Enter your Expenses"
            placeholder="Expences"
            setItem={setExpenses}
            selectedCountry={selectedCountry}
          />
          <div className="flex-col flex items-start w-full md:w-[48%]">
            <label className="text-px15 text-darkblue mb-2">
              Investment Type
            </label>
            <div className="flex gap-x-2.5">
              <TermSelectionItem
                duration="Short Term"
                sortTerm={true}
                term={selectTerm.isShortTerm}
                setTerm={setSelectTerm}
              />
              <TermSelectionItem
                duration="Long Term"
                term={selectTerm.isLongTerm}
                setTerm={setSelectTerm}
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between w-full gap-y-2">
          <SelectIncomeItem
            setSelectIncome={setSelectIncome}
            selectedCountry={selectedCountry}
          />
          <div className="md:flex-col flex items-start md:justify-end w-full md:w-[48%]">
            <p className="text-sm text-grey">
              Tax Rate<span className="md:hidden">:&nbsp;</span>
            </p>
            <p className="text-sm text-grey">
              {taxrate[selectIncome]?.replaceAll(
                "$",
                countriesCurr[selectedCountry] || "$"
              )}
            </p>
          </div>
        </div>
        {selectTerm.isLongTerm && (
          <div className="flex md:flex-row flex-col justify-between w-full gap-y-2">
            <InputItem
              label="Capital gains amount"
              placeholder="Capital gains amount"
              value={capitalGain}
              readOnly
              selectedCountry={selectedCountry}
            />
            <InputItem
              label="Discount for long term gains"
              placeholder="Discount"
              selectedCountry={selectedCountry}
              value={
                selectTerm.isLongTerm && capitalGain >= 0
                  ? capitalGain * 0.5
                  : 0
              }
              readOnly
            />
          </div>
        )}
        <div className="flex md:flex-row flex-col items-center justify-between w-full gap-y-5 md:mt-0 mt-9">
          <div
            className={classNames(
              "flex justify-center items-center flex-col md:w-[48%] w-full rounded-lg pt-5 pb-6 max-w-[300px]",
              {
                "bg-[#EBF9F4]": capitalGain >= 0,
                "bg-[#FDECEC]": capitalGain < 0,
              }
            )}
          >
            <p className="text-center text-darkblue text-base font-medium mb-1">
              Net Capital gains tax amount
            </p>
            <p
              className={classNames("text-center font-bold text-2xl", {
                "text-[#0FBA83]": capitalGain >= 0,
                "text-[#F44336]": capitalGain < 0,
              })}
            >
              {countriesCurr[selectedCountry] || "$"} {capitalGain < 0 && "-"}{" "}
              {selectTerm.isLongTerm
                ? capitalGain >= 0
                  ? capitalGain - capitalGain * 0.5
                  : -capitalGain
                : capitalGain}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col md:w-[48%] w-full rounded-lg pt-5 pb-6 bg-[#EBF2FF] max-w-[300px]">
            <p className="text-center text-darkblue text-base font-medium mb-1">
              The tax you need to pay*
            </p>
            <p className="text-center font-bold text-2xl text-[#0141CF]">
              {countriesCurr[selectedCountry] || "$"}{" "}
              {+selectIncome === 0
                ? "0"
                : selectTerm.isLongTerm
                ? +selectIncome === 1
                  ? 0.19 * capitalGain * 0.5
                  : +selectIncome === 2
                  ? 0.325 * capitalGain * 0.5
                  : +selectIncome === 3
                  ? 0.37 * capitalGain * 0.5
                  : 0.45 * capitalGain * 0.5
                : +selectIncome === 1
                ? 0.19 * capitalGain
                : +selectIncome === 2
                ? 0.325 * capitalGain
                : +selectIncome === 3
                ? 0.37 * capitalGain
                : 0.45 * capitalGain}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoTaxCalcSection;
