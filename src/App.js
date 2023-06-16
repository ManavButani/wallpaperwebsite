import React, { useState, useEffect } from 'react'
import { Card, Col, Row } from 'antd'
import "./App.css"

const App = () => {
  let [note, setNote] =useState("")
  let [priority, setPriority] = useState(0)
  let [stage, setStage]= useState({})
  let [task, setTask]= useState([])

  useEffect(() => {
    console.log(task);
  }, [task]);

  const manageInput = () => {
    const newStage = {
      name: note,
      priority: priority,
    };
    setStage(newStage);

    setTask((prev) => {
      const updatedTask = prev ? [...prev, newStage] : [newStage];
      return updatedTask;
    });
  };

  const handleDelete = (value) => {
    setTask((prev) => {
      const updatedTask = [...prev];
      updatedTask.splice(value, 1);
      return updatedTask;
    });
  };

  console.log(stage, task);
  return (
    <>
      <center>
        <h1>Task App</h1>
        <input
          type="text"
          name="todo"
          id=""
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        <button type="submit" onClick={manageInput}>
          Add
        </button>


        <Card>
          <ul>
            {task.map((val, index) => (
              <Card key={index} className="insider">
                {val.name}
                <button value={index} onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </Card>
            ))}
          </ul>
        </Card>
      </center>
    </>
  );
}

export default App