import React from "react";
import { saveAs } from "file-saver";
import styled from "styled-components";

const Button = styled.button`
  width: 30%;
  margin-top: 4em;
  margin-left: 1em;
  padding: 1em;
  background-color: brown;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  gap: 20px;
`;

const CsvBtn = ({ data }) => {
  const handleDownload = () => {
    const csvHeader = Object.keys(data[0]).join(",");

    const csvData = data
      .map((item) =>
        Object.values(item)
          .map((val) => JSON.stringify(val))
          .join(",")
      )
      .join("\n");

    const csvBlob = new Blob([csvHeader, "\n", csvData], { type: "text/csv" });
    saveAs(csvBlob, "client_data.csv");
  };

  return <Button onClick={handleDownload}>Download CSV Format Here</Button>;
};

export default CsvBtn;
