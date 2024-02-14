import Papa from "papaparse";
import React, { useState } from "react";
import GridData from "./tasks/GridData";
import "./App.scss";

function App() {
  const [rows, setRows] = useState([]);
  const [Name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    let bulk = [];

    if (files) {
      Papa.parse(files[0], {
        complete: function (results) {
          if (results.data.length > 201) {
            // toast.error("File exceeds the maximum allowed rows (200).");
            return;
          }
          bulk = results.data.map((site, index) => ({
            id: index + 1,
            name: site[0],
            phoneNumber: site[1],
          }));
          setRows(bulk);
        },
      });
    }
    e.target.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRows((res) => [...res, { id: 100, name: Name, phoneNumber: pass }]);
  };

  return (
    <>
      <GridData
        rows={rows}
        setName={setName}
        setPass={setPass}
        handleSubmit={handleSubmit}
      />
      <button className="UploadBtn">
        <input className="uploadIn" type="file" onChange={handleFileUpload} />
      </button>
    </>
  );
}

export default App;
