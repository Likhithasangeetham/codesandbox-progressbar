import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";

import { Button, Card, CardBody, CardHeader, Row, Col, Form } from "reactstrap";

import renderTextField from "./RenderTextField";
import renderSelectField from "./RenderSelectField";

const Academic = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="card-style">
        <CardBody className="p-30">
          <Row form>
            <Col md="4">
              <Field
                component={renderSelectField}
                label="Highest Level of Education"
                name="qualification"
              >
                <option value="">--SELECT</option>
                <option value="Associate of Applied Science (AAS)">
                  Associate of Applied Science (AAS)
                </option>
                <option value="Associate of Arts (A.A)">
                  Associate of Arts (A.A){" "}
                </option>
                <option value="Associate of Science (A.S.)">
                  Associate of Science (A.S.){" "}
                </option>
                <option value="Bachelor of Arts (B.A.)">
                  Bachelor of Arts (B.A.){" "}
                </option>
                <option value="Bachelor of Fine Arts (BFA)">
                  Bachelor of Fine Arts (BFA){" "}
                </option>
                <option value="Bachelor of Laws (LL.B)">
                  Bachelor of Laws (LL.B){" "}
                </option>
                <option value="Bachelor of Science (B.S.)">
                  Bachelor of Science (B.S.)
                </option>
                <option value="Diploma">Diploma </option>
                <option value="Doctor of Dental Surgery (DDS) ">
                  Doctor of Dental Surgery (DDS)
                </option>
                <option value="Doctor of Medicine (M.D.) ">
                  Doctor of Medicine (M.D.){" "}
                </option>
                <option value="Doctor of Philosophy (Ph.D.) ">
                  Doctor of Philosophy (Ph.D.){" "}
                </option>
                <option value="Juris Doctor (J.D.)">
                  Juris Doctor (J.D.){" "}
                </option>
                <option value="Master of Arts (M.A.)">
                  Master of Arts (M.A.){" "}
                </option>
                <option value="Master of Business Administration (MBA)">
                  Master of Business Administration (MBA)
                </option>
                <option value="Master of Fine Arts (MFA) ">
                  Master of Fine Arts (MFA){" "}
                </option>
                <option value="Master of Science (M.S.) ">
                  Master of Science (M.S.){" "}
                </option>
                <option value="Other Degree ">Other Degree </option>
                <option value="Secondary School Level/High school">
                  Secondary School Level/High school
                </option>
              </Field>
            </Col>

            <Col md="4">
              <Field
                component={renderSelectField}
                label="Major/Primary Area of Study"
                name="qualificationArea"
              >
                <option value="">--SELECT</option>
                <option value="Accounting">Accounting </option>
                <option value="Acting">Acting </option>
                <option value="Advertising">Advertising </option>
                <option value="African and African Diaspora Studies">
                  African and African Diaspora Studies
                </option>
                <option value="Agriculture">Agriculture </option>
                <option value="Anthropology">Anthropology </option>
                <option value="Applied learning and Development ">
                  Applied learning and Development{" "}
                </option>
                <option value="Architecture">Architecture </option>
                <option value="Art History ">Art History </option>
                <option value="Asian Studies">Asian Studies </option>
                <option value="Astronomy">Astronomy </option>
                <option value="Athletic Training">Athletic Training </option>
                <option value="Biochemistry">Biochemistry </option>
                <option value="Biology">Biology </option>
                <option value="Business Administration">
                  Business Administration{" "}
                </option>
                <option value="Chemistry">Chemistry </option>
                <option value="Communication Studies">
                  Communication Studies{" "}
                </option>
                <option value="Computer Science">Computer Science </option>
                <option value="Dance Studies">Dance Studies </option>
                <option value="Economics">Economics </option>
                <option value="Engineering - Minning">
                  Engineering - Minning{" "}
                </option>
                <option value="Engineering - Chemical">
                  Engineering - Chemical{" "}
                </option>
                <option value="Engineering- Aero Space">
                  Engineering- Aero Space{" "}
                </option>
                <option value="Engineering- Architectural">
                  Engineering- Architectural{" "}
                </option>
                <option value="Engineering- Biomedical">
                  Engineering- Biomedical{" "}
                </option>
                <option value="Engineering- Civil">Engineering- Civil </option>
                <option value="Engineering- Electrical and Computer">
                  Engineering- Electrical and Computer
                </option>
                <option value="Engineering- Mechanical">
                  Engineering- Mechanical{" "}
                </option>
                <option value="Engineering- Petroleu">
                  Engineering- Petroleum{" "}
                </option>
                <option value="Engineering-Geosystems and Hydrogeology">
                  Engineering-Geosystems and Hydrogeology
                </option>
                <option value="English">English </option>
                <option value="Environmental Science">
                  Environmental Science{" "}
                </option>
                <option value="Ethnic Studies">Ethnic Studies </option>
                <option value="European Studies">European Studies </option>
                <option value="Finance">Finance </option>
                <option value="French">French </option>
                <option value="Geography">Geography </option>
                <option value="Geological Sciences">
                  Geological Sciences{" "}
                </option>
                <option value="Geosystems Engineering and hydrogeology">
                  Geosystems Engineering and hydrogeology
                </option>
                <option value="Government">Government </option>
                <option value="Health and Society">Health and Society </option>
                <option value="History">History </option>
                <option value="Human Development and Family Sciences">
                  Human Development and Family Sciences{" "}
                </option>
                <option value="Human Ecology">Human Ecology </option>
                <option value="Humanities">Humanities </option>
                <option value="International Business">
                  International Business{" "}
                </option>
                <option value="Journalism">Journalism </option>
                <option value="Kinesiology and Health Educatio">
                  Kinesiology and Health Education{" "}
                </option>
                <option value="Law">Law </option>
                <option value="Management">Management </option>
                <option value="Management Information Systems">
                  Management Information Systems{" "}
                </option>
                <option value="Marine Science and Technology">
                  Marine Science and Technology{" "}
                </option>
                <option value="Marketing">Marketing </option>
                <option value="Marketing Research">Marketing Research </option>
                <option value="Mathematics">Mathematics </option>
                <option value="Medical Laboratory Science">
                  Medical Laboratory Science{" "}
                </option>
                <option value="Medicine">Medicine </option>
                <option value="Music">Music </option>
                <option value="Neuroscience">Neuroscience </option>
                <option value="Nursing">Nursing </option>
                <option value="Nutrition">Nutrition </option>
                <option value="Others">Others </option>
                <option value="Pharmacy">Pharmacy </option>
                <option value="Philosophy">Philosophy </option>
                <option value="Physics">Physics </option>
                <option value="Project Management">Project Management </option>
                <option value="Public Health">Public Health </option>
                <option value="Public Relations">Public Relations </option>
                <option value="Radio-Television-Film">
                  Radio-Television-Film{" "}
                </option>
                <option value="Religious Studies">Religious Studies </option>
                <option value="Science and Technology management">
                  Science and Technology management
                </option>
                <option value="Social Work">Social Work </option>
                <option value="Sociology">Sociology </option>
                <option value="Statistics">Statistics </option>
                <option value="Studio Art">Studio Art </option>
                <option value="Supply Chain management">
                  Supply Chain management{" "}
                </option>
                <option value="Theatre and Dance">Theatre and Dance </option>
                <option value="Theatre Studies">Theatre Studies </option>
                <option value="Urban and Regional Planning">
                  Urban and Regional Planning{" "}
                </option>
                <option value="Visual Art Studies">Visual Art Studies </option>
                <option value="Women and Gender Studies">
                  Women and Gender Studies{" "}
                </option>
              </Field>
            </Col>
            <Col md="4">
              <Field
                component={renderTextField}
                label="Institution"
                name="institution"
                type="text"
              />
            </Col>

            <Col md="4">
              <Field
                component={renderTextField}
                type="date"
                label="Graduation Date"
                name="graduationDate"
              />
            </Col>
          </Row>

          <Button
            color="primary"
            className="btn-pill pull-left"
            onClick={previousPage}
            style={{ marginLeft: "20px" }}
          >
            <i className="fa fa-chevron-left" />
            &nbsp; Previous
          </Button>
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
    </Form>
  );
};

Academic.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Academic);
