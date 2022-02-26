import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../../db.json";

function Home() {
  const [users, setusers] = useState(db);

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index} >
                  <th scope="row">{index+1} </th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email  }</td>
                  <td >
                  <Link className="btn btn-primary me-4" to='#'>View</Link>
                  <Link className="btn btn-outline-primary me-4" to='#'>Edit</Link>
                  <Link className="btn btn-danger" to='#'>Delete</Link>
                  
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
