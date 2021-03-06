import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";

import InfoProvider from "./context/InfoProvider";

function App() {
  return (
    <>
      <Layout>
        <InfoProvider>
          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="days" element={<Step2 />} />
            <Route path="days/goal" element={<Step3 />} />
            <Route path="days/goal/register" element={<Step4 />} />
            <Route path="days/goal/register/:id" element={<Step5 />} />
          </Routes>
        </InfoProvider>
      </Layout>
    </>
  );
}

export default App;
