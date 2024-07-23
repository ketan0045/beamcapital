import * as Yup from "yup";
export const IdentityVerificationvalidation = Yup.object().shape({
  pannum: Yup.string()
    .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/, "Invalid PAN number")
    .required("PAN number is required"),
  aadhaarnumber: Yup.string()
    .matches(/^\d{12}$/, "Invalid Aadhaar number")
    .required("Aadhaar number is required"),
  adharnumber: Yup.mixed().required(
    "Please upload a image for Upload Aadhaar card"
  ),
  upload_manually: Yup.mixed().required(
    "Please upload a image for Upload Manually Aadhaar card"
  ),
  upload_pan: Yup.mixed().required("Please upload a image for Upload PAN"),
});

export default IdentityVerificationvalidation;
