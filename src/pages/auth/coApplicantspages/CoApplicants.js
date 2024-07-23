import React, { useState } from "react";
import Button from "../../../component/components/RoundButton";
import { useFormik } from "formik";
import "./CoApplicants.scss";
import ButtonComp from "../../../component/Formcomponent/ButtonComp";
import CoApplicantsvalidation from "../../../schemas/CoApplicantsvalidation";
import InputField from "../../../component/Formcomponent/InputField";
import Container from "../../../component/components/container";

const initialValues = {
  phonesubmit: "",
};    

const CoApplicants = () => {
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
          name="phonesubmit"
          type="number"
          label="Co-Applicant’s mobile number"
          autoComplete="off"
          placeholder={"+91 98545 59863"}
          value={values.phonesubmit}
          onChange={(e) =>
            String(e.target.value).length < 11 ? handleChange(e) : ""
          }
          onBlur={handleBlur}
        />
        {errors.phonesubmit && touched.phonesubmit ? (
          <p className="form-error">{errors.phonesubmit}</p>
        ) : null}
        <ButtonComp name={"Send OTP"} type="submit" />
      </form>
    </Container>
  );
};

export default CoApplicants;

// const CoApplicant = () => {
//   const navigate = useNavigate();
//   const [isActiveone, setIsActiveone] = useState("No");

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       validationSchema: CoApplicantvalidation,
//       onSubmit: (values, action) => {
//         console.log("Identitydetails Value---000", values);
//         navigate("/Logout");
//         action.resetForm();
//       },
//     });

//   console.log("CoApplicant Value---111", values);
//   console.log("CoApplicant errors---222", errors);

//   const primitivebtn1 = (e) => {
//     e.preventDefault();
//     setIsActiveone("Yes");
//   };
//   const primitivebtn2 = (e) => {
//     e.preventDefault();
//     setIsActiveone("No");
//   };
//   return (
//     <Container>
//       <div className="arrrange">
//         <div className="above-part">
//           <h1 className="add">Add a Co-Applicant </h1>

//           <p className="paragraph">
//             Adding a co-applicant can increase your chances of loan approval
//             improve loan terms, provide additional income and credit history
//             support to the application.
//           </p>
//           <form onSubmit={handleSubmit}>
//             <p className="paragraph2">Would you like to add a co-applicant?</p>

//             <div className="Identity-button1">
//               <Button
//                 name="Yes"
//                 onClick={primitivebtn1}
//                 isActive={isActiveone === "Yes"}
//               />
//               <Button
//                 name="No"
//                 onClick={primitivebtn2}
//                 isActive={isActiveone === "No"}
//               />
//             </div>
//             <ButtonComp name={"Submit Application"} type="submit" />
//           </form>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default CoApplicant;
