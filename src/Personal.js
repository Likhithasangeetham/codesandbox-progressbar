import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Form, Row, Button, Card, CardBody, Col, FormGroup } from "reactstrap";

import validate from "./validate";

// import { mobile, captialize, age } from '../validation/normalize';
// import { INSERT } from 'fast-diff';

// const renderFromHelper = ({ touched, error }) => {
//   if (!(touched && error)) {
//     return;
//   } else {
//     return <FormHelperText>{touched && error}</FormHelperText>;
//   }
// };

import renderTextField from "./RenderTextField";
import renderSelectField from "./RenderSelectField";

let Personal = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Card className="card-style">
        <CardBody className="p-30">
          <Row form className="form-row-card">
            <Col md="12" className="m-t-10 m-b-10">
              <h5 className="font-weight-bold">Personal Detials</h5>
              <hr className="line-divider" />
            </Col>
            <Col md="4">
              <Row>
                <Col md="4">
                  <Field
                    name="title"
                    component={renderSelectField}
                    label="Title"
                    required
                  >
                    <option value="" />
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Miss.">Miss.</option>
                    <option value="Dr.">Dr.</option>
                  </Field>
                </Col>

                <Col md="8">
                  <Field
                    type="text"
                    label="Surname"
                    name="lastName"
                    component={renderTextField}
                  />
                </Col>
              </Row>
            </Col>
            <Col md="4">
              <Field
                type="text"
                label="First Name"
                name="firstName"
                component={renderTextField}
              />
            </Col>
            <Col md="4">
              <Field
                label="Middle Name"
                name="middleName"
                component={renderTextField}
              />
            </Col>
            <Col md="4">
              <Field
                label="Previous Name"
                component={renderTextField}
                name="previousName"
              />
            </Col>
            <Col md="4">
              <Field
                type="date"
                component={renderTextField}
                label="Date of Birth"
                name="dateOfBirth"
              />
            </Col>
            <Col md="4">
              <Field
                label="Place of Birth"
                component={renderTextField}
                name="placeOfBirth"
              />
            </Col>
            <Col md="4">
              <Field name="gender" component={renderSelectField} label="Gender">
                <option value="" />
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
            </Col>
            <Col md="4">
              <Field
                component={renderTextField}
                label="Phone Number"
                name="phoneNumber"
              />
            </Col>
            <Col md="4">
              <Field
                type="email"
                name="email"
                label="Email"
                component={renderTextField}
              />
            </Col>
          </Row>
          <Row form className="form-row-card">
            <Col md="12" className="m-t-10 m-b-10">
              <h5 className="font-weight-bold">Identification Detials</h5>
              <hr className="line-divider" />
            </Col>
            <Col md="4">
              <Field
                label="National ID Type"
                name="idType"
                component={renderSelectField}
              >
                <option value="-Select-">-Select-</option>
                <option value="Passport">Passport</option>
                <option value="Voter&#x27;s&#x20;ID">Voter&#x27;s ID</option>
                <option value="Ghana&#x20;Card">Ghana Card</option>
                <option value="Driver&#x27;s&#x20;License">
                  Driver&#x27;s License
                </option>
                <option value="NHIS&#x20;Card">NHIS Card</option>
              </Field>
            </Col>

            <Col md="4">
              <Field
                type="text"
                label="ID Number"
                name="idNumber"
                component={renderTextField}
              />
            </Col>

            <Col md="4">
              <Field
                type="text"
                label="Place Issued"
                name="placeIssued"
                component={renderTextField}
              />
            </Col>

            <Col md="4">
              <Field
                type="date"
                label="Date Issued"
                name="dateIssued"
                component={renderTextField}
              />
            </Col>
            <Col md="4">
              <Field
                type="date"
                label="Expiry Date"
                name="expiryDate"
                component={renderTextField}
              />
            </Col>
            <Col md="4">
              <Field
                type="text"
                name="tin"
                label="Tax Identification Number"
                component={renderTextField}
              />
            </Col>
          </Row>
          <Row form className="form-row-card">
            <Col md="12" className="m-t-10 m-b-10">
              <h5 className="font-weight-bold">Location Details</h5>
              <hr className="line-divider" />
            </Col>
            <Col md="6">
              <Field
                component={renderTextField}
                label="Postal Address"
                name="postalAddress"
              />
            </Col>
            <Col md="6">
              <Field
                label="Overseas Address"
                component={renderTextField}
                name="overseasAddress"
              />
            </Col>
            <Col md="6">
              <Field
                component={renderTextField}
                label="Residential Address"
                name="residentialAddress"
              />
            </Col>
            <Col md="4">
              <Field
                type="text"
                name="digitalAddress"
                label="GPS Digital Address"
                component={renderTextField}
              />
            </Col>

            <Col md="4">
              <Field
                component={renderSelectField}
                label="Nationality"
                name="nationality"
              >
                <option value="" />
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burma">Burma</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Canary Islands">Canary Islands</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curacao">Curacao</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor (Timor-Leste)">
                  East Timor (Timor-Leste)
                </option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French West Indies">French West Indies</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Ivory Coast">Ivory Coast</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="South Korea">South Korea</option>
                <option value="Kosovo">Kosovo</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao PDR">Lao PDR</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan AR">Libyan AR</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldive Islands">Maldive Islands</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Guinea">New Guinea</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Not Known">Not Known</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn Islands">Pitcairn Islands</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States of America">
                  United States of America
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City">Vatican City</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </Field>
            </Col>
            <Col md="4">
              <Field
                type="text"
                name="region"
                label="Region"
                component={renderSelectField}
              >
                <option value="">--SELECT</option>
                <option value="Greater Accra">Greater Accra</option>
                <option value="Ashanti">Ashanti</option>
                <option value="Central">Central</option>
                <option value="Eastern">Eastern</option>
                <option value="Western">Western</option>
                <option value="Brong Ahafo">Brong Ahafo</option>
                <option value="Upper East">Upper East</option>
                <option value="Upper West">Upper West</option>
                <option value="Northern">Northern</option>
                <option value="Volta">Volta</option>
              </Field>
            </Col>
            <Col md="4">
              <Field
                component={renderSelectField}
                name="acquisition"
                label="Acquisition"
              >
                <option value="">--SELECT</option>
                <option value="Birth">Birth</option>
                <option value="Naturalization">Naturalization</option>
              </Field>
            </Col>
          </Row>
          <Button
            color="primary"
            className="btn-pill pull-right"
            type="submit"
            style={{ marginRight: "20px" }}
          >
            Next &nbsp;
            <i className="fa fa-chevron-right" />
          </Button>
        </CardBody>
      </Card>
    </form>
  );
};

// export default Personal; => {
//   const { handleSubmit } = props;

// };

Personal.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Personal);
