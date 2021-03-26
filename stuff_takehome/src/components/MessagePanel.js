import React, { useState } from "react"

export default function MessagePanel() {
    const [message, setMessage] = useState("")

    return(
        <div>
            <h1>New Task</h1>
            <input 
                placeholder="Type a Message"
            />
        </div>
    )
}