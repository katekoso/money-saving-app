import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateGoalPage from "./pages/CreateGoal";
import GoalPage from "./pages/Goal";
import HelpPage from "./pages/Help";
import LoginPage from "./pages/Login";
import SettingsPage from "./pages/Settings";
import TargetPage from "./pages/Target";

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/newtarget" element={<CreateGoalPage />} />
      <Route path="/target/?card=id" element={<GoalPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/target" element={<TargetPage />} />
      <Route />
    </Routes>
  );
};

export default RoutesComponent;
