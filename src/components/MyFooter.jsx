import React from "react";

const MyFooter = () => {
  return (
    <footer
      className="d-flex mt-2"
      style={{ backgroundColor: "rgb(31, 115, 205)" }}
    >
      <span className="text-white m-auto p-2">
        <strong>CosmoBooks</strong> - Copyright {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default MyFooter;
