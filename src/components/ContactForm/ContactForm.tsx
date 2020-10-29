import React, { useState } from "react"
import { Box, Button, Grid, Icon, TextField } from "@material-ui/core"
import { CountrySelector } from "./CountrySelector"
import { Fields, FormValues } from "./types"
import { defaultFormValues } from "./util"

export const ContactForm = () => {
  const [formValues, setFormValues] = useState<FormValues>(defaultFormValues)

  const handleFormChange = (fieldName: Fields, value: string) => {
    setFormValues({ ...formValues, [fieldName]: value })
  }

  const handleSubmit = () => {}

  return (
    <form>
      <Grid container direction="row">
        <TextField
          required={true}
          className="share-width"
          id="first-name"
          label="First Name"
          value={formValues.firstName}
          onChange={e => {
            handleFormChange(Fields.firstName, e.target.value)
          }}
        />
        <TextField
          required={true}
          className="share-width"
          id="last-name"
          label="Last Name"
          value={formValues.lastName}
          onChange={e => {
            handleFormChange(Fields.lastName, e.target.value)
          }}
        />
      </Grid>
      <TextField
        required={true}
        id="address-1"
        label="Address Line 1"
        fullWidth={true}
        value={formValues.address1}
        onChange={e => {
          handleFormChange(Fields.address1, e.target.value)
        }}
      />
      <TextField
        id="address-2"
        label="Address Line 2"
        fullWidth={true}
        value={formValues.address2}
        onChange={e => {
          handleFormChange(Fields.address2, e.target.value)
        }}
      />
      <Grid container direction="row">
        <TextField
          required={true}
          className="share-width"
          id="city"
          label="City"
          value={formValues.city}
          onChange={e => {
            handleFormChange(Fields.city, e.target.value)
          }}
        />
        <TextField
          className="share-width"
          id="state"
          label="State"
          required={formValues.country === "USA"}
          disabled={formValues.country !== "USA"}
          value={formValues.state}
          onChange={e => {
            handleFormChange(Fields.state, e.target.value)
          }}
        />
        <CountrySelector value={"USA"} handleFormChange={handleFormChange} />
      </Grid>
      <TextField
        required={true}
        id="phone"
        label="Phone Number"
        fullWidth={true}
        value={formValues.phone}
        onChange={e => {
          handleFormChange(Fields.phone, e.target.value)
        }}
      />
      <TextField
        required={true}
        id="email"
        label="Email"
        fullWidth={true}
        value={formValues.email}
        onChange={e => {
          handleFormChange(Fields.email, e.target.value)
        }}
      />
      <Box mt="10px">
        <i>
          Your information will only ever be used by Pat and Michelle to send
          you wedding-related stuff.
        </i>
      </Box>
      <Box mt="10px" className="button">
        <Button
          endIcon={<Icon>send</Icon>}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}
