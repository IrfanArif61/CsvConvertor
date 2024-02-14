import React from "react";
import "./Add.scss";
import { useState } from "react";

const Add = ({ columns, setOpen, setName, setPass, handleSubmit }) => {
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add New Record</h1>
        <form onSubmit={handleSubmit}>
          {/* {columns
            .filter((item) => item.field !== "id")
            .map((column) => (
               */}
          <div className="item">
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="item">
            <label>Password</label>
            <input
              type="text"
              placeholder="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          {/* ))} */}
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
