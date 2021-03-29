import "./App.css";

import React, { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import ClassifyPanel from "./components/ClassifyPanel";

function App() {
  const [tickets, setTickets] = useState([

    {
      _id: "5cdb6454107a752e479349f9",
      Title: "Test 1",
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
    setSelectedGoal(value)

  }

  // map through tickets
  // check for id
  // if there is a match it will change the goal
  // map returns new array 




  return (
    <BrowserRouter>
      <div className="App">
        <h1>Tickets</h1>
        {tickets.map((ticket, index) => {
          return (
            <div>
              <Link to={{ pathname: `/task/${ticket._id}`, state: ticket }}>
                {ticket.Title}
              </Link>
            </div>
          );
        })}
      </div>

      <Route 
        path="/task/:id"
        render={(props) => <ClassifyPanel {...props} goalChange={changeHandler}  />}

      //  component={ClassifyPanel}
        />
    </BrowserRouter>
  );
}

export default App;
