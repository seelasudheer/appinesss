import React from "react";
import "./dashboard.css";
import { useSelector } from "react-redux";
function Dashboard() {
  const state = useSelector((state) => state);
  let {
    employeeList: { user },
  } = state;
  return (
    <div className="list">
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>PHONENO</th>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.map((x) => {
              return (
                <tr key={x.id}>
                  <th>{x.id}</th>
                  <th>{x.name}</th>
                  <th>{x.age}</th>
                  <th>{x.gender}</th>
                  <th>{x.email}</th>
                  <th>{x.phoneNo}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default Dashboard;
