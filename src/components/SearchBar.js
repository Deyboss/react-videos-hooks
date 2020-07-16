import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    // make sure we call callback from parent component
    props.onFormSubmit(term);
  };

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search:</label>
          <input onChange={onInputChange} type="text" value={term} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
