import React from "react";
import "./Logout.scss";
import { useFormik } from "formik";
import imageslide from "../../../assets/images/imageslide.png";
import Container from "../../../component/components/container";
import ButtonComp from "../../../component/Formcomponent/ButtonComp";
import { useNavigate } from "react-router-dom";

const initialValues = {

};

const Logout = () => {
  const navigate = useNavigate();
  const logoutbtn = {
    color: "red",
    border: "1px solid #A3AED0",
    color: "#47548C",
    fontSize: "14px",
    backgroundColor: "#FFF",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    // validationSchema: ,
    onSubmit: (values, action) => {
      console.log("Logout Value---000", values);
      navigate("/Authentication");
      action.resetForm();
    },
  });
console.log("Logout Value---111", values);
console.log("Logout errors---222", errors);

  return (
    <Container>
      <div className="containerer-main">
        <div className="container">
          <img src={imageslide} />
        </div>
        <div className="all-title">
          <h1 className="congrats">Congralutations!</h1>
          <div className="paragraph-last">
            <p className="paragraph-one">
              Your loan application has been submitted! We are processing your
              loan application and this can take some time while we try to get
              you the best offers.
            </p>

            <p className="paragraph-two">
              You can still add a co-applicant. Adding another partner sharing
              the loan responsibility can increase the chances of loan approval,
              improve loan terms, provide additional income and credit history
              to support the application.
            </p>

            <p className="paragraph-three">
              Please connect over support@beamcapital.ai or check our FAQs for
              any queries.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="last-logout">
          <ButtonComp name={"Add a Co-Applicant"} />
          <ButtonComp name={"Logout"} style={logoutbtn} />
        </div>
        </form>
      </div>
    </Container>
  );
};

export default Logout;
