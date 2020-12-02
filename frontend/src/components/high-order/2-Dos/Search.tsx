import React from "react";
import iconArrow from "./img/icon-arrow.svg";
import iconError from "./img/icon-error.svg";

function Search() {
  return (
    <form className="form">
      <input className="email" type="email" placeholder="Email Address" />
      <img className="error-icon" src={iconError} alt="error" />

      <button>
        <img src={iconArrow} alt="arrow" />
      </button>
      <small>Please provide a valid email</small>
    </form>
  );
}

export default Search;
