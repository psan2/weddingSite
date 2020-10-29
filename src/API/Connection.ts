import { APIValues } from "../components/ContactForm/types"

// const API_BASE_URL = "https://wedding-site-backend.herokuapp.com"
const API_BASE_URL = "http://localhost:3000"
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
}

export const createContact = (contactData: APIValues) => {
  return fetch(`${API_BASE_URL}/contacts/`, {
    method: "POST",
    headers: { ...HEADERS },
    body: JSON.stringify(contactData),
  }).then(res => res.json())
}
