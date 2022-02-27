import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    // console.log(result);
    setUsers(result.data);
    console.log(users);
  };
  const deleteUser=async(id)=>{
    await axios.delete(`http://localhost:3001/users/${id}`)
    loadUsers()
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border-shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index)=>{
                return (
                  <tr key={index}>
                  <th  scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                  <Link className='btn btn-primary me-2' to={`users/view/${user.id}`}> View</Link>
                  <Link className="btn btn-outline-primary me-2" to={`users/edit/${user.id}`}>Edit</Link>
                  <Link className="btn btn-danger" to='#' onClick={()=>deleteUser(user.id)}> Delete</Link>

                  </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
