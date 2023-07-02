import React, { useEffect, useState } from "react";
import Select from "react-select";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import '../styles/Home.css'


function Home(props) {
  const [url, seturl] = useState(
    "https://script.google.com/macros/s/AKfycbzsLrukKDQcvRu4J1SzrD5M7cyyftPF7YVjsxef5d996V3B9Px4cxnNFZx0a0yeUVEA/exec"
  );
  const [options, setOptions] = useState([]);
  const [Record, setRecord] = useState({
    id: "",
    name: "",
    age: "",
    examination: "",
    reffered: "",
    date: "",
    Glucose_F: "",
    Glucose_PP: "",
    Glucose_Ran: "",
    urea: "",
    ureaNitrogen: "",
    creatinine: "",
    uricAcid: "",
    Lipids: "",
    Cholesterol: "",
    HDLCholesterol: "",
    LDLCholestersol: "",
    VLDLCholesterol: "",
    triglycerides: "",
    BilirubinTotal: "",
    BilirubinDirect: "",
    BilirubinInDirect: "",
    AlkalinePhosphate: "",
    SGOT: "",
    SGPT: "",
    protein: "",
    albumin: "",
    globulin: "",
    AGratio: "",
    acidPhosphate: "",
    lactate: "",
    sAmylase: "",
    sPhosphorus: "",
    Calcium: "",
    SSodium: "",
    SPotassium: "",
    sChloride: "",
    Bicarbonate: "",
    RheumatoidFactor: "",
    ReactiveProtein: "",
    VDRL: "",
    PPD: "",
    HCVAnti: "",
    HBsAGCard: "",
    HIV: "",
    ASO: "",
    OmbsTest: "",
    prothrombine: "",
    Antiody: "",
    AldehydeTest: "",
    ABO: "",
    Rh: "",
    typhiO20: "",
    typhiO40: "",
    typhiO80: "",
    typhiO160: "",
    typhiO320: "",
    typhiO640: "",
    typhiH20: "",
    typhiH40: "",
    typhiH80: "",
    typhiH160: "",
    typhiH320: "",
    typhiH640: "",
    paraTyphiAH20: "",
    paraTyphiAH40: "",
    paraTyphiAH80: "",
    paraTyphiAH160: "",
    paraTyphiAH320: "",
    paraTyphiAH640: "",
    paraTyphiBH20: "",
    paraTyphiBH40: "",
    paraTyphiBH80: "",
    paraTyphiBH160: "",
    paraTyphiBH320: "",
    paraTyphiBH640: "",
    RaphidTyphi: "",
    RapidTBTest: "",
    ZMStain: "",
    ZHStain: "",
    GravindexTest: "",
    ByStrip: "",
    Bycard: "",
  });

  const handleChange = (e) => {
    setRecord(e.values);
    // console.log(Record);
  };

  const getRecords = () => {
    fetch(url, {
      redirect: "follow",
      method: "GET",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
        // "Content-Type": "application/json;charset=utf-8"
      },
    })
      .then((d) => d.json())
      .then((data) => {
        // The response comes here
        console.log(data.data);
        setOptions(
          data.data.map((val) => {
            return { values: val, label: val.name };
          })
        );
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  };

  useEffect(() => {
    props.setRecord(Record);
  }, [Record])
  

  return (
    <div className="container-m">
      <div className="item">
        <Button variant="contained" onClick={() => getRecords()}>
          Get Records
        </Button>
      </div>

      <Select
        options={options}
        onChange={(e) => handleChange(e)}
        placeholder="Select Record"
        className="item"
      />

      <div className="item">
        <Link className="play" to={"/edit"}>
          <Button variant="contained">Edit Records</Button>
        </Link>
      </div>

      <div className="item">
        <Link className="play" to={"/add"}>
          <Button variant="contained">Add New Records</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
