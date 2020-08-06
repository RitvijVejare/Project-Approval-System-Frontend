import React from "react";
import axios from "axios";
import qs from "qs";
import SERVER_URL from "./URL";

const VerifyLogin = () => {
  const getUser = () => {
    console.log("entered Getuser");
    axios({
      method: "get",
      url: SERVER_URL + "/user",
      withCredentials: true
    })
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={getUser}>GET DATA</button>
    </div>
  );
};

export default VerifyLogin;
