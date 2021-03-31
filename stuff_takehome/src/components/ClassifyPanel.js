import React, { useState, useEffect } from "react";

import clockLogo from "../assets/clock.png";
import mailLogo from "../assets/mail.png";

export default function ClassifyPanel(props) {
  const [ticket, setTicket] = useState({});

  const [userInput, setUserInput] = useState("")
  const [count, setCount] = useState(25)

  const defaultGoals = [
    "Select",
    "Buy a product",
    "Cancel an account",
    "Buy and Recommend a gift",
    "Ask for the business",
  ];

  const proceed = (event) => {
    event.preventDefault()

    if(props.selectedGoal !== "Selected" && userInput.length <= 25){
      event.target.disable = false
    } else {
      event.target.disable = true
    }
  }

  const handleSelection = (event) => {
    props.goalChange(event.target.value);
    

    console.log(event.target.value);
  };

  const manageTaskName = event => {
    // setUserInput(event.target.value)
    // userInput.length()
    console.log(event.target.value.length)
    setCount(25 - event.target.value.length)
    setUserInput(event.target.value)

    props.ticketNameHandler(userInput, props.index)
    console.log(userInput)
  }


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

            <p className="taskEntryPrompt">Ticket name as shown to the user</p>
            <input placeholder="Enter Ticket Name" className="taskNameEntry" onChange={manageTaskName} />
            <p className="characterCounter">(Characters Left:  
            
            
            <span className={count.length < 25 ? "negativeCount" : ""}>
            {count}
              </span>
              )</p>
          </div>

          <button className="proceedButton" onClick={proceed}>Proceed</button>


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
          <p>I'd like to do something, (first message in a ticket)</p>
        </div>
        
              <div className="subHeading">
              <span className="subHeadingCircle"></span>
                <p>Larry Simiyu 11:42 am via [Via Email] </p>

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
