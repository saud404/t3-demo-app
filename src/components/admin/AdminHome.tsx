import React from "react";
import AdminNavBar from "./AdminNavBar";
import AdminFooter from "./AdminFooter";
import BarChart from "../ٖFleetCharts/BarChart";
import LineChart from "../ٖFleetCharts/LineChart";

const AdminHome = () => {
  return (
    <>
      <AdminNavBar />
      <div className="container mx-auto ">
        <div className="p-4 text-center text-2xl font-bold ">
          <p>Yearly Bookings</p>
        </div>
        <BarChart />
        <div className="p-4 text-center text-2xl font-bold ">
          <p>Yearly Revenue</p>
        </div>
        <LineChart />
      </div>
      <AdminFooter />
    </>
  );
};

export default AdminHome;
