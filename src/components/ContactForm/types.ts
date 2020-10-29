export enum Fields {
  firstName = "firstName",
  lastName = "lastName",
  address1 = 'address1',
  address2 = 'address2',
  city = 'city',
  state = 'state',
  country = 'country',
  phone = 'phone',
  email = 'email',
}

export interface FormValues {
  firstName: string
  lastName: string
  address1: string
  address2?: string
  city: string
  state?:string
  country: string
  phone: string
  email: string
}
