export const accValues = [
  {
    income: "$0 - $18,200",
    taxrate: "0%",
  },
  {
    income: "$18,201 - $45,000",
    taxrate: "Nil + 19% of the excess over $18,200",
  },
  {
    income: "$45,001 - $120,000",
    taxrate: "$5,092 + 32.5% of the excess over $45,000",
  },
  {
    income: "$120,001 - $180,000",
    taxrate: "$29,467 + 37% of the excess over $120,000",
  },
  {
    income: "$180,001+",
    taxrate: "$51,667 + 45% of the excess over $180,000",
  },
];
const countryTaxes = {
  Austrelia: [
    {
      income: "$0 - $18,200",
      taxrate: "0%",
    },
    {
      income: "$18,201 - $45,000",
      taxrate: "Nil + 19% of the excess over $18,200",
    },
    {
      income: "$45,001 - $120,000",
      taxrate: "$5,092 + 32.5% of the excess over $45,000",
    },
    {
      income: "$120,001 - $180,000",
      taxrate: "$29,467 + 37% of the excess over $120,000",
    },
    {
      income: "$180,001+",
      taxrate: "$51,667 + 45% of the excess over $180,000",
    },
  ],
  India: [
    {
      income: "$0 - $18,200rupess",
      taxrate: "0%",
    },
    {
      income: "$18,201 - $45,000 rupees",
      taxrate: "Nil + 19% of the excess over $18,200",
    },
    {
      income: "$45,001 - $120,000 rupees",
      taxrate: "$5,092 + 32.5% of the excess over $45,000",
    },
    {
      income: "$120,001 - $180,000 rupees",
      taxrate: "$29,467 + 37% of the excess over $120,000",
    },
    {
      income: "$180,001+",
      taxrate: "$51,667 + 45% of the excess over $180,000",
    },
  ],
};

export const taxrate = [
  "0%",
  "Nil + 19% of the excess over $18,200",
  "$5,092 + 32.5% of the excess over $45,000",
  "$29,467 + 37% of the excess over $120,000",
  "$51,667 + 45% of the excess over $180,000",
];
export const income = [
  "$0 - $18,200",
  "$18,201 - $45,000",
  "$45,001 - $120,000",
  "$120,001 - $180,000",
  "$180,001+",
];
