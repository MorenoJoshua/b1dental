import React from "react";

const Phone = ({ href, lada, number, icon }) => (
  <a href={href}>
    {icon}
    <span className="phone lada" >({lada})</span>
    <span className="phone number" >{number}</span>
  </a>
);

export default Phone;