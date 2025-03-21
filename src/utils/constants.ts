const jwtKey = process.env.NEXT_PRIVATE_JWT_SECRET;
export const encodedKey = new TextEncoder().encode(jwtKey);

export const Buses: { label: string; value: string }[] = [
  {
    value: 'toyota',
    label: 'Toyota Hiace'
  }, 
  {
    value: 'minibus',
    label: 'Minibus'
  }, 
  {
    value: 'sienna',
    label: 'Sienna'
  },  
]

export const Cities: { label: string; value: string }[] = [
  {
    label: "Lagos",
    value: "lagos",
  }, 
  {
    label: "Kano",
    value: "kano",
  }, 
  {
    label: "Abuja",
    value: "abuja",
  }, 
  {
    label: "Ibadan",
    value: "ibadan",
  }, 
  {
    label: "Port Harcourt",
    value: "ph",
  }, 
  {
    label: "Aba",
    value: "aba",
  }, 
  {
    label: "Onitsha",
    value: "onitsha",
  }, 
  {
    label: "Benin",
    value: "benin",
  }, 
  {
    label: "Shagamu",
    value: "shagamu",
  }, 
  {
    label: "Ogbomoso",
    value: "ogbomoso",
  }, 
  {
    label: "Owerri",
    value: "owerri",
  }, 
  {
    label: "Ikeja",
    value: "ikeja",
  }, 
  {
    label: "Osogbo",
    value: "osogbo",
  }, 
  {
    label: "Agege",
    value: "agege",
  }, 
  {
    label: "Ilesa",
    value: "ilesa",
  }, 

  {
    label: "Oshodi",
    value: "oshodi",
  }, 
  {
    label: "Surulere",
    value: "surulere",
  },   
  {
    label: "Ikoyi",
    value: "ikoyi",
  }, 
  {
    label: "Warri",
    value: "warri",
  },  
  {
    label: "Akure",
    value: "akure"
  },
  {
    label: "Ekiti",
    value: "ekiti"
  },
  {
    label: "Osun",
    value: "osun"
  },
]

export enum City {
  LAGOS = "lagos",
  KANO = "kano",
  ABUJA = "abuja",
  IBADAN = "ibadan",
  PORT_HARCOURT = "ph",
  ABA = "aba",
  ONITSHA = "onitsha",
  BENIN = "benin",
  SHAGAMU = "shagamu",
  OGBOMOSO = "ogbomoso",
  OWERRI = "owerri",
  IKEJA = "ikeja",
  OSOGBO = "osogbo",
  AGEGE = "agege",
  ILESA = "ilesa",
  OSHODI = "oshodi",
  SURULERE = "surulere",
  IKOYI = "ikoyi",
  WARRI = "warri",
  AKURE = "akure",
  EKITI = "ekiti",
  OSUN = "osun",
}

export enum Bus {
  TOYOTA = "toyota",
  MINIBUS = "minibus",
  SIENNA = "sienna",
}