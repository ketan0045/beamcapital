import * as Yup from "yup";

export const Authenticationvalidation = Yup.object({
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone number is required"),
});

export default Authenticationvalidation

