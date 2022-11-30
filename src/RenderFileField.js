import React, { Component } from "react";
import { Label, FormGroup, Input } from "reactstrap";

class renderFileField extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange }
    } = this.props;
    onChange(e.target.files[0]);
  }

  render() {
    const {
      input: { value }
    } = this.props;

    return <input type="file" onChange={this.onChange} required />;
  }
}
export default renderFileField;
