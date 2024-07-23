import React, { useState } from "react";
import "./LandingPage.scss";
import Authentication from "../mobileAuth/Authentication";

const LandingPage = () => {
  const [first, setfirst] = useState(false);

  return (
    <>
      {!first ? (
        <div className="landingpage">
          <h1 className="landingpage-h1">Landing Page</h1>
        </div>
      ) : (
        <Authentication />
      )}
    </>
  );
};

export default LandingPage;
