import React from "react";
import Appbar from "../Formcomponent/Appbar";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Appbar />
      {children}
    </>
  );
};

export default PublicLayout;
