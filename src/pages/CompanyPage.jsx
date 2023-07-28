import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import App from "./../App";
function CompanyPage({ companies }) {
  const params = useParams();
  let companyToDisplay = companies.find(
    (company) => company.name === params.companySlug
  );
  return (
    <div>
      <h1>{companyToDisplay.name}</h1>
    </div>
  );
}

export default CompanyPage;
