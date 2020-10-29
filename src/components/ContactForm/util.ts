import { FormValues } from "./types"

export const defaultFormValues = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  country: "USA",
  phone: "",
  email: "",
  zipCode: "",
}

export const formValuesToAPIValues = (formValues: FormValues) => {
  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    country,
    phone,
    email,
    zipCode,
  } = formValues

  return {
    first_name: firstName,
    last_name: lastName,
    address_1: address1,
    address_2: address2,
    zip_code: zipCode,
    city,
    state,
    country,
    phone,
    email,
  }
}
