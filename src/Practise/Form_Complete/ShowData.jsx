import React from "react";
import './form.css'

const ShowData = ({ name, password,email }) => {
  return (
    <tr>
      <td className="col-md-4 p-2">{name}</td>
      <td className="col-md-4 p-2">{password}</td>
      <td className="col-md-4 p-2">{email}</td>
      
    </tr>
  );
};

export default ShowData;
