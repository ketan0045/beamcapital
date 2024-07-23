import React, { useState } from "react";
import Container from "../../../component/components/container";
import { useFormik } from "formik";
import "./Identitydetails.scss";
import InputField from "../../../component/Formcomponent/InputField";
import ButtonComp from "../../../component/Formcomponent/ButtonComp";
import Button from "../../../component/components/RoundButton";
import { useNavigate } from "react-router-dom";
import { Identitydetailsvalidation } from "../../../schemas/Identitydetailsvalidation";

const initialValues = {
  date: "",
  fathername: "",
  mothername: "",
  address: "",
  pincode: "",
  PermanentAddress: "",
  updatePincode: "",
};
  

const Identitydetails = () => {
  const navigate = useNavigate();

  const [isActiveone, setIsActiveone] = useState("Yes");
  const [isActivetwo, setIsActivetwo] = useState("Owned");
  const [address, setAddress] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Identitydetailsvalidation,
      onSubmit: (values, action) => {
        console.log("Identitydetails Value---000",values);
        navigate("/IdentityVerification");
        action.resetForm();
      },
    });

  console.log("Identitydetails Value---111", values);
  console.log("Identitydetails errors---222", errors);

  const primitivebtn1 = (e) => {
    e.preventDefault();
    setIsActiveone("Yes");
    setAddress(false);
  };
  const primitivebtn2 = (e) => {
    e.preventDefault();
    setIsActiveone("No");
    setAddress(true);
  };

  const Ownedbtn = (e) => {
    e.preventDefault();
    setIsActivetwo("Owned");
  };

  const Rentedbtn = (e) => {
    e.preventDefault();
    setIsActivetwo("Rented");
  };
  return (
    <Container>
      <div className="identitydetails-maindiv">
        <h1 className="heading">Identity</h1>

        <p className="heading-text">
          The indian Goverment requires us to collect your
          <br /> Identity details for verification purposes.
        </p>
        <form onSubmit={handleSubmit}>
          <InputField
            name="date"
            type="date"
            label="Date of birth (DD/MM/YYYY)"
            autoComplete="off"
            placeholder={"12/04/1998"}
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.date && touched.date ? (
            <p className="form-error">{errors.date}</p>
          ) : null}

          <InputField
            name="fathername"
            type="text"
            label="Father’s name"
            autoComplete="off"
            placeholder={"John David Doe"}
            value={values.fathername}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.fathername && touched.fathername ? (
            <p className="form-error">{errors.fathername}</p>
          ) : null}

          <InputField
            name="mothername"
            type="text"
            label="Mother’s name"
            autoComplete="off"
            placeholder={"John David Doe"}
            value={values.mothername}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.mothername && touched.mothername ? (
            <p className="form-error">{errors.mothername}</p>
          ) : null}

          <p className="heading-text-2">
            Is your current address same as your permanent address?
          </p>

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
            name="address"
            type="text"
            label="Current/Permanent Address"
            autoComplete="off"
            placeholder={"19/A, XYZ building, NR street, Mumbai 400019"}
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && touched.address ? (
            <p className="form-error">{errors.address}</p>
          ) : null}

          <InputField
            name="pincode"
            type="number"
            label="Pincode"
            autoComplete="off"
            placeholder={"400019"}
            onChange={(e) =>
              String(e.target.value).length < 7 ? handleChange(e) : ""
            }
            onBlur={handleBlur}
            value={values.pincode}
          />
          {errors.pincode && touched.pincode ? (
            <p className="form-error">{errors.pincode}</p>
          ) : null}

          {address ? (
            <>
              <hr />
              <InputField
                name="PermanentAddress"
                type="text"
                label="Permanent Address"
                autoComplete="off"
                placeholder={"19/A, XYZ building, NR street, Mumbai 400019"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.PermanentAddress}
              />
              {errors.PermanentAddress && touched.PermanentAddress ? (
                <p className="form-error">{errors.PermanentAddress}</p>
              ) : null}

              <InputField
                name="updatePincode"
                type="number"
                label="Pincode"
                autoComplete="off"
                placeholder={"400019"}
                onChange={(e) =>
                  String(e.target.value).length < 7 ? handleChange(e) : ""
                }
                onBlur={handleBlur}
                value={values.updatePincode}
              />
              {errors.PermanentAddress && touched.PermanentAddress ? (
                <p className="form-error">{errors.PermanentAddress}</p>
              ) : null}
            </>
          ) : null}

          <div className="ownership-status">
            <p className="heading-text-3">Residence ownership status</p>

            <div className="Identity-button2">
              <Button
                name="Owned"
                onClick={Ownedbtn}
                isActive={isActivetwo === "Owned"}
              />
              <Button
                name="Rented"
                onClick={Rentedbtn}
                isActive={isActivetwo === "Rented"}
              />
            </div>
          </div>
          <ButtonComp name={"Next"} type="submit" />
        </form>
      </div>
    </Container>
  );
};

export default Identitydetails;
