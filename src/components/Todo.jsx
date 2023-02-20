import React, { useState } from "react";
import Swal from "sweetalert2";
import DataFetch from "./DataFetch";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [print, setPrint] = useState("");
  const [test, setTest] = useState("");

  const categories = [
    "posts",
    "comments",
    "albums",
    "photos",
    "todos",
    "users",
  ];
  const myFunction = () => {
    if (inputValue === "") {
      Swal.fire({
        title: "ERROR",
        text: "Please enter a value.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    if (!categories.includes(inputValue)) {
      Swal.fire({
        title: "ERROR",
        text: `There is no "${inputValue}" category in our database.`,
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    Swal.fire({
      title: "Loading...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      if (categories.includes(inputValue)) {
        setTest(inputValue);
        setPrint(inputValue);
      }
    });
  };
  return (
    <div className="home">
      <div className="d-flex border  ">
        <div className=" border border-right w-25 p-2 bg-light">
          {" "}
          <label>
            Type Category: <code>(MAX 20 characters)</code>{" "}
          </label>
          <div className="input-icon">
            {" "}
            <input
              className="form-control  my-3"
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value.slice(0, 16));
              }}
            />
            <i
              className="trash-icon fa fa-trash-o"
              onClick={() => setInputValue("")}
            ></i>
          </div>
          <button
            className="bg-success text-white border border-none rounded p-2  w-100"
            onClick={myFunction}
          >
            Submit
          </button>
          <p className=" mt-2 p-2 bg-warning ">
            Note: You can access only these categories:{" "}
            <strong>posts, comments, albums, photos, todos, users</strong>.
          </p>
          <p>You typed: {inputValue}</p>
        </div>
        <div className="w-75">
          {" "}
          <DataFetch test={test} print={print} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
