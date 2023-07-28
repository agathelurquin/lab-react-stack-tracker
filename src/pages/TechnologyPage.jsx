import React from "react";
import { Link, useParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const params = useParams();
  let techToDisplay = technologies.find(
    (technology) => technology.slug === params.techSlug
  );
  console.log(techToDisplay);
  return (
    <div>
      <h1>{techToDisplay.slug} Details</h1>
      <img src={techToDisplay.image} alt="" />
      <p>About {techToDisplay.slug}:</p>
      <p>{techToDisplay.description}</p>
    </div>
  );
}

export default TechnologyPage;
