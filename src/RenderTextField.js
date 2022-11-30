import React from "react";
import { Label, FormGroup, Input } from "reactstrap";

const renderTextField = ({ input, label, type, meta: { touched, error } }) => (
  <FormGroup className="m-b-25">
    <Label for={input.name}>{label}</Label>
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </FormGroup>
);

export default renderTextField;
