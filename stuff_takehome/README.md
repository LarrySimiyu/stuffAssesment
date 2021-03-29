# Ticketing System Instructions

    Create Left Panel
        [] Left panel contains tickets that are assigned to user
        [] Clicking on ticket allows you to view it
        [] Black ticket is the one the user is currently working on
        [] Ticket with red dot is the ticket that has a new message
        [] Ticket with a yellow dot is the one you snoozed
        
        Ticket: {
            _id: ”​5cdb6454107a752e479349f9”, 
            Title: ”New Task”,
            Assignee: ”Razan Kiwan”,
            Status: ”New”,
            Goal: ”Buy a product” 
            }

    Gray Panel (Classify Panel)
        [] User has to give a name to that ticket from the provided text field
        [] Text field has to have character counter beneath it
        [] The number of maximum characters is 25
        [] While typing in text field character counter will start going down by the current text length
        [] If counter is less that 0, view it as a negative number with red color
        [] If counter is less than 0 disable proceed button
        [] Proceed button will be enabled just if there is a selected GOAL from list and text inside the input
        [] Title and goal fields have to be stored in the relevant object attributes 


    White Panel
        [] Disable conversation box at first
        [] Only enable conversation box after saving the GOAL and TITLE of the ticket
        [] when you press on the enabled conversation box, englarge to appropriate size
        [] Clicking send should remove the text from conversation input

    [x] Goals list should have following options
        Buy a product
        Cancel an account
        Buy and Recommend a gift
        Ask for the business





