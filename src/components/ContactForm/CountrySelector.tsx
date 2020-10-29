import { MenuItem, TextField } from "@material-ui/core"
import React from "react"
import { Fields } from "./types"

export const CountrySelector = props => {
  const { defaultValue, value, handleFormChange } = props

  return (
    <TextField
      select
      defaultValue={defaultValue}
      value={value}
      id="country"
      label="Country"
      required={true}
      fullWidth={true}
      onChange={e => {
        handleFormChange(Fields.country, e.target.value)
      }}
    >
      <MenuItem value="AFG">Afghanistan</MenuItem>
      <MenuItem value="ALA">Åland Islands</MenuItem>
      <MenuItem value="ALB">Albania</MenuItem>
      <MenuItem value="DZA">Algeria</MenuItem>
      <MenuItem value="ASM">American Samoa</MenuItem>
      <MenuItem value="AND">Andorra</MenuItem>
      <MenuItem value="AGO">Angola</MenuItem>
      <MenuItem value="AIA">Anguilla</MenuItem>
      <MenuItem value="ATA">Antarctica</MenuItem>
      <MenuItem value="ATG">Antigua and Barbuda</MenuItem>
      <MenuItem value="ARG">Argentina</MenuItem>
      <MenuItem value="ARM">Armenia</MenuItem>
      <MenuItem value="ABW">Aruba</MenuItem>
      <MenuItem value="AUS">Australia</MenuItem>
      <MenuItem value="AUT">Austria</MenuItem>
      <MenuItem value="AZE">Azerbaijan</MenuItem>
      <MenuItem value="BHS">Bahamas</MenuItem>
      <MenuItem value="BHR">Bahrain</MenuItem>
      <MenuItem value="BGD">Bangladesh</MenuItem>
      <MenuItem value="BRB">Barbados</MenuItem>
      <MenuItem value="BLR">Belarus</MenuItem>
      <MenuItem value="BEL">Belgium</MenuItem>
      <MenuItem value="BLZ">Belize</MenuItem>
      <MenuItem value="BEN">Benin</MenuItem>
      <MenuItem value="BMU">Bermuda</MenuItem>
      <MenuItem value="BTN">Bhutan</MenuItem>
      <MenuItem value="BOL">Bolivia, Plurinational State of</MenuItem>
      <MenuItem value="BES">Bonaire, Sint Eustatius and Saba</MenuItem>
      <MenuItem value="BIH">Bosnia and Herzegovina</MenuItem>
      <MenuItem value="BWA">Botswana</MenuItem>
      <MenuItem value="BVT">Bouvet Island</MenuItem>
      <MenuItem value="BRA">Brazil</MenuItem>
      <MenuItem value="IOT">British Indian Ocean Territory</MenuItem>
      <MenuItem value="BRN">Brunei Darussalam</MenuItem>
      <MenuItem value="BGR">Bulgaria</MenuItem>
      <MenuItem value="BFA">Burkina Faso</MenuItem>
      <MenuItem value="BDI">Burundi</MenuItem>
      <MenuItem value="KHM">Cambodia</MenuItem>
      <MenuItem value="CMR">Cameroon</MenuItem>
      <MenuItem value="CAN">Canada</MenuItem>
      <MenuItem value="CPV">Cape Verde</MenuItem>
      <MenuItem value="CYM">Cayman Islands</MenuItem>
      <MenuItem value="CAF">Central African Republic</MenuItem>
      <MenuItem value="TCD">Chad</MenuItem>
      <MenuItem value="CHL">Chile</MenuItem>
      <MenuItem value="CHN">China</MenuItem>
      <MenuItem value="CXR">Christmas Island</MenuItem>
      <MenuItem value="CCK">Cocos (Keeling) Islands</MenuItem>
      <MenuItem value="COL">Colombia</MenuItem>
      <MenuItem value="COM">Comoros</MenuItem>
      <MenuItem value="COG">Congo</MenuItem>
      <MenuItem value="COD">Congo, the Democratic Republic of the</MenuItem>
      <MenuItem value="COK">Cook Islands</MenuItem>
      <MenuItem value="CRI">Costa Rica</MenuItem>
      <MenuItem value="CIV">Côte d'Ivoire</MenuItem>
      <MenuItem value="HRV">Croatia</MenuItem>
      <MenuItem value="CUB">Cuba</MenuItem>
      <MenuItem value="CUW">Curaçao</MenuItem>
      <MenuItem value="CYP">Cyprus</MenuItem>
      <MenuItem value="CZE">Czech Republic</MenuItem>
      <MenuItem value="DNK">Denmark</MenuItem>
      <MenuItem value="DJI">Djibouti</MenuItem>
      <MenuItem value="DMA">Dominica</MenuItem>
      <MenuItem value="DOM">Dominican Republic</MenuItem>
      <MenuItem value="ECU">Ecuador</MenuItem>
      <MenuItem value="EGY">Egypt</MenuItem>
      <MenuItem value="SLV">El Salvador</MenuItem>
      <MenuItem value="GNQ">Equatorial Guinea</MenuItem>
      <MenuItem value="ERI">Eritrea</MenuItem>
      <MenuItem value="EST">Estonia</MenuItem>
      <MenuItem value="ETH">Ethiopia</MenuItem>
      <MenuItem value="FLK">Falkland Islands (Malvinas)</MenuItem>
      <MenuItem value="FRO">Faroe Islands</MenuItem>
      <MenuItem value="FJI">Fiji</MenuItem>
      <MenuItem value="FIN">Finland</MenuItem>
      <MenuItem value="FRA">France</MenuItem>
      <MenuItem value="GUF">French Guiana</MenuItem>
      <MenuItem value="PYF">French Polynesia</MenuItem>
      <MenuItem value="ATF">French Southern Territories</MenuItem>
      <MenuItem value="GAB">Gabon</MenuItem>
      <MenuItem value="GMB">Gambia</MenuItem>
      <MenuItem value="GEO">Georgia</MenuItem>
      <MenuItem value="DEU">Germany</MenuItem>
      <MenuItem value="GHA">Ghana</MenuItem>
      <MenuItem value="GIB">Gibraltar</MenuItem>
      <MenuItem value="GRC">Greece</MenuItem>
      <MenuItem value="GRL">Greenland</MenuItem>
      <MenuItem value="GRD">Grenada</MenuItem>
      <MenuItem value="GLP">Guadeloupe</MenuItem>
      <MenuItem value="GUM">Guam</MenuItem>
      <MenuItem value="GTM">Guatemala</MenuItem>
      <MenuItem value="GGY">Guernsey</MenuItem>
      <MenuItem value="GIN">Guinea</MenuItem>
      <MenuItem value="GNB">Guinea-Bissau</MenuItem>
      <MenuItem value="GUY">Guyana</MenuItem>
      <MenuItem value="HTI">Haiti</MenuItem>
      <MenuItem value="HMD">Heard Island and McDonald Islands</MenuItem>
      <MenuItem value="VAT">Holy See (Vatican City State)</MenuItem>
      <MenuItem value="HND">Honduras</MenuItem>
      <MenuItem value="HKG">Hong Kong</MenuItem>
      <MenuItem value="HUN">Hungary</MenuItem>
      <MenuItem value="ISL">Iceland</MenuItem>
      <MenuItem value="IND">India</MenuItem>
      <MenuItem value="IDN">Indonesia</MenuItem>
      <MenuItem value="IRN">Iran, Islamic Republic of</MenuItem>
      <MenuItem value="IRQ">Iraq</MenuItem>
      <MenuItem value="IRL">Ireland</MenuItem>
      <MenuItem value="IMN">Isle of Man</MenuItem>
      <MenuItem value="ISR">Israel</MenuItem>
      <MenuItem value="ITA">Italy</MenuItem>
      <MenuItem value="JAM">Jamaica</MenuItem>
      <MenuItem value="JPN">Japan</MenuItem>
      <MenuItem value="JEY">Jersey</MenuItem>
      <MenuItem value="JOR">Jordan</MenuItem>
      <MenuItem value="KAZ">Kazakhstan</MenuItem>
      <MenuItem value="KEN">Kenya</MenuItem>
      <MenuItem value="KIR">Kiribati</MenuItem>
      <MenuItem value="PRK">Korea, Democratic People's Republic of</MenuItem>
      <MenuItem value="KOR">Korea, Republic of</MenuItem>
      <MenuItem value="KWT">Kuwait</MenuItem>
      <MenuItem value="KGZ">Kyrgyzstan</MenuItem>
      <MenuItem value="LAO">Lao People's Democratic Republic</MenuItem>
      <MenuItem value="LVA">Latvia</MenuItem>
      <MenuItem value="LBN">Lebanon</MenuItem>
      <MenuItem value="LSO">Lesotho</MenuItem>
      <MenuItem value="LBR">Liberia</MenuItem>
      <MenuItem value="LBY">Libya</MenuItem>
      <MenuItem value="LIE">Liechtenstein</MenuItem>
      <MenuItem value="LTU">Lithuania</MenuItem>
      <MenuItem value="LUX">Luxembourg</MenuItem>
      <MenuItem value="MAC">Macao</MenuItem>
      <MenuItem value="MKD">
        Macedonia, the former Yugoslav Republic of
      </MenuItem>
      <MenuItem value="MDG">Madagascar</MenuItem>
      <MenuItem value="MWI">Malawi</MenuItem>
      <MenuItem value="MYS">Malaysia</MenuItem>
      <MenuItem value="MDV">Maldives</MenuItem>
      <MenuItem value="MLI">Mali</MenuItem>
      <MenuItem value="MLT">Malta</MenuItem>
      <MenuItem value="MHL">Marshall Islands</MenuItem>
      <MenuItem value="MTQ">Martinique</MenuItem>
      <MenuItem value="MRT">Mauritania</MenuItem>
      <MenuItem value="MUS">Mauritius</MenuItem>
      <MenuItem value="MYT">Mayotte</MenuItem>
      <MenuItem value="MEX">Mexico</MenuItem>
      <MenuItem value="FSM">Micronesia, Federated States of</MenuItem>
      <MenuItem value="MDA">Moldova, Republic of</MenuItem>
      <MenuItem value="MCO">Monaco</MenuItem>
      <MenuItem value="MNG">Mongolia</MenuItem>
      <MenuItem value="MNE">Montenegro</MenuItem>
      <MenuItem value="MSR">Montserrat</MenuItem>
      <MenuItem value="MAR">Morocco</MenuItem>
      <MenuItem value="MOZ">Mozambique</MenuItem>
      <MenuItem value="MMR">Myanmar</MenuItem>
      <MenuItem value="NAM">Namibia</MenuItem>
      <MenuItem value="NRU">Nauru</MenuItem>
      <MenuItem value="NPL">Nepal</MenuItem>
      <MenuItem value="NLD">Netherlands</MenuItem>
      <MenuItem value="NCL">New Caledonia</MenuItem>
      <MenuItem value="NZL">New Zealand</MenuItem>
      <MenuItem value="NIC">Nicaragua</MenuItem>
      <MenuItem value="NER">Niger</MenuItem>
      <MenuItem value="NGA">Nigeria</MenuItem>
      <MenuItem value="NIU">Niue</MenuItem>
      <MenuItem value="NFK">Norfolk Island</MenuItem>
      <MenuItem value="MNP">Northern Mariana Islands</MenuItem>
      <MenuItem value="NOR">Norway</MenuItem>
      <MenuItem value="OMN">Oman</MenuItem>
      <MenuItem value="PAK">Pakistan</MenuItem>
      <MenuItem value="PLW">Palau</MenuItem>
      <MenuItem value="PSE">Palestinian Territory, Occupied</MenuItem>
      <MenuItem value="PAN">Panama</MenuItem>
      <MenuItem value="PNG">Papua New Guinea</MenuItem>
      <MenuItem value="PRY">Paraguay</MenuItem>
      <MenuItem value="PER">Peru</MenuItem>
      <MenuItem value="PHL">Philippines</MenuItem>
      <MenuItem value="PCN">Pitcairn</MenuItem>
      <MenuItem value="POL">Poland</MenuItem>
      <MenuItem value="PRT">Portugal</MenuItem>
      <MenuItem value="PRI">Puerto Rico</MenuItem>
      <MenuItem value="QAT">Qatar</MenuItem>
      <MenuItem value="REU">Réunion</MenuItem>
      <MenuItem value="ROU">Romania</MenuItem>
      <MenuItem value="RUS">Russian Federation</MenuItem>
      <MenuItem value="RWA">Rwanda</MenuItem>
      <MenuItem value="BLM">Saint Barthélemy</MenuItem>
      <MenuItem value="SHN">
        Saint Helena, Ascension and Tristan da Cunha
      </MenuItem>
      <MenuItem value="KNA">Saint Kitts and Nevis</MenuItem>
      <MenuItem value="LCA">Saint Lucia</MenuItem>
      <MenuItem value="MAF">Saint Martin (French part)</MenuItem>
      <MenuItem value="SPM">Saint Pierre and Miquelon</MenuItem>
      <MenuItem value="VCT">Saint Vincent and the Grenadines</MenuItem>
      <MenuItem value="WSM">Samoa</MenuItem>
      <MenuItem value="SMR">San Marino</MenuItem>
      <MenuItem value="STP">Sao Tome and Principe</MenuItem>
      <MenuItem value="SAU">Saudi Arabia</MenuItem>
      <MenuItem value="SEN">Senegal</MenuItem>
      <MenuItem value="SRB">Serbia</MenuItem>
      <MenuItem value="SYC">Seychelles</MenuItem>
      <MenuItem value="SLE">Sierra Leone</MenuItem>
      <MenuItem value="SGP">Singapore</MenuItem>
      <MenuItem value="SXM">Sint Maarten (Dutch part)</MenuItem>
      <MenuItem value="SVK">Slovakia</MenuItem>
      <MenuItem value="SVN">Slovenia</MenuItem>
      <MenuItem value="SLB">Solomon Islands</MenuItem>
      <MenuItem value="SOM">Somalia</MenuItem>
      <MenuItem value="ZAF">South Africa</MenuItem>
      <MenuItem value="SGS">
        South Georgia and the South Sandwich Islands
      </MenuItem>
      <MenuItem value="SSD">South Sudan</MenuItem>
      <MenuItem value="ESP">Spain</MenuItem>
      <MenuItem value="LKA">Sri Lanka</MenuItem>
      <MenuItem value="SDN">Sudan</MenuItem>
      <MenuItem value="SUR">Suriname</MenuItem>
      <MenuItem value="SJM">Svalbard and Jan Mayen</MenuItem>
      <MenuItem value="SWZ">Swaziland</MenuItem>
      <MenuItem value="SWE">Sweden</MenuItem>
      <MenuItem value="CHE">Switzerland</MenuItem>
      <MenuItem value="SYR">Syrian Arab Republic</MenuItem>
      <MenuItem value="TWN">Taiwan, Province of China</MenuItem>
      <MenuItem value="TJK">Tajikistan</MenuItem>
      <MenuItem value="TZA">Tanzania, United Republic of</MenuItem>
      <MenuItem value="THA">Thailand</MenuItem>
      <MenuItem value="TLS">Timor-Leste</MenuItem>
      <MenuItem value="TGO">Togo</MenuItem>
      <MenuItem value="TKL">Tokelau</MenuItem>
      <MenuItem value="TON">Tonga</MenuItem>
      <MenuItem value="TTO">Trinidad and Tobago</MenuItem>
      <MenuItem value="TUN">Tunisia</MenuItem>
      <MenuItem value="TUR">Turkey</MenuItem>
      <MenuItem value="TKM">Turkmenistan</MenuItem>
      <MenuItem value="TCA">Turks and Caicos Islands</MenuItem>
      <MenuItem value="TUV">Tuvalu</MenuItem>
      <MenuItem value="UGA">Uganda</MenuItem>
      <MenuItem value="UKR">Ukraine</MenuItem>
      <MenuItem value="ARE">United Arab Emirates</MenuItem>
      <MenuItem value="GBR">United Kingdom</MenuItem>
      <MenuItem value="USA">United States</MenuItem>
      <MenuItem value="UMI">United States Minor Outlying Islands</MenuItem>
      <MenuItem value="URY">Uruguay</MenuItem>
      <MenuItem value="UZB">Uzbekistan</MenuItem>
      <MenuItem value="VUT">Vanuatu</MenuItem>
      <MenuItem value="VEN">Venezuela, Bolivarian Republic of</MenuItem>
      <MenuItem value="VNM">Viet Nam</MenuItem>
      <MenuItem value="VGB">Virgin Islands, British</MenuItem>
      <MenuItem value="VIR">Virgin Islands, U.S.</MenuItem>
      <MenuItem value="WLF">Wallis and Futuna</MenuItem>
      <MenuItem value="ESH">Western Sahara</MenuItem>
      <MenuItem value="YEM">Yemen</MenuItem>
      <MenuItem value="ZMB">Zambia</MenuItem>
      <MenuItem value="ZWE">Zimbabwe</MenuItem>
    </TextField>
  )
}
