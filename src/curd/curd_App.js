import React, { useState } from "react";

const CrudExample = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCreate = () => {
    setData([...data, inputValue]);
    setInputValue("");
  };

  const handleUpdate = (index) => {
    const updatedData = [...data];
    updatedData[index] = inputValue;
    setData(updatedData);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter data"
      />
      <button onClick={handleCreate}>Create</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleUpdate(index)}>Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudExample;
