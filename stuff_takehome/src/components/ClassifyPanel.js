import React, { useState, useEffect } from "react";

import clockLogo from "../assets/clock.png";
import mailLogo from "../assets/mail.png";

export default function ClassifyPanel(props) {
  const [ticket, setTicket] = useState({});

  const [userInput, setUserInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const [count, setCount] = useState(25);

  const [currentSelection, setCurrentSelection] = useState("Select");

  const defaultGoals = [
    "Select",
    "Buy a product",
    "Cancel an account",
    "Buy and Recommend a gift",
    "Ask for the business",
  ];

  const proceed = (event) => {
    event.preventDefault();

    let messageTextField = document.getElementsByClassName("messageInput")[0];
    messageTextField.disabled = false;

    setCurrentSelection("Select");
  };

  const handleButtonChange = (enabled) => {
    if (enabled) {
      let button = document.querySelector("button");
      button.disabled = false;
      document.getElementsByClassName(
        "proceedButton"
      )[0].style.backgroundColor = "#33ccff";
    } else {
      let button = document.querySelector("button");
      button.disabled = false;
      document.getElementsByClassName(
        "proceedButton"
      )[0].style.backgroundColor = "#808080";
    }
  };

  const handleSelection = (event) => {
    props.goalChange(event.target.value);

    setCurrentSelection(event.target.value);
    console.log(event.target.value);

    if (event.target.value !== "Select" && count < 25) {
      handleButtonChange(true);
    }
    if (event.target.value === "Select" || count <= 0 || count >= 25) {
      handleButtonChange(false);
    }
  };

  const manageTaskName = (event) => {
    // setUserInput(event.target.value)
    // userInput.length()
    setCount(25 - event.target.value.length);
    setUserInput(event.target.value);

    conditionalRenderColor();

    console.log(count);

    if (currentSelection !== "Select" && count < 25) {
      handleButtonChange(true);
    }
    if (currentSelection === "Select" || count <= 0 || count >= 25) {
      handleButtonChange(false);
    }
  };

  const handleMessageInput = (event) => {
    event.preventDefault();
    setMessageInput(event.target.value);
    console.log(messageInput, "just input");
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    setMessageInput("");
    console.log(messageInput);
  };

  useEffect(() => {
    let button = document.querySelector("button");
    button.disabled = true;
    document.getElementsByClassName("proceedButton")[0].style.backgroundColor =
      "#808080";

    let messageTextField = document.getElementsByClassName("messageInput")[0];
    messageTextField.disabled = true;

    props.goalChange("Select");
    const foundTicket = props.tickets.find((ticket) => {
      return ticket._id === props.match.params.id;
    });

    setTicket(foundTicket);
    console.log(foundTicket);
  }, [props.match.params.id]);

  const conditionalRenderColor = () => {
    if (count < 0) {
      document.getElementsByClassName("characterCount")[0].style.color =
        "#fc0000";
    } else {
      document.getElementsByClassName("characterCount")[0].style.color =
        "#808080";
    }
  };

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

            <p className="taskEntryPrompt">Ticket name as shown to the user</p>
            <input
              placeholder="Enter Ticket Name"
              className="taskNameEntry"
              onChange={manageTaskName}
            />
            {conditionalRenderColor}

            <p className="characterCounterContainer">
              (Characters Left:
              <span className="characterCount">{count}</span>)
            </p>
          </div>

          <button className="proceedButton" onClick={proceed}>
            Proceed
          </button>
        </div>
      </div>

      <div className="messageContainer">
        <div className="messagePanelHead">
          <div className="ticketHeading">
            <h1>{userInput.length === 0 ? ticket.Title : userInput}</h1>
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
          <p>I'd like to do something, (first message in a ticket)</p>
        </div>

        <div className="subHeading">
          <span className="subHeadingCircle"></span>
          <p>Larry Simiyu 11:42 am via [Via Email] </p>
        </div>
        <form className="messageSubmitionPoperties"             onSubmit={handleMessageSubmit}
>
          <input
            placeholder="Type a message"
            onChange={handleMessageInput}
            className="messageInput"
          />
          <button
            type="submit"
            className="submitButton"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
