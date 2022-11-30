import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";

import { Button, Card, CardBody, Row, Col, Form } from "reactstrap";

import renderTextField from "./RenderTextField";
import renderSelectField from "./RenderSelectField";

const Employment = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="card-style">
        <CardBody className="p-30">
          <Row form className="form-row-card">
            <Col md="4">
              <Field
                component={renderSelectField}
                name="isEmployed"
                label="Are you Currently Employed?"
              >
                <option value="">--SELECT</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Field>
            </Col>

            <Col md="4">
              <Field
                component={renderTextField}
                label="Present Employer"
                name="presentEmployer"
              />
            </Col>
            <Col md="4">
              <Field
                component={renderTextField}
                label="Salary"
                name="salary"
                type="number"
              />
            </Col>

            <Col md="4">
              <Field
                component={renderTextField}
                label="Address of Employer"
                name="addressOfEmployer"
              />
            </Col>

            <Col md="4">
              <Field
                component={renderTextField}
                label="Position Held"
                name="positionHeld"
              />
            </Col>
            <Col md="4">
              <Field
                component={renderTextField}
                label="Particular Work Done"
                name="particularWorkDone"
              />
            </Col>

            <Col md="6">
              <Field
                component={renderTextField}
                label="Reason for Leaving Employer"
                name="reasonLeavingEmployer"
                type="textarea"
              />
            </Col>
            <Col md="3">
              <Field
                component={renderTextField}
                label="From"
                name="employmentDurationFrom"
                type="date"
              />
            </Col>
            <Col md="3">
              <Field
                component={renderTextField}
                label="To"
                name="employmentDurationTo"
                type="date"
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

Employment.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Employment);
