import React from "react";
import { faqdata } from "@/config/data";
import classNames from "classnames";

function FaqSection() {
  return (
    <div className="flex flex-col bg-white lg:max-w-[881px] w-full p-6 rounded-2xl mt-5">
      <p className="text-darkblue text-3xl font-bold">
        Frequently Asked Questions
      </p>
      {faqdata.map((item, index) => (
        <div key={index} className="flex flex-col mt-5">
          <p className="text-darkblue text-xl font-bold">
            {index + 1}. {item.title}
          </p>
          {item.description.map((desc, index) => (
            <p
              key={index}
              className={classNames(
                "text-[#3E424A] font-medium text-base mt-2",
                {
                  "mt-6": index > 0,
                }
              )}
            >
              {desc}
            </p>
          ))}
          {item.lists?.map((list, index) => (
            <li
              key={index}
              className="text-[#3E424A] font-medium text-base mt-2 list-disc ml-5"
            >
              <strong>{list.title}</strong>
              {list.description}
            </li>
          ))}
          {item.orderedlist?.map((list, index) => (
            <div key={index} className="flex flex-col mt-8">
              <p className="text-darkblue font-medium text-base">
                {list.title}
              </p>
              {list.description.map((desc, index) => (
                <li
                  key={index}
                  className="text-[#3E424A] font-medium text-base mt-2 list-none ml-5"
                >
                  {desc}
                </li>
              ))}
            </div>
          ))}
          {item.doubts && (
            <p className="text-sm mt-8">
              Still have doubts?{" "}
              <span className="text-sm font-bold underline text-lightblue">
                Consult with a crypto taxation expert
              </span>
            </p>
          )}
          {item.details?.map((detail, index) => (
            <div key={index} className="flex flex-col mt-8">
              <p className="text-grey text-base font-bold">{detail.title}</p>
              <p className="text-darkblue font-medium text-base mt-2">
                {detail.description}
              </p>
            </div>
          ))}
          {item.tabledata?.map((table, index) => (
            <div key={index} className="flex flex-col mt-8">
              <p className="text-darkblue text-base font-bold">{table.title}</p>
              <table className="mt-2 w-full border border-solid border-black max-w-[606px]">
                <thead>
                  <tr className="border border-solid border-black">
                    {table.header.map((item, index) => (
                      <th
                        key={index}
                        className="border border-solid border-black px-7 py-3.5"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.details.map((item, index) => (
                    <tr
                      key={index}
                      className="text-center border border-solid border-black"
                    >
                      <td className="border border-solid border-black px-7 py-3.5">
                        {item.income}
                      </td>
                      <td className="border border-solid border-black px-7 py-3.5">
                        {item.taxrate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          {item.calcdetails?.map((detail, index) => (
            <div key={index} className="flex flex-col mt-8">
              <p className="text-darkblue text-base font-bold">
                {detail.title}
              </p>
              <p className="text-darkblue text-base font-medium mt-2">
                {detail.description}
              </p>
              <p className="text-grey font-bold text-base mt-8">
                {detail.formula}
              </p>
              <p className="text-grey font-bold text-base mt-5">
                Note:
                {detail.note.map((item, index) => (
                  <span key={index} className="text-grey text-base mt-2">
                    {item}
                  </span>
                ))}
              </p>
              {detail.about.map((item, index) => (
                <p key={index} className="text-grey text-base font-medium mt-6">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FaqSection;
