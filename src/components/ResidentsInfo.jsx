import React, { useEffect, useState } from "react";
import axios from "axios";
const ResidentsInfo = ({ url }) => {
  const [residentss, setResidentss] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => setResidentss(res.data));
  }, []);

  console.log(residentss);
  return (
    <div className="container-card">
      <li className="container--img-and-name">
        <img className="img--rick" src={residentss.image} alt="" />
        <div className="and--name">
          <p>
            {" "}
            <b> name:</b> {residentss.name}
          </p>{" "}
          <p>
            {" "}
            <b> status:</b> {residentss.status}
          </p>{" "}
          <p>
            <b> origin-name:</b> {residentss.origin?.name}
          </p>
          <p>
            <b>episode:</b> {residentss.episode?.length}
          </p>
        </div>
      </li>
    </div>
  );
};

export default ResidentsInfo;
