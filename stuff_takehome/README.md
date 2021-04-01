# Instructions
    Install `npm` by running
    Run `npm start` in root project folder

    In `index.js` file, to view TaskComponent change <DatePicker /> to <App />




# Ticketing System Instructions



    Create Left Panel
        [x] Left panel contains tickets that are assigned to user
        [x] Clicking on ticket allows you to view it
        [x] Black ticket is the one the user is currently working on
        [x] Ticket with red dot is the ticket that has a new message
        [x] Ticket with a yellow dot is the one you snoozed
        
        Ticket: {
            _id: ”​5cdb6454107a752e479349f9”, 
            Title: ”New Task”,
            Assignee: ”Razan Kiwan”,
            Status: ”New”,
            Goal: ”Buy a product” 
            }

    Gray Panel (Classify Panel)
        [x] User has to give a name to that ticket from the provided text field
        [x] Text field has to have character counter beneath it
        [x] The number of maximum characters is 25
        [x] While typing in text field character counter will start going down by the current text length
        [x] If counter is less that 0, view it as a negative number with red color
        [x] If counter is less than 0 disable proceed button
        [x] Proceed button will be enabled just if there is a selected GOAL from list and text inside the input
        [x] Title and goal fields have to be stored in the relevant object attributes 


    White Panel
        [x] Disable conversation box at first
        [x] Only enable conversation box after saving the GOAL and TITLE of the ticket
        [x] when you press on the enabled conversation box, englarge to appropriate size
        [x] Clicking send should remove the text from conversation input

    [x] Goals list should have following options
        Buy a product
        Cancel an account
        Buy and Recommend a gift
        Ask for the business





