import React, { useState } from "react";
// import "./VerifyDetail.scss";
import { useFormik } from "formik";
import VerifyDetailsvalidation from "../../../schemas/VerifyDetailsvalidation";
import InputField from "../../../component/Formcomponent/InputField";
import ButtonComp from "../../../component/Formcomponent/ButtonComp";
import Container from "../../../component/components/container";
import { useNavigate } from "react-router-dom";

const initialValues = {
  otp: "",
  fullname: "",
  pannumber: "",
};

const VerifyDetails = ({data}) => {
  console.log(data,"33333")
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: VerifyDetailsvalidation,
      onSubmit: (values, action) => {
        console.log("VerifyDetail Value---000", values);
        navigate("/Work");
        action.resetForm();
      },
    });
  console.log("VerifyDetail Value---111", values);
  console.log("VerifyDetail errors---222", errors);

  return (
    <Container>
      <h2 className="data-heading">Verify Details</h2>
      <h4 className="data-title">
        Please enter OTP sent to your mobile number
      </h4>
      <form onSubmit={handleSubmit}>
        <InputField
          type="number"
          label={`Enter OTP sent to +91 ${data}`}
          name="otp"
          value={values.otp}
          placeholder={"9485"}
          onChange={(e) =>
            String(e.target.value).length < 5 ? handleChange(e) : ""
          }
          onBlur={handleBlur}
        />
        {errors.otp && touched.otp ? (
          <p className="form-error">{errors.otp}</p>
        ) : null}

        <InputField
          type="text"
          label="Enter your full name"
          name="fullname"
          value={values.fullname}
          placeholder={"John David Doe"}
          onChange={(e) =>
            String(e.target.value).length < 15 ? handleChange(e) : ""
          }
          onBlur={handleBlur}
        />
        {errors.fullname && touched.fullname ? (
          <p className="form-error">{errors.fullname}</p>
        ) : null}

        <InputField
          type="text"
          label="Enter your PAN number"
          name="pannumber"
          value={values.pannumber}
          placeholder={"AYSFJ2561F"}
          onChange={(e) =>
            String(e.target.value).length < 11 ? handleChange(e) : ""
          }
          onBlur={handleBlur}
        />
        {errors.pannumber && touched.pannumber ? (
          <p className="form-error">{errors.pannumber}</p>
        ) : null}

        <ButtonComp name={"Get started"} type="submit" />
      </form>
    </Container>
  );
};

export default VerifyDetails;
