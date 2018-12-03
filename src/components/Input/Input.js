import React from "react";

const Input = ({ value, setInput, submit }) => {
  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = e => {
    if (e.key === "Enter") {
      submit(value);
      setInput("");
    }
  };
  return (
    <input
      type="text"
      placeholder="add list"
      value={value}
      onChange={handleChange}
      onKeyPress={handleSubmit}
    />
  );
};

export default Input;
