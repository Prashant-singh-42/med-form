import React, { useEffect, useState } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../App.css";

function EditRecord(props) {
  const [getPdf, setGetPdf] = useState(true);

  const [formData, setFormData] = useState({
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
  const [url, setUrl] = useState(
    "https://script.google.com/macros/s/AKfycbzsLrukKDQcvRu4J1SzrD5M7cyyftPF7YVjsxef5d996V3B9Px4cxnNFZx0a0yeUVEA/exec?type=patch&id=0"
  );

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    setFormData(props.person);
    setUrl(
      `https://script.google.com/macros/s/AKfycbzsLrukKDQcvRu4J1SzrD5M7cyyftPF7YVjsxef5d996V3B9Px4cxnNFZx0a0yeUVEA/exec?type=patch&id=${props.person.id}`
    );
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch(url, {
      redirect: "follow",
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    })
      .then((data) => {
        // The response comes here
        console.log(data);
        props.setRecord(formData);
        if (data.ok) {
          setGetPdf(false);
        }
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  };

  return (
    <Container fluid className="container-m">
      <Header as="h2">Edit Records</Header>
      <Form className="form" onSubmit={submitHandler}>
        
      <Form.Field>
          <label>Name</label>
          <input
            placeholder="Enter Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Age & Sex</label>
          <input
            placeholder="Enter Age & Sex"
            type="text"
            name="age"
            value={formData.age}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Examination Required</label>
          <input
            placeholder="Enter Examination Required"
            type="text"
            name="examination"
            value={formData.examination}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Reffered By</label>
          <input
            placeholder="Enter Reffered By"
            type="text"
            name="reffered"
            value={formData.reffered}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Date</label>
          <input
            placeholder="Enter Date"
            type="text"
            name="date"
            value={formData.date}
            onChange={changeHandler}
          />
        </Form.Field>
    

        
      <Form.Field>
          <label>Blood Glucose (F)</label>
          <input
            placeholder="Enter Blood Glucose (F)"
            type="text"
            name="Glucose_F"
            value={formData.Glucose_F}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Blood Glucose (PP)</label>
          <input
            placeholder="Enter Blood Glucose (PP)"
            type="text"
            name="Glucose_PP"
            value={formData.Glucose_PP}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Blood Glucose (Random)</label>
          <input
            placeholder="Enter Blood Glucose (Random)"
            type="text"
            name="Glucose_Ran"
            value={formData.Glucose_Ran}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Blood Urea</label>
          <input
            placeholder="Enter Blood Urea"
            type="text"
            name="urea"
            value={formData.urea}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Blood Urea Nitrogen (BUN)</label>
          <input
            placeholder="Enter Blood Urea Nitrogen (BUN)"
            type="text"
            name="ureaNitrogen"
            value={formData.ureaNitrogen}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Serum Creatine</label>
          <input
            placeholder="Enter Serum Creatine"
            type="text"
            name="creatinine"
            value={formData.creatinine}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Serum Uric Acid</label>
          <input
            placeholder="Enter Serum Uric Acid"
            type="text"
            name="uricAcid"
            value={formData.uricAcid}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S. Total Lipids</label>
          <input
            placeholder="Enter S. Total Lipids"
            type="text"
            name="Lipids"
            value={formData.Lipids}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S. Total Cholesterol</label>
          <input
            placeholder="Enter S. Total Cholesterol"
            type="text"
            name="Cholesterol"
            value={formData.Cholesterol}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S. HDL Cholesterol</label>
          <input
            placeholder="Enter S. HDL Cholesterol"
            type="text"
            name="HDLCholesterol"
            value={formData.HDLCholesterol}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S. LDL Cholesterol</label>
          <input
            placeholder="Enter S. LDL Cholesterol"
            type="text"
            name="LDLCholestersol"
            value={formData.LDLCholestersol}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S. VLDL Cholesterol</label>
          <input
            placeholder="Enter S. VLDL Cholesterol"
            type="text"
            name="VLDLCholesterol"
            value={formData.VLDLCholesterol}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Serum Triglycerides</label>
          <input
            placeholder="Enter Serum Triglycerides"
            type="text"
            name="triglycerides"
            value={formData.triglycerides}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Serum Bilirubin Total</label>
          <input
            placeholder="Enter Serum Bilirubin Total"
            type="text"
            name="BilirubinTotal"
            value={formData.BilirubinTotal}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Serum Bilirubin Direct</label>
          <input
            placeholder="Enter Serum Bilirubin Direct"
            type="text"
            name="BilirubinDirect"
            value={formData.BilirubinDirect}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Serum Bilirubin Indirect</label>
          <input
            placeholder="Enter Serum Bilirubin Indirect"
            type="text"
            name="BilirubinInDirect"
            value={formData.BilirubinInDirect}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Serum Alkaline Phosphate</label>
          <input
            placeholder="Enter Serum Alkaline Phosphate"
            type="text"
            name="AlkalinePhosphate"
            value={formData.AlkalinePhosphate}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S.G.O.T</label>
          <input
            placeholder="Enter S.G.O.T"
            type="text"
            name="SGOT"
            value={formData.SGOT}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S.G.P.T</label>
          <input
            placeholder="Enter S.G.P.T"
            type="text"
            name="SGPT"
            value={formData.SGPT}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Serum Total Protein</label>
          <input
            placeholder="Enter Serum Total Protein"
            type="text"
            name="protein"
            value={formData.protein}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Serum Albumin</label>
          <input
            placeholder="Enter Serum Albumin"
            type="text"
            name="albumin"
            value={formData.albumin}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Serum Globulin</label>
          <input
            placeholder="Enter Serum Globulin"
            type="text"
            name="globulin"
            value={formData.globulin}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>A.G Ratio</label>
          <input
            placeholder="Enter A.G Ratio"
            type="text"
            name="AGratio"
            value={formData.AGratio}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Serum Acid Phosphate (Total) </label>
          <input
            placeholder="Enter Serum Acid Phosphate (Total) "
            type="text"
            name="acidPhosphate"
            value={formData.acidPhosphate}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Lactate Dehydrogenase (LDH)</label>
          <input
            placeholder="Enter Lactate Dehydrogenase (LDH)"
            type="text"
            name="lactate"
            value={formData.lactate}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S. Amylase</label>
          <input
            placeholder="Enter S. Amylase"
            type="text"
            name="sAmylase"
            value={formData.sAmylase}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S. Phosphorus</label>
          <input
            placeholder="Enter S. Phosphorus"
            type="text"
            name="sPhosphorus"
            value={formData.sPhosphorus}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Calcium</label>
          <input
            placeholder="Enter Calcium"
            type="text"
            name="Calcium"
            value={formData.Calcium}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S. Sodium (Na+)</label>
          <input
            placeholder="Enter S. Sodium (Na+)"
            type="text"
            name="SSodium"
            value={formData.SSodium}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S. Potassium (K+)</label>
          <input
            placeholder="Enter S. Potassium (K+)"
            type="text"
            name="SPotassium"
            value={formData.SPotassium}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>S. Chloride (Cl-)</label>
          <input
            placeholder="Enter S. Chloride (Cl-)"
            type="text"
            name="sChloride"
            value={formData.sChloride}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Bicarbonate (HCO3-)</label>
          <input
            placeholder="Enter Bicarbonate (HCO3-)"
            type="text"
            name="Bicarbonate"
            value={formData.Bicarbonate}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Rheumatoid Factor (R.F)</label>
          <input
            placeholder="Enter Rheumatoid Factor (R.F)"
            type="text"
            name="RheumatoidFactor"
            value={formData.RheumatoidFactor}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>C. Reactive Protein</label>
          <input
            placeholder="Enter C. Reactive Protein"
            type="text"
            name="ReactiveProtein"
            value={formData.ReactiveProtein}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>VDRL</label>
          <input
            placeholder="Enter VDRL"
            type="text"
            name="VDRL"
            value={formData.VDRL}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>PPD Test (Montoux Test) After 72 Hrs</label>
          <input
            placeholder="Enter PPD Test (Montoux Test) After 72 Hrs"
            type="text"
            name="PPD"
            value={formData.PPD}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>HCV Antibodies Test</label>
          <input
            placeholder="Enter HCV Antibodies Test"
            type="text"
            name="HCVAnti"
            value={formData.HCVAnti}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>HBsAG (Australia Antigen) Card Test</label>
          <input
            placeholder="Enter HBsAG (Australia Antigen) Card Test"
            type="text"
            name="HBsAGCard"
            value={formData.HBsAGCard}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>HIV 1 & 2</label>
          <input
            placeholder="Enter HIV 1 & 2"
            type="text"
            name="HIV"
            value={formData.HIV}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Antistrepto Lysin "O" titre (ASO)</label>
          <input
            placeholder='Enter Antistrepto Lysin "O" titre (ASO)'
            type="text"
            name="ASO"
            value={formData.ASO}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Coombs Test (Direct/Indirect)</label>
          <input
            placeholder="Enter Coombs Test (Direct/Indirect)"
            type="text"
            name="OmbsTest"
            value={formData.OmbsTest}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Prothrombin Time</label>
          <input
            placeholder="Enter Prothrombin Time"
            type="text"
            name="prothrombine"
            value={formData.prothrombine}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Rh Antibody Time</label>
          <input
            placeholder="Enter Rh Antibody Time"
            type="text"
            name="Antiody"
            value={formData.Antiody}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Aldehyde Test (Kala-Azar)</label>
          <input
            placeholder="Enter Aldehyde Test (Kala-Azar)"
            type="text"
            name="AldehydeTest"
            value={formData.AldehydeTest}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>ABO</label>
          <input
            placeholder="Enter ABO"
            type="text"
            name="ABO"
            value={formData.ABO}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>RH</label>
          <input
            placeholder="Enter RH"
            type="text"
            name="Rh"
            value={formData.Rh}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Rapid Typhi dot Test (lgF, IGM)</label>
          <input
            placeholder="Enter Rapid Typhi dot Test (lgF, IGM)"
            type="text"
            name="RaphidTyphi"
            value={formData.RaphidTyphi}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Rapid TB Test (One Step Tuberculosis Test - lgF, lgM)</label>
          <input
            placeholder="Enter Rapid TB Test (One Step Tuberculosis Test - lgF, lgM)"
            type="text"
            name="RapidTBTest"
            value={formData.RapidTBTest}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>ZN Stain for AFB</label>
          <input
            placeholder="Enter ZN Stain for AFB"
            type="text"
            name="ZMStain"
            value={formData.ZMStain}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>ZN Stain for Lepra Bacilli</label>
          <input
            placeholder="Enter ZN Stain for Lepra Bacilli"
            type="text"
            name="ZHStain"
            value={formData.ZHStain}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>Gravindex Test</label>
          <input
            placeholder="Enter Gravindex Test"
            type="text"
            name="GravindexTest"
            value={formData.GravindexTest}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>By Strip</label>
          <input
            placeholder="Enter By Strip"
            type="text"
            name="ByStrip"
            value={formData.ByStrip}
            onChange={changeHandler}
          />
        </Form.Field>
    
      <Form.Field>
          <label>By Card</label>
          <input
            placeholder="Enter By Card"
            type="text"
            name="Bycard"
            value={formData.Bycard}
            onChange={changeHandler}
          />
        </Form.Field>
    

        <Form.Field>
          <label>typhiO20</label>
          <input
            placeholder="Enter typhiO20"
            type="text"
            name="typhiO20"
            value={formData.typhiO20}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>typhiO40</label>
          <input
            placeholder="Enter typhiO40"
            type="text"
            name="typhiO40"
            value={formData.typhiO40}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>typhiO80</label>
          <input
            placeholder="Enter typhiO80"
            type="text"
            name="typhiO80"
            value={formData.typhiO80}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>typhiO160</label>
          <input
            placeholder="Enter typhiO160"
            type="text"
            name="typhiO160"
            value={formData.typhiO160}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>typhiO320</label>
          <input
            placeholder="Enter typhiO320"
            type="text"
            name="typhiO320"
            value={formData.typhiO320}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>typhiO640</label>
          <input
            placeholder="Enter typhiO640"
            type="text"
            name="typhiO640"
            value={formData.typhiO640}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>typhiH20</label>
          <input
            placeholder="Enter typhiH20"
            type="text"
            name="typhiH20"
            value={formData.typhiH20}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>typhiH40</label>
          <input
            placeholder="Enter typhiH40"
            type="text"
            name="typhiH40"
            value={formData.typhiH40}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>typhiH80</label>
          <input
            placeholder="Enter typhiH80"
            type="text"
            name="typhiH80"
            value={formData.typhiH80}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>typhiH160</label>
          <input
            placeholder="Enter typhiH160"
            type="text"
            name="typhiH160"
            value={formData.typhiH160}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>typhiH320</label>
          <input
            placeholder="Enter typhiH320"
            type="text"
            name="typhiH320"
            value={formData.typhiH320}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>typhiH640</label>
          <input
            placeholder="Enter typhiH640"
            type="text"
            name="typhiH640"
            value={formData.typhiH640}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiAH20</label>
          <input
            placeholder="Enter paraTyphiAH20"
            type="text"
            name="paraTyphiAH20"
            value={formData.paraTyphiAH20}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiAH40</label>
          <input
            placeholder="Enter paraTyphiAH40"
            type="text"
            name="paraTyphiAH40"
            value={formData.paraTyphiAH40}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiAH80</label>
          <input
            placeholder="Enter paraTyphiAH80"
            type="text"
            name="paraTyphiAH80"
            value={formData.paraTyphiAH80}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiAH160</label>
          <input
            placeholder="Enter paraTyphiAH160"
            type="text"
            name="paraTyphiAH160"
            value={formData.paraTyphiAH160}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiAH320</label>
          <input
            placeholder="Enter paraTyphiAH320"
            type="text"
            name="paraTyphiAH320"
            value={formData.paraTyphiAH320}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiAH640</label>
          <input
            placeholder="Enter paraTyphiAH640"
            type="text"
            name="paraTyphiAH640"
            value={formData.paraTyphiAH640}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiBH20</label>
          <input
            placeholder="Enter paraTyphiBH20"
            type="text"
            name="paraTyphiBH20"
            value={formData.paraTyphiBH20}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiBH40</label>
          <input
            placeholder="Enter paraTyphiBH40"
            type="text"
            name="paraTyphiBH40"
            value={formData.paraTyphiBH40}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiBH80</label>
          <input
            placeholder="Enter paraTyphiBH80"
            type="text"
            name="paraTyphiBH80"
            value={formData.paraTyphiBH80}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiBH160</label>
          <input
            placeholder="Enter paraTyphiBH160"
            type="text"
            name="paraTyphiBH160"
            value={formData.paraTyphiBH160}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiBH320</label>
          <input
            placeholder="Enter paraTyphiBH320"
            type="text"
            name="paraTyphiBH320"
            value={formData.paraTyphiBH320}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>paraTyphiBH640</label>
          <input
            placeholder="Enter paraTyphiBH640"
            type="text"
            name="paraTyphiBH640"
            value={formData.paraTyphiBH640}
            onChange={changeHandler}
          />
        </Form.Field>

        <Button style={{ marginBottom: "10px" }} color="blue" type="submit">
          Submit
        </Button>
      </Form>

      <Button color="blue" disabled={getPdf}>
        <Link to={"/pdf"} style={{ color: "white" }}>
          Get PDF
        </Link>
      </Button>
    </Container>
  );
}

export default EditRecord;
