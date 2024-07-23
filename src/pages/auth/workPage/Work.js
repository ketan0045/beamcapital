import React, { useState } from "react";
import "./Work.scss";
import { useFormik } from "formik";
import InputField from "../../../component/Formcomponent/InputField";
import ButtonComp from "../../../component/Formcomponent/ButtonComp";
import Workvalidation from "../../../schemas/Workvalidation";
import Button from "../../../component/components/RoundButton";
import Container from "../../../component/components/container";
import UploadDocument from "../../../component/components/uploaddocument";
import { useNavigate } from "react-router-dom";

const initialValues = {
  businessName: "",
  BusinesGstnumber: "",
  totalcurrentmonthlyemis: "",
  itr_upload: "",
  pbs_upload: "",
  pbps_upload: "",
  electricity_bill: "",

  Monthly_rent: "",
  business_Pan: "",
  company_Name: "",
  In_hand_salary: "",

  Upload_rental_agreement: "",
  months_bank_statementupload: "",
  three_months_salary_slips: "",
};

const Work = () => {
  const navigate = useNavigate();

  const [isActiveone, setIsActiveone] = useState("Proprietorship");
  const [isActivetwo, setIsActivetwo] = useState("Owned");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      // validationSchema: Workvalidation,
      onSubmit: (values, action) => {
        console.log("VerifyDetail Value---000", values);
        navigate("/Identitydetails");
        action.resetForm();
      },
    });
  console.log("VerifyDetail Value---111", values);
  console.log("VerifyDetail errors---222", errors);

  const onPropClick = () => {
    setIsActiveone("Proprietorship");
  };

  const onParnerShipClick = () => {
    setIsActiveone("PartnerShip");
  };
  const onSalariedClick = () => {
    setIsActiveone("Salaried");
  };

  const onRentedClick = () => {
    setIsActivetwo("Rented");
  };
  const onOwnedClick = () => {
    setIsActivetwo("Owned");
  };
  return (
    <Container>
      <h2 className="work-heading">
        Congralutions. You are eligible for the loan. Let’s add your work
        details.
      </h2>
      <h4 className="work-title">
        You are required to submit the following work related documents as per
        your employment status.
      </h4>

      <label className="label-bussiness">Bussiness type</label>

      <div className="btnContaienr">
        <Button
          name="Proprietorship"
          onClick={onPropClick}
          isActive={isActiveone === "Proprietorship"}
          color={true}
        />
        <Button
          name="Partnership"
          onClick={onParnerShipClick}
          isActive={isActiveone === "PartnerShip"}
        />
        <Button
          name="Salaried"
          onClick={onSalariedClick}
          isActive={isActiveone === "Salaried"}
        />
      </div>

      {isActiveone !== "Salaried" && (
        <>
          <label className="label-property">
            Business property ownership status
          </label>
          <div className="btnContaienr-two">
            <Button
              name="Owned"
              isActive={isActivetwo === "Owned"}
              onClick={onOwnedClick}
            />
            <Button
              name="Rented"
              isActive={isActivetwo === "Rented"}
              onClick={onRentedClick}
            />
          </div>
        </>
      )}

      <form onSubmit={handleSubmit}>
        {isActiveone === "Salaried" ? (
          <>
            <InputField
              type="text"
              label="Company name"
              name="company_Name"
              value={values.company_Name}
              placeholder={"MediaTech Pvt.Ltd"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.company_Name && touched.company_Name ? (
              <p className="form-error">{errors.company_Name}</p>
            ) : null}
            <InputField
              type="text"
              label="Monthly in-hand salary (in INR)"
              name="In_hand_salary"
              value={values.In_hand_salary}
              placeholder={"INR 50,000"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.In_hand_salary && touched.In_hand_salary ? (
              <p className="form-error">{errors.In_hand_salary}</p>
            ) : null}
          </>
        ) : (
          <>
            {/* niche same */}
            {((isActiveone === "Proprietorship" && isActivetwo === "Rented") ||
              (isActiveone === "PartnerShip" && isActivetwo === "Rented")) && (
              <InputField
                type="text"
                label="Monthly rent"
                name="Monthly_rent"
                value={values.Monthly_rent}
                placeholder={"INR 50,000"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            {errors.Monthly_rent && touched.Monthly_rent ? (
              <p className="form-error">{errors.Monthly_rent}</p>
            ) : null}
            {/* 2 batave 2 maa */}
            <InputField
              type="text"
              label="Business name"
              name="businessName"
              value={values.businessName}
              placeholder={"MediaTech Pvt.Ltd"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.businessName && touched.businessName ? (
              <p className="form-error">{errors.businessName}</p>
            ) : null}
            {/* aa khabar na pdi */}
            {((isActiveone === "PartnerShip" && isActivetwo === "Owned") ||
              (isActiveone === "PartnerShip" && isActivetwo === "Rented")) && (
              <InputField
                type="text"
                label="Business PAN"
                name="business_Pan"
                value={values.business_Pan}
                placeholder={"Business PAN"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            {errors.business_Pan && touched.business_Pan ? (
              <p className="form-error">{errors.business_Pan}</p>
            ) : null}

            <InputField
              type="text"
              label="Business GST number"
              suggest={
                "Leave this section empty if not applicable/you don’t have a GST number."
              }
              name="BusinesGstnumber"
              value={values.BusinesGstnumber}
              onChange={(e) =>
                String(e.target.value).length < 16 ? handleChange(e) : ""
              }
              onBlur={handleBlur}
            />
            {errors.BusinesGstnumber && touched.BusinesGstnumber ? (
              <p className="form-error">{errors.BusinesGstnumber}</p>
            ) : null}
          </>
        )}

        <InputField
          type="text"
          label="Total current monthly EMIs"
          name="totalcurrentmonthlyemis"
          value={values.totalcurrentmonthlyemis}
          placeholder={"50,000"}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.totalcurrentmonthlyemis && touched.totalcurrentmonthlyemis ? (
          <p className="form-error">{errors.totalcurrentmonthlyemis}</p>
        ) : null}

        <label className="label-property">Documents Required</label>

        <UploadDocument
          title={"Upload 2 year ITR"}
          name={"itr_upload"}
          id={"itr-year"}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p className="image-show">{values.itr_upload}</p>
        {errors.itr_upload && touched.itr_upload ? (
          <p className="auth-err-work">{errors.itr_upload}</p>
        ) : null}

        {isActiveone === "Proprietorship" && (
          <>
            <UploadDocument
              title={"Upload 12 months personal bank statement"}
              name={"pbs_upload"}
              id={"personal-bank-statement"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="image-show">{values.pbs_upload}</p>
            {errors.pbs_upload && touched.pbs_upload ? (
              <p className="auth-err-work">{errors.pbs_upload}</p>
            ) : null}

            <UploadDocument
              title={"Upload 12 months business bank statement"}
              name={"pbps_upload"}
              id={"business-bank-statement"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </>
        )}
        {(isActiveone === "PartnerShip" || isActiveone === "Salaried") && (
          <UploadDocument
            title={"Upload 12 months bank statement"}
            name={"months_bank_statementupload"}
            id={"personal-bank-statement"}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        <p className="image-show">{values.months_bank_statementupload}</p>
        {errors.months_bank_statementupload &&
        touched.months_bank_statementupload ? (
          <p className="auth-err-work">{errors.months_bank_statementupload}</p>
        ) : null}

        {isActivetwo === "Owned" && (
          <UploadDocument
            title={"Upload latest electricity bill"}
            name={"electricity_bill"}
            id={"Upload latest electricity bill"}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        {isActivetwo === "Rented" && isActiveone !== "Salaried" && (
          <UploadDocument
            title={"Upload rental agreement"}
            name={"Upload_rental_agreement"}
            id={"Upload rental agreement"}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        <p className="image-show">{values.Upload_rental_agreement}</p>
        {errors.Upload_rental_agreement && touched.Upload_rental_agreement ? (
          <p className="auth-err-work">{errors.Upload_rental_agreement}</p>
        ) : null}
        {isActiveone === "Salaried" && (
          <UploadDocument
            title={"Upload 3 months salary slips"}
            name={"three_months_salary_slips"}
            id={"salary_slips"}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        <p className="image-show">{values.three_months_salary_slips}</p>
        {errors.three_months_salary_slips &&
        touched.three_months_salary_slips ? (
          <p className="auth-err-work">{errors.three_months_salary_slips}</p>
        ) : null}

        <ButtonComp name={"Next"} type="submit" />
      </form>
    </Container>
  );
};

export default Work;

// import React, { useState } from "react";
// import "./Work.scss";
// import { useFormik } from "formik";
// import InputField from "../Formcomponent/InputField";
// import ButtonComp from "../Formcomponent/ButtonComp";
// import Workvalidation from "../../schemas/Workvalidation";
// import Button from "./RoundButton";
// import Container from "./container";
// import UploadDocument from "./uploaddocument";
// import Identitydetails from "./Identitydetails";

// const initialValues = {
//   businessName: "",
//   BusinesGstnumber: "",
//   totalcurrentmonthlyemis: "",
//   itr_upload: "",
//   pbs_upload: "",
//   pbps_upload: "",
//   electricity_bill: "",
// };

// const Work = () => {
//   const [first, setfirst] = useState(true);
//   const [isActiveone, setIsActiveone] = useState("Proprietorship");
//   const [isActivetwo, setIsActivetwo] = useState("Owned");

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       // validationSchema: Workvalidation,
//       onSubmit: (values, action) => {
//         setfirst(false);
//         console.log("VerifyDetail Value---000", values);
//         action.resetForm();
//       },
//     });
//   console.log("VerifyDetail Value---111", values);
//   console.log("VerifyDetail errors---222", errors);

//   const onPropClick = () => {
//     setIsActiveone("Proprietorship");
//   };

//   const onParnerShipClick = () => {
//     setIsActiveone("PartnerShip");
//   };
//   const onSalariedClick = () => {
//     setIsActiveone("Salaried");
//   };

//   const onRentedClick = () => {
//     setIsActivetwo("Rented");
//   };
//   const onOwnedClick = () => {
//     setIsActivetwo("Owned");
//   };
//   return (
//     <>
//       {first ? (
//         <Container>
//           <h2 className="work-heading">
//             Congralutions. You are eligible for the loan. Let’s add your work
//             details.
//           </h2>
//           <h4 className="work-title">
//             You are required to submit the following work related documents as
//             per your employment status.
//           </h4>

//           <label className="label-bussiness">Bussiness type</label>

//           <div className="btnContaienr">
//             <Button
//               name="Proprietorship"
//               onClick={onPropClick}
//               isActive={isActiveone === "Proprietorship"}
//               color={true}
//             />
//             <Button
//               name="Partnership"
//               onClick={onParnerShipClick}
//               isActive={isActiveone === "PartnerShip"}
//             />
//             <Button
//               name="Salaried"
//               onClick={onSalariedClick}
//               isActive={isActiveone === "Salaried"}
//             />
//           </div>
//           {isActiveone !== "Salaried" && (
//             <>
//               <label className="label-property">
//                 Business property ownership status
//               </label>
//               <div className="btnContaienr-two">
//                   <Button
//                     name="Owned"
//                     isActive={isActivetwo === "Owned"}
//                     onClick={onOwnedClick}
//                   />
//                 <Button
//                   name="Rented"
//                   isActive={isActivetwo === "Rented"}
//                   onClick={onRentedClick}
//                 />
//               </div>
//             </>
//           )}

//           <form onSubmit={handleSubmit}>
//             <InputField
//               type="text"
//               label="Business name"
//               name="businessName"
//               value={values.businessName}
//               placeholder={"MediaTech Pvt.Ltd"}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.businessName && touched.businessName ? (
//               <p className="form-error">{errors.businessName}</p>
//             ) : null}

//             <InputField
//               type="text"
//               label="Business GST number"
//               suggest={
//                 "Leave this section empty if not applicable/you don’t have a GST number."
//               }
//               name="BusinesGstnumber"
//               value={values.BusinesGstnumber}
//               onChange={(e) =>
//                 String(e.target.value).length < 16 ? handleChange(e) : ""
//               }
//               onBlur={handleBlur}
//             />
//             {errors.BusinesGstnumber && touched.BusinesGstnumber ? (
//               <p className="form-error">{errors.BusinesGstnumber}</p>
//             ) : null}

//             <InputField
//               type="text"
//               label="Total current monthly EMIs"
//               name="totalcurrentmonthlyemis"
//               value={values.totalcurrentmonthlyemis}
//               placeholder={"50,000"}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.totalcurrentmonthlyemis &&
//             touched.totalcurrentmonthlyemis ? (
//               <p className="form-error">{errors.totalcurrentmonthlyemis}</p>
//             ) : null}

//             {/*
//             <label
//               htmlFor="Upload 3 months salary slips"
//               className="uploadeDoc"
//             >
//               Upload 2 year ITR
//               <input
//                 type="file"
//                 name="ItR"
//                 id="Upload 3 months salary slips"
//                 className="custom-inputfield"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </label> */}

//             <label className="label-property">Documents Required</label>

//             <UploadDocument
//               title={"Upload 2 year ITR"}
//               name={"itr_upload"}
//               id={"itr-year"}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <p className="image-show">{values.itr_upload}</p>
//             {errors.itr_upload && touched.itr_upload ? (
//               <p className="auth-err-work">{errors.itr_upload}</p>
//             ) : null}

//             <UploadDocument
//               title={"Upload 12 months personal bank statement"}
//               name={"pbs_upload"}
//               id={"personal-bank-statement"}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <p className="image-show">{values.pbs_upload}</p>
//             {errors.pbs_upload && touched.pbs_upload ? (
//               <p className="auth-err-work">{errors.pbs_upload}</p>
//             ) : null}

//             <UploadDocument
//               title={"Upload 12 months business bank statement"}
//               name={"pbps_upload"}
//               id={"business-bank-statement"}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <p className="image-show">{values.pbps_upload}</p>
//             {errors.pbps_upload && touched.pbps_upload ? (
//               <p className="auth-err-work">{errors.pbps_upload}</p>
//             ) : null}

//             <UploadDocument
//               title={"Upload latest electricity bill"}
//               name={"electricity_bill"}
//               id={"Upload latest electricity bill"}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <p className="image-show">{values.electricity_bill}</p>
//             {errors.electricity_bill && touched.electricity_bill ? (
//               <p className="auth-err-work">{errors.electricity_bill}</p>
//             ) : null}

//             <ButtonComp name={"Next"} type="submit" />
//           </form>
//         </Container>
//       ) : (
//         <Identitydetails />
//       )}
//     </>
//   );
// };

// export default Work;
