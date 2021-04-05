import "./App.scss";
import "./DatePicker.css"

import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import ClassifyPanel from "./components/ClassifyPanel";

function getStatus(status) {
  switch (status) {
    case "New":
      return "redDot";
    case "Snoozed":
      return "yellowDot";

    default:
      throw new Error("invalid status");
  }
}

function App() {
  const [tickets, setTickets] = useState([
    {
      _id: "5cdb6454107a752e479349f9",
      Title: "Ticket 1",
      Assignee: "Razan Kiwan",
      Status: "New",
      Goal: "",
    },

    {
      _id: "505a82ebba044b54b2d0a51",
      Title: "Ticket 2",
      Assignee: "Razan Kiwan",
      Status: "New",
      Goal: "",
    },

    {
      _id: "9c367a64925d48ae91ff648d",
      Title: "Ticket 3",
      Assignee: "Razan Kiwan",
      Status: "New",
      Goal: "",
    },

    {
      _id: "f7e351a4d8ec4d33bdb2523e",
      Title: "Ticket 4",
      Assignee: "Razan Kiwan",
      Status: "Snoozed",
      Goal: "",
    },
  ]);

  const [selectedGoal, setSelectedGoal] = useState("Select");


  

  const changeHandler = (value, id) => {
    setSelectedGoal(value);
  };

  



  return (
    <div className="appContainer">
      <BrowserRouter>
        <div className="taskPanel">
          <div className="roundedImage">
          </div>
          {tickets.map((ticket, index) => {
            return (
              <NavLink
                to={{ pathname: `/task/${ticket._id}`, state: ticket }}
                activeClassName="active"
              >
                <div className="ticket">
                  <div className={`notificaionBadge  ${getStatus(ticket.Status)}`}></div>
                </div>
              </NavLink>
            );
          })}
        </div>
        <Switch>
          {tickets.map((ticket, index) => {
            return (
              <Route
                path="/task/:id"
                render={(props) => (
                  <ClassifyPanel
                    {...props}
                    goalChange={changeHandler}
                    selectedGoal={selectedGoal}
                    tickets={tickets}
                    index={index}
                  />
                )}
              />
            );
          })}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
