export interface CustomerDataUiModel {
  personalData: {
    idNameArabic: string
    idNumber: string
    mobileNumber: string
    address: string
    residenceType: string
    occupationOrgName: string
    referenceRelation: string
    referenceFullName: string
    referenceMobileNumber: string
    isResidentialAddressSameAsIdCard?: boolean
    residentialAddressAddress?: string
    maritalStatus?: string
  }
  financialData: {
    monthlyNetSalary: number
    jobType: string
    anotherIncome: { incomeType: string; uploadRef: { url: string; key: string }[] }[]
    officeClinicAddress?: string
    currentOrgAddress?: string
    orgAddress?: string
    isCurrentOrgSameAsIdOrg?: boolean
    currentOrg?: string
    orgName?: string
    isCurrentOfficeClinicSameAsId?: boolean
    currentOfficeClinic?: string
  }
  attachments: {
    [key: string]: { url: string; documentType: string; key: string }[]
  }
}
