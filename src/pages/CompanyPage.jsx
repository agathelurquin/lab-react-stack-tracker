import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const params = useParams();
  let companyToDisplay = companies.find(
    (company) => company.name === params.companySlug
  );
  return (
    <div>
      <h1>{companyToDisplay.name}</h1>

      <p>Check out their website: {companyToDisplay.website}</p>
      <p>About {companyToDisplay.name}</p>
      <p>{companyToDisplay.description}</p>

      <img src={companyToDisplay.logo} alt="company-logo" />

      <h3>{companyToDisplay.name}'s Technologies</h3>
      <ul>
        {companyToDisplay.techStack.map((tech, i) => (
          <li>
            <Link key={i} to={`/tech/${tech.slug}`}>
              <img src={tech.image} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
