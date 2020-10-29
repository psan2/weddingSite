export enum Fields {
  firstName = "firstName",
  lastName = "lastName",
  address1 = "address1",
  address2 = "address2",
  city = "city",
  state = "state",
  country = "country",
  phone = "phone",
  email = "email",
  zipCode = "zipCode",
}

export interface FormValues {
  firstName: string
  lastName: string
  address1: string
  address2?: string
  city: string
  state?: string
  country: string
  phone: string
  email: string
  zipCode: string
}

export interface APIValues {
  first_name: string
  last_name: string
  address_1: string
  address_2?: string
  city: string
  state: string
  country: string
  phone: string
  email: string
  zip_code: string
}
