import * as Yup from "yup";

export const VerifyDetailsvalidation = Yup.object({
    businessName: Yup.string().min(2).max(20).required("Please enter your Businessname"),
    BusinesGstnumber:Yup.string().min(15).max(15).required("Enter your Business GST number"),
    totalcurrentmonthlyemis: Yup.string()
    .matches(/^\d{3,10}$/, "EMI must be between 3 to 10 digits")
    .required("Total Monthly EMI is required"),
    itr_upload: Yup.mixed().required("Please upload a image for ITR"),
    pbs_upload: Yup.mixed().required("Please upload a image for bankstatement"),
    pbps_upload: Yup.mixed().required("Please upload a image for businessstatement"),
    electricity_bill: Yup.mixed().required(
    "Please upload a image for electricitybill"
  ),


  Monthly_rent: Yup.string()
    .matches(/^\d{3,10}$/, "Monthly rent must be between 3 to 10 digits")
    .required("Monthly rent is required"),
    business_Pan: Yup.string()
    .required("Business PAN Number is required")
    .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/, "Invalid Business PAN Number"),
    company_Name: Yup.string().min(2).max(20).required("Please enter your Company name"),
    In_hand_salary: Yup.string()
    .matches(/^\d{3,10}$/, "Monthly in-hand salary (in INR) must be between 3 to 10 digits")
    .required("Monthly in-hand salary (in INR) is required"),



    Upload_rental_agreement: Yup.mixed().required("Please upload a image Upload rental agreement"),
    months_bank_statementupload: Yup.mixed().required("Please upload a image for Upload 12 months bank statement"),
    three_months_salary_slips: Yup.mixed().required("Please upload a image for Upload 3 months salary slips"),
});

export default VerifyDetailsvalidation;




        //   gst validation :::BusinesGstnumber: Yup.string()
        //     .matches(
        //       /^[0-9A-Z]{2}[0-9A-Z]{5}[0-9A-Z]{2}[0-9A-Z]{1}[0-9A-Z]{3}[0-9]{1}Z[0-9A-Z]{1}$/,
        //       "Invalid GST number"
        //     )
        //     .required("GST number is required"),