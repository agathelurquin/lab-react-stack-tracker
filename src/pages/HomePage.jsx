import React from "react";
import { Link, Outlet } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <Outlet />
      <ul>
        {props.companies.map((company) => (
          <Link key={company.id} to={`company/${company.name}`}>
            {company.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
