import React, { useState,createContext, useEffect } from "react";
import "./Authentication.scss";
import { useFormik } from "formik";
import InputField from "../../../component/Formcomponent/InputField";
import Authenticationvalidation from "../../../schemas/Authenticationvalidation";
import ButtonComp from "../../../component/Formcomponent/ButtonComp";
import Container from "../../../component/components/container";
import { useNavigate } from "react-router-dom";
import VerifyDetails from "../verifyDetailspages/VerifyDetails";

const initialValues = {
  phone: "",
};

export const UserContext = createContext();

const Authentication = () => {
  const data = 'Hello, world!';

  const navigate = useNavigate();
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Authenticationvalidation,
      onSubmit: (values, action) => {
        console.log("Authentication Value---000", values);
        navigate("/VerifyDetail");
        action.resetForm();
      },
    });
  console.log("Authentication Value---111", values);
  console.log("Authentication errors---222", errors);

  return (
    <Container>
      <UserContext.Provider value={data}>
      <h2 className="data-heading">
        Apply for financial aid with Beam Capital
      </h2>
      <h4 className="data-title">
        Making critical financial aid accessible to everyone in India
      </h4>
      <form onSubmit={handleSubmit}>
        <InputField
          type="number"
          label="Enter your mobile number"
          name="phone"
          value={values.phone}
          placeholder={"+91 98545 59863"}
          onChange={(e) =>
            String(e.target.value).length < 11 ? handleChange(e) : ""
          }
          onBlur={handleBlur}
        />
        {errors.phone && touched.phone ? (
          <p className="form-error">{errors.phone}</p>
        ) : null}

        <ButtonComp name={"Continue"} type="submit" />
      </form>

      <h6 className="footerpart">
        <span>
          By clicking continue, you agree with our
          <a
            href="https://www.idfcfirstbank.com/personal-banking/loans/personal-loan/terms-and-conditions"
            target="_blank"
          >
            terms and conditions
          </a>
          and
          <a href="https://www.myloancare.in/privacy-policy/" target="_blank">
            privacy policy
          </a>
          .
        </span>
      </h6>
    </UserContext.Provider>

    </Container>
  );
};

export default Authentication;
