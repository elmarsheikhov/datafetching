import React, { useState, useEffect } from "react";
// import Todo from "./Todo";

function DataFetch({ test, print }) {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${test}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [test]);
  let dataValue = ["ALL"];

  if (items.length > 0) {
    dataValue.push(...Object.keys(items[0]));
  }
  // console.log(dataValue);
  return (
    <div className="d-flex mx-2 gap-5">
      <div className="p-3" style={{ fontSize: "10px" }}>
        <h3 className="mx-2 mb-4">
          DATA {print ? <span>- {print}</span> : console.log("print yoxdur")}{" "}
        </h3>

        {dataValue.length > 1
          ? dataValue.map((item) => (
              <button
                className="btn btn-primary mb-4 mx-2 fs-6"
                onClick={() => setValue(item)}
              >
                {item}
              </button>
            ))
          : console.log("dataValue yoxdur, FETCHING GETMEYIB HELE.")}
        {/* ÇAP ALL */}
        {value === "ALL"
          ? items.length > 0
            ? items.map((item, key) => (
                <p className="mx-2 bg-dark text-light p-3 fs-5" key={key}>
                  {JSON.stringify(item)}
                </p>
              ))
            : console.log("in progress")
          : console.log("VALUE ALL DEYIL")}
        {/* ÇAP SPECİAL */}
        {value && value !== "ALL"
          ? items.length > 0
            ? items.map((item, key) => (
                <p className="mx-2" key={key}>
                  {
                    <p className=" fs-5 bg-success text-white p-3">
                      {item[value]}
                    </p>
                  }
                </p>
              ))
            : console.log("in progress")
          : console.log("VALUE SPECIAL DEYIL")}
      </div>
    </div>
  );
}

export default DataFetch;
