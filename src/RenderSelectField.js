import React from "react";
import { Label, FormGroup, Input } from "reactstrap";

const renderSelectField = ({
  input,
  required,
  label,
  children,
  meta: { touched, error }
}) => (
  <FormGroup className="m-b-25">
    <label>{label}</label>
    <div>
      <select {...input} className="form-control">
        {" "}
        {children}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </FormGroup>
);

export default renderSelectField;
