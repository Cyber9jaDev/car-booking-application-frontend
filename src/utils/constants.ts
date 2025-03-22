const jwtKey = process.env.NEXT_PRIVATE_JWT_SECRET;
export const encodedKey = new TextEncoder().encode(jwtKey);

export const Buses: { label: string; value: string }[] = [
  {
    value: "TOYOTA",
    label: "TOYOTA",
  },
  {
    value: "MINIBUS",
    label: "MINIBUS",
  },
  {
    value: "SIENNA",
    label: "SIENNA",
  },
];

export const Cities: { label: string; value: string }[] = [
  {
    label: "LAGOS",
    value: "LAGOS",
  },
  {
    label: "KANO",
    value: "KANO",
  },
  {
    label: "ABUJA",
    value: "ABUJA",
  },
  {
    label: "IBADAN",
    value: "IBADAN",
  },
  {
    label: "PORT_HARCOURT",
    value: "PORT_HARCOURT",
  },
  {
    label: "ABA",
    value: "ABA",
  },
  {
    label: "ONITSHA",
    value: "ONITSHA",
  },
  {
    label: "BENIN",
    value: "BENIN",
  },
  {
    label: "SHAGAMU",
    value: "SHAGAMU",
  },
  {
    label: "OGBOMOSO",
    value: "OGBOMOSO",
  },
  {
    label: "OWERRI",
    value: "OWERRI",
  },
  {
    label: "IKEJA",
    value: "IKEJA",
  },
  {
    label: "OSOGBO",
    value: "OSOGBO",
  },
  {
    label: "AGEGE",
    value: "AGEGE",
  },
  {
    label: "ILESA",
    value: "ILESA",
  },
  {
    label: "OSHODI",
    value: "OSHODI",
  },
  {
    label: "SURULERE",
    value: "SURULERE",
  },
  {
    label: "IKOYI",
    value: "IKOYI",
  },
  {
    label: "WARRI",
    value: "WARRI",
  },
  {
    label: "AKURE",
    value: "AKURE",
  },
  {
    label: "EKITI",
    value: "EKITI",
  },
  {
    label: "OSUN",
    value: "OSUN",
  },
];
