import React, { useState } from "react";
import db from '../../db.json'
import {useHistory} from 'react-router-dom'
import home from "../pages/Home";

function AddUSer() {
    let history=useHistory()
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const onInput = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const submitUser=(event)=>{
    event.preventDefault();
    db.push(user)
    history.push('/home')


  }
  return (
    <div className="container">
      <h1>Add User</h1>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6  border shadow mt-4">
          <form className="m-5" onSubmit={(e)=>submitUser(e)}>
            <div className="form-group mb-3 mt-3" >
              <input
                type="text"
                className="form-control from-control-lg"
                name="name"
                value={user.name}
                placeholder="Enter Your Name"
                onChange={(e) => onInput(e)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control from-control-lg"
                name="username"
                placeholder="Enter Your Username"
                value={user.username}
                onChange={(e) => onInput(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control from-control-lg"
                name="email"
                placeholder="Enter Your Email"
                value={user.email}
                onChange={(e) => onInput(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control from-control-lg"
                name="phone"
                placeholder="Enter Your Phone Number "
                value={user.phone}
                onChange={(e) => onInput(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control from-control-lg"
                name="website"
                placeholder="Enter Your Website Name"
                value={user.website}
                onChange={(e) => onInput(e)}
              />
            </div>

            <button type="submit"  className="btn btn-primary btn-block" > To Home</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUSer;
