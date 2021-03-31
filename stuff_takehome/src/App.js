import "./App.scss";

import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import ClassifyPanel from "./components/ClassifyPanel";

function App() {
  const [tickets, setTickets] = useState([
    {
      _id: "5cdb6454107a752e479349f9",
      Title: "Task 1",
      Assignee: "Razan Kiwan",
      Status: "New",
      Goal: "",
    },

    {
      _id: "505a82ebba044b54b2d0a51",
      Title: "Test 2",
      Assignee: "Razan Kiwan",
      Status: "New",
      Goal: "",
    },

    {
      _id: "9c367a64925d48ae91ff648d",
      Title: "Test 3",
      Assignee: "Razan Kiwan",
      Status: "New",
      Goal: "",
    },

    {
      _id: "f7e351a4d8ec4d33bdb2523e",
      Title: "Test 4",
      Assignee: "Razan Kiwan",
      Status: "New",
      Goal: "",
    },
  ]);

  const [selectedGoal, setSelectedGoal] = useState("Select");

  const changeHandler = (value, id) => {
    setSelectedGoal(value);
  };

  // map through tickets
  // check for id
  // if there is a match it will change the goal
  // map returns new array

  return (
    <div className="appContainer">
      <BrowserRouter>
        

          <div className="taskPanel">
            {tickets.map((ticket, index) => {
              return (
                  <Link to={{ pathname: `/task/${ticket._id}`, state: ticket }}>
                    <div className="ticket"></div>
                  </Link>
              );
            })}
          </div>
          <Switch>
      {tickets.map((ticket) => {
        return <Route
        path="/task/:id"
        render={(props) => (
          
          <ClassifyPanel {...props} goalChange={changeHandler} selectedGoal={selectedGoal} tickets={tickets} />
        )}
      />

      })}
      </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
