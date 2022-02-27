import axios from "axios";
import React from "react";
import { useState } from "react";

import { useHistory} from 'react-router-dom'

function Adduser() {
  let history=useHistory()
  const [user, setusers] = useState({
    name: "",
    username: "",
    email: "",
    phone:"",
    website:""
  });

  const {name,username,email,phone,website}=user
  const onInputChange=(e)=>{
    console.log(e.target.value)
setusers({...user,[e.target.name]:e.target.value})
  }
const Onsubmit=async(e)=>{
  e.preventDefault()
await axios.post('http://localhost:3001/users',user)
history.push('/home')

}

  return (
      <div className="container ">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 ">
          <form className=" border-shadow m-5 " onSubmit={(e)=>Onsubmit(e)}>
            <div className="form-group mb-4">
              <input
                type="text"
                name="name"
                value={name}
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                onChange={(e)=>onInputChange(e)}
              />
            </div>

            <div className="form-group mb-4">
              <input
                type="text"
                name="username"
                value={username}
                className="form-control form-control-lg"
                placeholder="Enter Your  Username"
                onChange={(e)=>onInputChange(e)}

              />
            </div>

            <div className="form-group mb-4">
              <input
                type="email"
                name="email"
                value={email}
                className="form-control form-control-lg"
                placeholder="Enter Your Email"
                onChange={(e)=>onInputChange(e)}

              />
            </div>

            <div className="form-group mb-4">
              <input
                type="text"
                name="phone"
                value={phone}
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                onChange={(e)=>onInputChange(e)}

              />
            </div>

            <div className="form-group mb-4">
              <input
                type="text"
                name="website"
                value={website}
                className="form-control form-control-lg"
                placeholder="Enter Your Website"
                onChange={(e)=>onInputChange(e)}

              />
            </div>
            <button className="btn btn-primary btn-block">Add user</button>
          </form>
        </div>

        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default Adduser;
