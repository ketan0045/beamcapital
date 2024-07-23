import React, { useState } from "react";
import "./coIdentityVerification.scss";
import { useFormik } from "formik";
import Container from "../../../component/components/container";
import InputField from "../../../component/Formcomponent/InputField";
import ButtonComp from "../../../component/Formcomponent/ButtonComp";
import UploadDocument from "../../../component/components/uploaddocument";
import IdentityVerificationvalidation from "../../../schemas/IdentityVerificationvalidation";
import { useNavigate } from "react-router-dom";
const initialValues = {
  pannum: "",
  aadhaarnumber: "",
  adharnumber: "",
  upload_manually: "",
  upload_pan: "",
};

const CoIdentityVerification = () => {
  const navigate = useNavigate();
  const [isCheckedone, setIsCheckedone] = useState(true);
  const [isCheckedtwo, setIsCheckedtwo] = useState(true);

  const handleCheckboxChangeone = () => {
    setIsCheckedone(!isCheckedone);
  };

  const handleCheckboxChangetwo = () => {
    setIsCheckedtwo(!isCheckedtwo);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: IdentityVerificationvalidation,
      onSubmit: (values, action) => {
        console.log("IdentityVerification Value---000", values);
        navigate("/CoApplicant");
        action.resetForm();
      },
    });
  console.log("IdentityVerification Value---111", values);
  console.log("IdentityVerification errors---222", errors);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="Verifyidentity">
          <div className="headingbar">
            <h2 className="heading-part">Verify Co-Applicant’s Identity</h2>
            <p className="header-show">
              The Indian Government requires us to collect your <br />
              Aadhaar for identity verification purposes.
            </p>
            <div className="wrap-main">
              <div className="wrap">
                <InputField
                  type="text"
                  label="PAN number"
                  name="pannum"
                  value={values.pannum}
                  placeholder={"AYSFJ2561F"}
                  onChange={(e) =>
                    String(e.target.value).length < 11 ? handleChange(e) : ""
                  }
                  onBlur={handleBlur}
                />
                {errors.pannum && touched.pannum ? (
                  <p className="form-error">{errors.pannum}</p>
                ) : null}
              </div>
              <div className="btnbtn">
                <ButtonComp
                  name="Verify"
                  onClick={(e) => e.preventDefault()}
                />
              </div>
            </div>
            <div className="checkbox-one">
              <input
                className="input-checkbox-one"
                type="checkbox"
                checked={isCheckedone}
                onChange={handleCheckboxChangeone}
              />
              <label className="label-checkbox-one">
                I confirm this PAN belongs to me
              </label>
            </div>

            <div className="checkbox-two">
              <input
                className="input-checkbox-two"
                type="checkbox"
                checked={isCheckedtwo}
                onChange={handleCheckboxChangetwo}
              />
              <label className="label-checkbox-two">
                By clicking verify, I consent for c-kyc verification
              </label>

              <InputField
                type="number"
                label="Aadhaar number"
                name="aadhaarnumber"
                value={values.aadhaarnumber}
                placeholder="AYSFJ2561F"
                onChange={(e) =>
                  String(e.target.value).length < 13 ? handleChange(e) : ""
                }
                onBlur={handleBlur}
              />
              {errors.aadhaarnumber && touched.aadhaarnumber ? (
                <p className="form-error">{errors.aadhaarnumber}</p>
              ) : null}

              <label className="label-property">Upload your Aadhaar</label>

              <UploadDocument
                title={"Upload Aadhaar via DigiLocker"}
                name={"adharnumber"}
                id={"aahdar-number"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="image-show">{values.adharnumber}</p>
              {errors.adharnumber && touched.adharnumber ? (
                <p className="auth-err-work">{errors.adharnumber}</p>
              ) : null}

              <UploadDocument
                title={"Upload Manually"}
                name={"upload_manually"}
                id={"upload-aadhar-manually"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="image-show">{values.upload_manually}</p>
              {errors.upload_manually && touched.upload_manually ? (
                <p className="auth-err-work">{errors.upload_manually}</p>
              ) : null}
              <label className="label-property">Upload your Aadhaar</label>

              <UploadDocument
                title={"Upload PAN"}
                name={"upload_pan"}
                id={"upload-pan-manually"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className="image-show">{values.upload_pan}</p>
              {errors.upload_pan && touched.upload_pan ? (
                <p className="auth-err-work">{errors.upload_pan}</p>
              ) : null}

              <ButtonComp name={"Next"} type="submit" />
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default CoIdentityVerification;
