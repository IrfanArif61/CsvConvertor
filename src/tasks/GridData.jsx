import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CsvBtn from "./csvButton";
import "./GridData.scss";
import Add from "./Add";
import { useState } from "react";

const GridData = ({ rows, setRows, setName, setPass, handleSubmit }) => {
  const [open, setOpen] = useState(false);

  const columns = [
    { field: "name", type: "string", headerName: "Name", width: 500 },
    {
      field: "phoneNumber",
      type: "string",
      headerName: "Password",
      width: 500,
    },
  ];

  return (
    <>
      <div className="users">
        <div className="info">
          <button className="addNewBtn" onClick={() => setOpen(true)}>
            Add New
          </button>
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          checkboxSelection
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableRowSelectionOnClick
        />
        {open && (
          <Add
            columns={columns}
            setOpen={setOpen}
            setName={setName}
            setPass={setPass}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
      <CsvBtn data={rows} />
    </>
  );
};

export default GridData;
