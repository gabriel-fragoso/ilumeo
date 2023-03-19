import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Point } from "./Pages/Point";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/point" element={<Point />} />
    </Routes>
  );
}
