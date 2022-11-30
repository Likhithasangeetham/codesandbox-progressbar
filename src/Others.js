import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
// import FormInput from '../FormInput/FormInput';

import { Button, Card, CardBody, Row, Col, Form } from "reactstrap";
import renderSelectField from "./RenderSelectField";
import renderTextField from "./RenderTextField";

const Others = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="card-style">
        <CardBody className="p-30">
          <Row form className="form-row-card">
            <Col md="12" className="m-t-10 m-b-10">
              <h5 className="font-weight-bold">Background Questions</h5>
              <hr className="line-divider" />
            </Col>
            <Col md="4">
              <Field
                label="Have you ever been convicted of a criminal offence?"
                component={renderSelectField}
                name="hasCrimnalOffence"
              >
                {" "}
                <option value="">--SELECT</option>
                <option value="true"> Yes</option>
                <option value="false"> No</option>
              </Field>
            </Col>

            <Col md="8">
              <Field
                label="Give details"
                component={renderTextField}
                type="textarea"
                name="offenceDetails"
              />
            </Col>

            <Col md="4">
              <Field
                label="Have you ever been dismissed or otherwise removed from any of the Public Services In
              Ghana?"
                component={renderSelectField}
                name="hasBeenDismissed"
              >
                <option value="">--SELECT</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Field>
            </Col>

            <Col md="8">
              <Field
                label="Give details"
                component={renderTextField}
                type="textarea"
                name="dismissalDetails"
              />
            </Col>

            <Col md="4">
              <Field
                label="Are you bonded to serve either the Government or any other Organisation in any
              capacity?"
                name="hasGovernmentBond"
                component={renderSelectField}
              >
                <option value="">--SELECT</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Field>
            </Col>

            <Col md="8">
              <Field
                label="Give details"
                component={renderTextField}
                type="textarea"
                name="bondDetails"
              />
            </Col>
          </Row>
          <Row form className="form-row-card">
            <Col md="12" className="m-t-10 m-b-10">
              <h5>TO BE COMPLETED BY NON-GHANAIAN CANDIDATES ONLY</h5>
              <hr />
            </Col>

            <Col md="6">
              <Field
                label="Do you object to reference being made to your current/previous Employers?"
                component={renderSelectField}
                name="hasRefObjection"
              >
                <option value="">--SELECT</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Field>
            </Col>

            <Col md="6">
              <Field
                label="If engaged, how soon would you be able to take up the appointment?"
                component={renderSelectField}
                name="startMonth"
              >
                <option value="">-Select-</option>
                <option value="1 month">1 Month</option>
                <option value="2 months">2 Months</option>
                <option value="3 months">3 Months</option>
              </Field>
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

Others.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Others);
