import LandingPage from "../pages/auth/landingPage/LandingPage";
import Authentication from "../pages/auth/mobileAuth/Authentication"
import VerifyDetail from "../pages/auth/verifyDetailpage/VerifyDetail"
import Work from "../pages/auth/workPage/Work"
import Identitydetails from "../pages/auth/identityDetailsPage/Identitydetails"
import IdentityVerification from "../pages/auth/identityVerificationpage/IdentityVerification"
import CoApplicant from '../pages/auth/coApplicationpage/CoApplicant'
import VerifyDetails from "../pages/auth/verifyDetailspages/VerifyDetails"
import Logout from "../pages/auth/logOutpage/Logout";

import CoApplicants from "../pages/auth/coApplicantspages/CoApplicants";
import AddcoApplicant from "../pages/auth/addcoApplicant/addcoApplicant";
import AddWork from "../pages/auth/addwork/addWork";
import CoIdentitydetails from "../pages/auth/coIdentitydetails/coIdentitydetails";
import CoIdentityVerification from "../pages/auth/coIdentityVerification/coIdentityVerification";



export const AUTH_ROUTE = [
  {
    path: "/",
    isPrivate: false,
    component: <LandingPage />,
  },
  {
    path: "/authentication",
    isPrivate: false,
    component: <Authentication />,
  },
  {
    path: "/verifyDetail",
    isPrivate: false,
    component: <VerifyDetail />,
  },
{
    path: "/verifyDetails",
    isPrivate: false,
    component: <VerifyDetails />,
  },
  {
    path: "/work",
    isPrivate: false,
    component: <Work />,
  },
  {
    path: "/identitydetails",
    isPrivate: false,
    component: <Identitydetails />,
  },
  {
    path: "/identityVerification",
    isPrivate: false,
    component: <IdentityVerification />,
  },
  {
    path: "/coApplicant",
    isPrivate: false,
    component: <CoApplicant />,
  },
  {
    path: "/logout",
    isPrivate: false,
    component: <Logout />,
  },
  // {
  //   path: "/coApplicants",
  //   isPrivate: false,
  //   component:<CoApplicants/>,
  // },
  // {
  //   path: "/addcoApplicant",
  //   isPrivate: false,
  //   component: <AddcoApplicant />,
  // },
  // {
  //   path: "/addWork",
  //   isPrivate: false,
  //   component: <AddWork />,
  // },
  // {
  //   path: "/coIdentitydetails",
  //   isPrivate: false,
  //   component: <CoIdentitydetails />,
  // },
  // {
  //   path: "/coIdentityVerification",
  //   isPrivate: false,
  //   component: <CoIdentityVerification />,
  // },
];

