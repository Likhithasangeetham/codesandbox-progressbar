const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number Required";
  } else if (
    values.phoneNumber &&
    !/^([0-9]\d{9})$/i.test(values.phoneNumber)
  ) {
    errors.phoneNumber = "Invalid mobile number, must be 10 digits";
  }
  if (!values.email) {
    errors.email = "Email Required";
  } else if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.idNumber) {
    errors.idNumber = "ID Number Required";
  }

  if (!values.postalAddress) {
    errors.postalAddress = "Postal Address Required";
  }

  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Required";
  }

  if (!values.idType) {
    errors.idType = "Required";
  }

  if (!values.placeOfBirth) {
    errors.placeOfBirth = "Required";
  }

  if (!values.placeIssued) {
    errors.placeIssued = "Required";
  }

  if (!values.tin) {
    errors.tin = "Required";
  }

  if (!values.region) {
    errors.region = "Required";
  }

  if (!values.nationality) {
    errors.nationality = "Required";
  }

  if (!values.dateIssued) {
    errors.dateIssued = "Required";
  }
  if (!values.expiryDate) {
    errors.expiryDate = "Required";
  }

  if (!values.gender) {
    errors.gender = "Required";
  }

  if (!values.qualification) {
    errors.qualification = "Required";
  }

  if (!values.isEmployed) {
    errors.isEmployed = "Required";
  }
  if (!values.qualificationArea) {
    errors.qualificationArea = "Required";
  }

  if (!values.acquisition) {
    errors.acquisition = "Required";
  }
  if (!values.residentialAddress) {
    errors.residentialAddress = "Required";
  }
  if (!values.fathersFirstName) {
    errors.fathersFirstName = "Required";
  }
  if (!values.fathersLastName) {
    errors.fathersLastName = "Required";
  }
  if (!values.institution) {
    errors.institution = "Required";
  }
  if (!values.fathersNationality) {
    errors.fathersNationality = "Required";
  }
  if (!values.mothersFirstName) {
    errors.mothersFirstName = "Required";
  }
  if (!values.mothersLastName) {
    errors.mothersLastName = "Required";
  }
  if (!values.graduationDate) {
    errors.graduationDate = "Required";
  }
  if (!values.mothersNationality) {
    errors.mothersNationality = "Required";
  }
  if (!values.maritalStatus) {
    errors.maritalStatus = "Required";
  }
  if (!values.referenceFirstName) {
    errors.referenceFirstName = "Required";
  }
  if (!values.referenceLastName) {
    errors.referenceLastName = "Required";
  }
  if (!values.referencePhoneNumber) {
    errors.referencePhoneNumber = "Required";
  } else if (
    values.referencePhoneNumber &&
    !/^([0-9]\d{9})$/i.test(values.referencePhoneNumber)
  ) {
    errors.referencePhoneNumber = "Invalid mobile number, must be 10 digits";
  }

  if (!values.referenceEmail) {
    errors.referenceEmail = "Required";
  }
  if (!values.referenceOccupation) {
    errors.referenceOccupation = "Required";
  }
  if (!values.referencePostalAddress) {
    errors.referencePostalAddress = "Required";
  }
  if (!values.refStartDate) {
    errors.refStartDate = "Required";
  }
  if (!values.refEndDate) {
    errors.refEndDate = "Required";
  }
  if (values.isEmployed === "true") {
    if (!values.presentEmployer) {
      errors.presentEmployer = "Required";
    }
    if (!values.salary) {
      errors.salary = "Required";
    }
    if (!values.addressOfEmployer) {
      errors.addressOfEmployer = "Required";
    }
    if (!values.positionHeld) {
      errors.positionHeld = "Required";
    }

    if (!values.particularWorkDone) {
      errors.particularWorkDone = "Required";
    }
    if (!values.reasonLeavingEmployer) {
      errors.reasonLeavingEmployer = "Required";
    }

    if (!values.employmentDurationFrom) {
      errors.employmentDurationFrom = "Required";
    }
    if (!values.employmentDurationTo) {
      errors.employmentDurationTo = "Required";
    }
  }

  if (!values.hasCrimnalOffence) {
    errors.hasCrimnalOffence = "Required";
  }
  if (values.hasCrimnalOffence === "true") {
    if (!values.offenceDetails) {
      errors.offenceDetails = "Required";
    }
  }

  if (!values.hasBeenDismissed) {
    errors.hasBeenDismissed = "Required";
  }

  if (values.hasBeenDismissed === "true") {
    if (!values.dismissalDetails) {
      errors.dismissalDetails = "Required";
    }
  }

  if (!values.hasGovernmentBond) {
    errors.hasGovernmentBond = "Required";
  }

  if (values.hasGovernmentBond === "true") {
    if (!values.bondDetails) {
      errors.bondDetails = "Required";
    }
  }

  return errors;
};

export default validate;
