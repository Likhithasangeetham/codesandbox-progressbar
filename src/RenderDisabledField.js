import React from "react";
import { Label, FormGroup, Input } from "reactstrap";

const renderDisabledField = ({
  label,
  rows,
  placeholder,
  type,
  name,
  value,
  meta: { touched, error }
}) => (
  <FormGroup className="m-b-25">
    <Label for={name}>{label}</Label>
    <div>
      <Input
        rows={rows}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        disabled
      />
      {touched && error && <span>{error}</span>}
    </div>
  </FormGroup>
);

export default renderDisabledField;
