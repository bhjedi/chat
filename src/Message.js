import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css"

function Message({message,user,timestamp}) {
    return (
        <div className="messages">
            <Avatar src={user.photo} />
            <div className="messages__info">
                <h4>
                   {user.displayName}
                    <span className="messages__timstamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
            
        </div>
    )
}

export default Message

