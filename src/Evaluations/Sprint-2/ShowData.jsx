import React from "react";

const ShowData = ({ name,rent,id }) => {
  return (
    <tr>
      <td  className="col-md-4 p-2">{name}</td>
      <td  className="col-md-4 p-2">{rent}</td>
      <td  className="col-md-4 p-2">{id}</td>
      
    </tr>
  );
};

export default ShowData;