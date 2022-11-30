import React, { Component } from "react";
import Stepper from "react-stepper-horizontal";
import PropTypes from "prop-types";
import axios from "axios";
import FormData from "form-data";
import { ToastContainer, toast } from "react-toastify";
import { withRouter } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import Personal from "./Personal";
import Family from "./Family";
import Others from "./Others";
import Academic from "./Academic";
import References from "./References";
import Employment from "./Employment";
import Picture from "./Picture";

const API_URL = process.env.REACT_APP_API_URL;

class Steps extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      expRight: false,
      page: 0,
      steps: [
        { title: "Personal Details" },
        { title: "Family Details" },
        { title: "Academic" },
        { title: "References" },
        { title: "Employment" },
        { title: "Other" },
        { title: "Picture" }
      ]
    };
    document.body.style = "background: #e8e8e8;";
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  currentPage() {
    this.setState({ page: this.state.page });
  }
  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  submit = data => {
    let formData = new FormData();

    formData.append("title", data.title);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("middleName", data.middleName);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);
    formData.append("dateOfBirth", data.dateOfBirth);
    formData.append("postalAddress", data.postalAddress);
    formData.append("placeOfBirth", data.placeOfBirth);
    formData.append("gender", data.gender);
    formData.append("tin", data.tin);
    formData.append("residentialAddress", data.residentialAddress);
    formData.append("overseasAddress", data.overseasAddress);
    formData.append("digitalAddress", data.digitalAddress);
    formData.append("nationality", data.nationality);
    formData.append("region", data.region);
    formData.append("acquistion", data.acquistion);
    formData.append("idType", data.idType);
    formData.append("idNumber", data.idNumber);
    formData.append("placeIssued", data.placeIssued);
    formData.append("expiryDate", data.expiryDate);
    formData.append("dateIssued", data.dateIssued);
    formData.append("spouseNationality", data.spouseNationality);
    formData.append("fathersFirstName", data.fathersFirstName);
    formData.append("fathersLastName", data.fathersLastName);
    formData.append("fathersNationality", data.fathersNationality);
    formData.append("fathersHometown", data.fathersHometown);
    formData.append("fathersRegion", data.fathersRegion);
    formData.append("mothersFirstName", data.mothersFirstName);
    formData.append("mothersLastName", data.mothersLastName);
    formData.append("mothersRegion", data.mothersRegion);
    formData.append("mothersHomeTown", data.mothersHomeTown);
    formData.append("maritalStatus", data.maritalStatus);
    formData.append("spouseFirstName", data.spouseFirstName);
    formData.append("spouseLastName", data.spouseLastName);
    formData.append("graduationDate", data.graduationDate);
    formData.append("qualification", data.qualification);
    formData.append("qualificationArea", data.qualificationArea);
    formData.append("institution", data.institution);
    formData.append("referenceFirstName", data.referenceFirstName);
    formData.append("referenceLastName", data.referenceLastName);
    formData.append("referencePhoneNumber", data.referencePhoneNumber);
    formData.append("referenceEmail", data.referenceEmail);
    formData.append("referencePostalAddress", data.referencePostalAddress);
    formData.append("referenceOccupation", data.referenceOccupation);
    formData.append("refStartDate", data.refStartDate);
    formData.append("refEndDate", data.refEndDate);
    formData.append("isEmployed", data.isEmployed);
    formData.append("presentEmployer", data.presentEmployer);
    formData.append("salary", data.salary);
    formData.append("addressOfEmployer", data.addressOfEmployer);
    formData.append("positionHeld", data.positionHeld);
    formData.append("particularWorkDone", data.particularWorkDone);
    formData.append("reasonLeavingEmployer", data.reasonLeavingEmployer);
    formData.append("employmentDurationFrom", data.employmentDurationFrom);
    formData.append("employmentDurationTo", data.employmentDurationTo);
    formData.append("hasCrimnalOffence", data.hasCrimnalOffence);
    formData.append("offenceDetails", data.offenceDetails);
    formData.append("hasBeenDismissed", data.hasBeenDismissed);
    formData.append("dismissalDetails", data.dismissalDetails);
    formData.append("hasGovernmentBond", data.hasGovernmentBond);
    formData.append("bondDetails", data.bondDetails);
    formData.append("hasRefObjection", data.hasRefObjection);
    formData.append("startMonth", data.startMonth);
    formData.append("picture", data.picture);

    axios
      .post(`${API_URL}/online-registration`, formData, {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      })
      .then(response => {
        this.setState({
          expRight: !this.state.expRight
        });
        if (response.data.success) {
          this.success(response.data.success);

          setTimeout(() => {
            // this.props.resetForm();
            this.props.history.push("/success");
          }, 2500);
        }
        if (response.data.error) {
          this.error(response.data.error);
        }
      })
      .catch(err => {
        this.setState({
          expRight: !this.state.expRight
        });
        this.error("Something went wrong. Please contact admin");
      });

    this.setState({
      expRight: !this.state.expRight
    });
  };

  success(message) {
    return toast.success(message);
  }

  error(error) {
    // add type: 'warning' to options
    return toast.error(error);
  }
  render() {
    // const { onSubmit } = this.props;
    const { page, steps } = this.state;

    const containerStyle = {
      zIndex: 1999
    };

    return (
      <div>
        <ToastContainer
          position="top-right"
          hideProgressBar={true}
          autoClose={5000}
          style={containerStyle}
        />

        <ul className="tempHeadBdr formRelative">
          <li className="tempHeadContBdr">
            <span
              id="logo-formheader"
              className="formLogo"
              style={{ display: "none" }}
            >
              <img id="logo-formheader-img" src="" />
            </span>
            <h2 className="frmTitle">
              <em>OFFICE OF THE HEAD OF CIVIL SERVICE</em>
            </h2>
            <p className="frmDesc">
              APPLICATION FOR APPOINTMENT TO A POST IN THE GHANA CIVIL SERVICE
            </p>
            <div className="clearBoth" />
          </li>
        </ul>
        <div className="stepperWrapper">
          <Stepper
            steps={steps}
            activeStep={page}
            defaultColor="#afafaf"
            barStyle="solid"
          />
        </div>
        <div className="m-t-20" />
        {page === 0 && (
          <Personal onSubmit={this.nextPage} onclick={this.currentPage} />
        )}
        {page === 1 && (
          <Family previousPage={this.previousPage} onSubmit={this.nextPage} />
        )}
        {page === 2 && (
          <Academic previousPage={this.previousPage} onSubmit={this.nextPage} />
        )}
        {page === 3 && (
          <References
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            onClick
          />
        )}
        {page === 4 && (
          <Employment
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 5 && (
          <Others previousPage={this.previousPage} onSubmit={this.nextPage} />
        )}
        {page === 6 && (
          <Picture
            previousPage={this.previousPage}
            onSubmit={this.submit}
            expRight={this.state.expRight}
          />
        )}
      </div>
    );
  }
}

Steps.propTypes = {
  onSubmit: PropTypes.func
};

export default withRouter(Steps);
