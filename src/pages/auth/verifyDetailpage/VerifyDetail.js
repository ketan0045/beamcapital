import React, { useState,useContext} from "react";
import "./VerifyDetail.scss";
import { useFormik } from "formik";
import InputField from "../../../component/Formcomponent/InputField";
import ButtonComp from "../../../component/Formcomponent/ButtonComp";
import VerifyDetails from "../verifyDetailspages/VerifyDetails";
import VerifyDetailvalidation from "../../../schemas/VerifyDetailvalidation";
import Container from "../../../component/components/container";
import { useNavigate } from "react-router-dom";
import UserContext from "../mobileAuth/Authentication"

const initialValues = {
  otp: "",
  fullname: "",
};

const VerifyDetail = () => {
  const user = useContext(UserContext);

  console.log(user,"22222")
 
  const navigate = useNavigate();
  const [first, setfirst] = useState(true);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: VerifyDetailvalidation,
      onSubmit: (values, action) => {
        setfirst(false);
        console.log("VerifyDetail Value---000", values);
        navigate("/VerifyDetails");
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
          label={`Enter OTP sent to +91 ${user}`}
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
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.fullname && touched.fullname ? (
          <p className="form-error">{errors.fullname}</p>
        ) : null}

        <ButtonComp name={"Get started"} type="submit" />
      </form>
    </Container>
  );
};

export default VerifyDetail;
