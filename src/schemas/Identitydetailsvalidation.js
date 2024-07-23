import * as Yup from "yup";

export const Identitydetailsvalidation = Yup.object({
  date: Yup.date()
    .required("Start Date is Required")
    .max(new Date(), "End Date must be later than today"),
  fathername: Yup.string()
    .min(2)
    .max(15)
    .required("Please enter your Fathername"),
  mothername: Yup.string()
    .min(2)
    .max(15)
    .required("Please enter your Mothername"),
  address: Yup.string().min(10).max(30).required("Enter your Address"),
  pincode: Yup.string().min(6).max(6).required("Enter your Pincode"),

  PermanentAddress: Yup.string().min(10).max(30).required("Enter your Address"),
  updatePincode: Yup.string().min(6).max(6).required("Enter your Pincode"),

});

