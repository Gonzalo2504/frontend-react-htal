import React, { useState, useEffect } from "react";
import ComplexNavbar from "../components/nav";
import TabsDefault from "../components/pestañas";
import dataAdmin from "../data/adminData";

export default function AdminDashboard() {
  return (
    <div>
      <ComplexNavbar />
      <TabsDefault data={dataAdmin} />
    </div>
  );
}