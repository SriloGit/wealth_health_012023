import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Datatable from "../components/datatable";
import logo from "../assets/logo.jpg"

function EmployeesList() {
  useEffect(() => {
    document.title = "HRnet - Current Employees";
  }, []);

  const employeesList = useSelector((state) => state.employees);
  return (
    <main>
      <div className="title">
    <img
    className="main-logo-image"
    src={logo}
    alt="Wealth Health Logo"
  />
    <h1>Current Employees</h1>
  </div>
      <div id="employee-div" className="container">
        <table id="employee-table" className="display"></table>
        {employeesList.length > 0 && <Datatable rows={employeesList} />}
        <br />
        <br />
        <br />
        <br />
        <NavLink to="/">Home</NavLink>
      </div>
    </main>
  );
}

export default EmployeesList;