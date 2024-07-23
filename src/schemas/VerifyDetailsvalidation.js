import * as Yup from "yup";

export const VerifyDetailsvalidation = Yup.object({
  otp: Yup.string()
    .matches(/^\d{4}$/, "OTP must be a 4-digit number")
    .required("OTP is required"),
  fullname: Yup.string()
    .required("Full Name is required")
    .matches(/^[A-Za-z\s]+$/, "Only alphabets and spaces are allowed")
    .min(2, "Full Name should be at least 2 characters")
    .max(25, "Full Name should not exceed 25 characters"),
  pannumber: Yup.string()
    .required("PAN Number is required")
    .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/, "Invalid PAN Number"),
});

export default VerifyDetailsvalidation;




