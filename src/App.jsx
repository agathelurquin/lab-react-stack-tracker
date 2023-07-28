import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import companiesJson from "./companies.json";
import technologiesJson from "./technologies.json";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesJson);
  const [technologies, setTechnologies] = useState(technologiesJson);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />}>
          <Route
            path="/company/:companySlug"
            element={<CompanyPage companies={companies} />}
          ></Route>
        </Route>
        <Route path="/tech/:slug" element={<TechnologyPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
