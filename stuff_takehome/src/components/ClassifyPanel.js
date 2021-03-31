import React, { useState, useEffect } from "react";

import clockLogo from "../assets/clock.png";
import mailLogo from "../assets/mail.png";

export default function ClassifyPanel(props) {
  const [ticket, setTicket] = useState({});

  const defaultGoals = [
    "Select",
    "Buy a product",
    "Cancel an account",
    "Buy and Recommend a gift",
    "Ask for the business",
  ];

  const handleSelection = (event) => {
    props.goalChange(event.target.value);

    console.log(event.target.value);
  };

  const manageTaskName = (event) => {};

  useEffect(() => {
    props.goalChange("Select");
    const foundTicket = props.tickets.find((ticket) => {
      return ticket._id === props.match.params.id;
    });

    setTicket(foundTicket);
    console.log(foundTicket);
  }, [props.match.params.id]);

  return (
    <div className="tempWrapper">
      <div className="classifyPanelContainer">
        <div className="classifyContentPanel">
          <div className="classifyHeading">
            <h1>Classify</h1>
          </div>

          <div className="classifyInput">
            <p className="goalPickerPrompt">What's the user asking for</p>

            <select
              // onClick={handleSelection}
              onChange={handleSelection}
              value={props.selectedGoal}
              className="dropDownMenu"
            >
              {defaultGoals.map((goal, index) => {
                return <option key={index}>{goal}</option>;
              })}
            </select>

            <p className="taskEntryPrompt">Task name as shown to the user</p>
            <input placeholder="Enter Task Name" className="taskNameEntry" />
            <p className="characterCounter">(Characters Left: 25)</p>
          </div>

          <button className="proceedButton">Proceed</button>
        </div>
      </div>

      <div className="messageContainer">
        <div className="messagePanelHead">
          <div className="ticketHeading">
            <h1>{ticket.Title}</h1>
          </div>

          <div className="headingAssetContainer">
            <p>0:00</p>
            <div className="iconContainer">
              <img src={clockLogo} className="icon clock" />
              <img src={mailLogo} className="icon mail" />
            </div>
          </div>
        </div>
        <div className="firstMessage round">
          <p>I'd like to do something, (first message in a task)</p>
        </div>

          <input
            placeholder="Type a message"
            onChange={manageTaskName}
            className="messageInput"
          />
      </div>
    </div>
  );
}
