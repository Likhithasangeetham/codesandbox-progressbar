import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import LaddaButton, { EXPAND_RIGHT } from "react-ladda";
import { Button, Card, CardBody, Col, Form, Row } from "reactstrap";

import "react-toastify/dist/ReactToastify.css";
import "ladda/dist/ladda-themeless.min.css";

import validate from "./validate";
// import FormInput from '../FormInput/FormInput';

// import { mobile, captialize, age } from '../validation/normalize';

import renderDisabledField from "./RenderDisabledField";
import renderFileField from "./RenderFileField";

class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Card className="card-style">
          <CardBody className="p-30">
            <Row form>
              <Col md="4">
                <Field
                  component={renderFileField}
                  type="file"
                  // label="Upload Passport-Sized Image"
                  name="picture"
                />
              </Col>
              <Col md="12">
                <Field
                  component={renderDisabledField}
                  type="textarea"
                  rows="5"
                  name="terms"
                  label="Terms & Conditions"
                  placeholder="Please note that, filling the application forms does not mean an automatic entry into the Ghana Civil Service."
                />
              </Col>
              <div className="form-group">
                <label className="check-inline mr-1">
                  <input type="checkbox" required /> I accept the Terms and
                  Conditions.
                </label>
              </div>
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

            <LaddaButton
              className="btn-pill pull-right btn btn-primary btn-ladda"
              type="submit"
              style={{ marginRight: "20px" }}
              // disabled={pristine || submitting}
              loading={this.props.expRight}
              data-style={EXPAND_RIGHT}
            >
              Submit &nbsp;
              <i className="fa fa-check" />
            </LaddaButton>
          </CardBody>
        </Card>
      </Form>
    );
  }
}

Picture.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Picture);
