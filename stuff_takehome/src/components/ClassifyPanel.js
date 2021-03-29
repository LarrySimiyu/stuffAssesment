import React, { useState, useEffect} from "react";

export default function ClassifyPanel(props) {


  const defaultGoals = [
    "Select",
    "Buy a product",
    "Cancel an account",
    "Buy and Recommend a gift",
    "Ask for the business",
  ];

  const handleSelection = (event) => {
    // props.location.state.setTickets(event.target.value)
    console.log(event.target.value)
    // console.log(props.location.pathname)

    props.goalChange(event.target.value, props.location.state._id)
    console.log(props)
    console.log(props.location.state._id, "chosen")
    


    
  }

  const manageTaskName = (event) => {

  }

  

  // useEffect(() => {
  //   setSelectedGoal("Select")
  // },[])

  // useEffect(() => {
  //   return () => {
  //     setSelectedGoal("Selected")
  //   }
  // })

  return (

    <div>
      <div className="classifyPanel">
        <h1>Classify</h1>

        <p>Whats the user asking for</p>

        <select 
          // onClick={handleSelection} 
          onChange={handleSelection}>
            {defaultGoals.map((goal, index) => {
                return (
                    <option key={index} value={goal}>{goal}</option>
                  
                )
            })}
        </select>

        <p>Task name as shown to the user</p>
        <input placeholder="Enter Task Name" />
      </div>

      <div className="messagePanel">
        <h1>{props.location.state.Title}</h1>

        <input 
          placeholder="Type A Message"
          onChange={manageTaskName}
          />
      </div>
    </div>


  );
}
