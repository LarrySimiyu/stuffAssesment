import './App.css';

import React, { useState } from "react"

import ClassifyPanel from './components/ClassifyPanel'
import MessagePanel from './components/MessagePanel'

function App() {

  const [tickets, setTickets] = useState([
    {
      _id: "5cdb6454107a752e479349f9",
      Title: "New Task",
      Assignee: "Razan Kiwan",
      Status: "New",
      Goal: "",
    },

    {
        _id: "505a82ebba044b54b2d0a51",
        Title: "New Task",
        Assignee: "Razan Kiwan",
        Status: "New",
        Goal: "",
      },

      {
        _id: "9c367a64925d48ae91ff648d",
        Title: "New Task",
        Assignee: "Razan Kiwan",
        Status: "New",
        Goal: "",
      },

      {
        _id: "f7e351a4d8ec4d33bdb2523e",
        Title: "New Task",
        Assignee: "Razan Kiwan",
        Status: "New",
        Goal: "",
      },

  ]);


  return (
    <div className="App">
          <h1>Tickets</h1>
          {tickets.map((ticket, index) => (
              <h5>{ticket.Assignee}</h5>
          ))}

          <ClassifyPanel />
          <MessagePanel />  
    </div>
  );
}

export default App;
