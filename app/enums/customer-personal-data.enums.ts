// Personal data
export enum HearAboutUsOptions {
  SOCIAL_MEDIA = "Social media",
  WEBSITE_AD = "Website ad",
  MERCHANT = "Merchant",
  FRIENDS = "Friends",
  OTHERS = "Others",
}

export enum IdentityOptions {
  ID = "ID",
  PASSPORT = "Passport",
}

export enum GenderOptions {
  MALE = "Male",
  FEMALE = "Female",
}

export enum JobStatusOptions {
  IN_SERVICE = "In service",
  RETIRED = "Retired",
  UNEMPLOYED = "Unemployed",
}

export enum MaritalStatusOptions {
  SINGLE = "Single",
  MARRIED = "Married",
  DIVORCED = "Divorced",
}

export enum PaymentTypeOptions {
  CASH = "Cash",
  INSTALLMENT = "Installment",
}

export enum ResidentialTypeOptions {
  STUDIO = "Studio",
  APPARTMENT = "Appartment",
  TWIN_HOUSE = "Twin House",
  VILLA = "Villa",
}

export enum ResidentialUnitAreaOptions {
  "50_100" = "50 - 100 m²",
  "101_200" = "101 - 200 m²",
  "201_500" = "201 - 500 m²",
  "Above_500" = "Above 500 m²",
}

export enum ResidenceTypeOptions {
  RENTAL = "Rental",
  OWNED = "Owned",
}

export enum RentalTypeOptions {
  OLD = "Old",
  NEW = "New",
}

export enum UtilityBillTypeOptions {
  ELECTRICITY = "Electricity",
  WATER = "Water",
  GAS = "Gas",
  PHONE = "Phone",
}

export enum ResidentialStayDurationOptions {
  "LESS_THAN_1_YEAR" = "Less than 1 year",
  "1_2_YEARS" = "1 - 2 years",
  "2_5_YEARS" = "2 - 5 years",
  "MORE_THAN_5_YEARS" = "More than 5 years",
}

export enum ReferenceRelationOptions {
  FATHER = "Father",
  MOTHER = "Mother",
  SISTER = "Sister",
  BROTHER = "Brother",
  WIFE = "Wife",
  UNCLE = "Uncle",
  FIREND = "Friend",
}
// Financial data

export enum IncomeTypeOptions {
  TIME_DEPOSIT = "Time deposit",
  ASSETS = "Assets",
  PART_TIME_JOB = "Part time job",
  OTHER = "Other",
}

export enum CommercialRegisterTypeOptions {
  SAE = "SAE",
  LLC = "LLC",
  INDIVIDUAL = "Individual",
}

export enum OfficeClinicOwnershipTypeOptions {
  RENTAL_SHARED = "Rental/shared",
  FULLY_OWNED = "Fully owned",
}

// Pickup data

export enum RegionOptions {
  HOME = "Home",
  WORK = "Work",
}

export enum CareerLevel {
  EXECUTIVE = "Executive or senior management",
  SENIOR_MANAGER = "Middle management",
  MANAGER = "First-level management",
  SENIOR = "Intermediate or experienced",
  ENTRY = "Entry level",
}

export enum OrganizationSectors {
  AUTOMOTIVE = "Automotive",
  CHEMICALS_AND_SPECIALITY_MATERIALS = "Chemicals and Speciality Materials",
  CONSUMER_PRODUCTS = "Consumer Products",
  INDUSTRIAL_PRODUCTS_AND_SERVICES = "Industrial Products and Services",
  RETAIL_WHOLESALE_AND_DISTRIBUTION = "Retail, Wholesale and Distribution",
  TRAVEL_HOSPITALITY_AND_SERVICES = "Travel, Hospitality and Services",
  ENERGY_RESOURCES = "Energy & Resources",
  MINING = "Mining",
  OIL_GAS = "Oil & Gas",
  POWER = "Power",
  SHIPPING_PORTS = "Shipping & Ports",
  WATER = "Water",
  BANKING_SECURITIES = "Banking & Securities",
  INSURANCE = "Insurance",
  INVESTMENT_MANAGEMENT = "Investment Management",
  REAL_ESTATE = "Real Estate",
  HEALTH_CARE = "Health Care",
  LIFE_SCIENCES = "Life Sciences",
  PUBLIC_SECTOR = "Public Sector",
  CIVIL_GOVERNMENT = "Civil Government",
  DEFENSE = "Defense",
  EDUCATION = "Education",
  INTERNATIONAL_DONOR_ORGANIZATIONS = "International Donor Organizations",
  PUBLIC_HEALTH_AND_SOCIAL_SERVICES = "Public Health and Social Services",
  PUBLIC_TRANSPORTATION = "Public Transportation",
  SECURITY_AND_JUSTICE = "Security and Justice",
  TECHNOLOGY = "Technology",
  MEDIA = "Media",
  TELECOMMUNICATIONS = "Telecommunications",
}

export enum CustomerDocs {
  idFront = "ID front",
  idBack = "ID back",
  passportFront = "Passport front",
  residencyClearance = "Residency clearance",
  residentialContract = "Residential contract",
  utilityBill = "Utility bill",
  bankStatement = "Bank statement",
  hrLetter = "HR letter",
  timeDeposit = "Time Deposit",
  assetContract = "Asset contract",
  otherAmountReceipt = "Other amount receipt",
  commercialRegister = "Commercial register",
  taxId = "Tax ID",
  associationMemorandum = "Association memorandum",
  carLicenseFront = "Car license front",
  carLicenseBack = "Car license back",
  drivingLicenseFront = "Driving license front",
  drivingLicenseBack = "Driving license back",
  clubId = "Club ID",
  medicalCard = "Medical card",
  workId = "Work ID",
  other = "Other",
}
