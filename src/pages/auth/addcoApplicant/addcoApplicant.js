import React, { useState } from "react";
import Button from "../../../component/components/RoundButton";
import { useFormik } from "formik";
import "./addcoApplicant.scss";
import ButtonComp from "../../../component/Formcomponent/ButtonComp";
import CoApplicantsvalidation from "../../../schemas/CoApplicantsvalidation";
import InputField from "../../../component/Formcomponent/InputField";
import Container from "../../../component/components/container";

const initialValues = {
    Applicantsphone: "",
    applicantname: "",
    applicantname: "",
};
// validation krvu new file
const AddcoApplicant = () => {
  const [isActiveone, setIsActiveone] = useState("Yes");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: CoApplicantsvalidation,
      onSubmit: (values, action) => {
        // setIsActiveone(false);
        console.log("Identitydetails Value---000", values);
        action.resetForm();
      },
    });

  console.log("CoApplicant Value---111", values);
  console.log("CoApplicant errors---222", errors);

  const primitivebtn1 = (e) => {
    e.preventDefault();
    setIsActiveone("Yes");
  };
  const primitivebtn2 = (e) => {
    e.preventDefault();
    setIsActiveone("No");
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1 className="add">Add a Co-Applicant </h1>
        <p className="paragraph">
          Adding a co-applicant can increase your chances of loan approval
          improve loan terms, provide additional income and credit history
          support to the application.
        </p>
        <p className="paragraph2">Would you like to add a co-applicant?</p>

        <div className="Identity-button1">
          <Button
            name="Yes"
            onClick={primitivebtn1}
            isActive={isActiveone === "Yes"}
          />
          <Button
            name="No"
            onClick={primitivebtn2}
            isActive={isActiveone === "No"}
          />
        </div>
        <InputField
          name="Applicantsphone"
          type="number"
          label="Co-Applicant’s mobile number"
          autoComplete="off"
          placeholder={"+91 98545 59863"}
          value={values.Applicantsphone}
          onChange={(e) =>
            String(e.target.value).length < 11 ? handleChange(e) : ""
          }
          onBlur={handleBlur}
        />
        {errors.Applicantsphone && touched.Applicantsphone ? (
          <p className="form-error">{errors.Applicantsphone}</p>
        ) : null}

        <InputField
          name="applicantotp"
          type="number"
          label="Enter OTP sent to +91 98545 59863 "
          autoComplete="off"
          placeholder={"9845"}
          value={values.applicantotp}
          onChange={(e) =>
            String(e.target.value).length < 5 ? handleChange(e) : ""
          }
          onBlur={handleBlur}
        />
        {errors.applicantotp && touched.applicantotp ? (
          <p className="form-error">{errors.applicantotp}</p>
        ) : null}

        <InputField
          name="applicantname"
          type="text"
          label="Co-Applicant’s full name"
          autoComplete="off"
          placeholder={"John David Doe"}
          value={values.applicantname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.applicantname && touched.applicantname ? (
          <p className="form-error">{errors.applicantname}</p>
        ) : null}

        <ButtonComp name={"Next"} type="submit" />
      </form>
    </Container>
  );
};

export default AddcoApplicant;
