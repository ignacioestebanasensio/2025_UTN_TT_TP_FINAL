import React, { useContext, useState } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import "./AddNewMessage.css"

export default function AddNewMessage() {
    const { addNewMessage } = useContext(ContactDetailContext)
    const [messageText, setMessageText] = useState("")

    function handleSendMessage() {
        if (messageText.trim()) {
            addNewMessage(messageText)
            setMessageText("")
        }
    }

    function handleSubmitNewMessage(event) {
        event.preventDefault()
        handleSendMessage()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <div className='new-message-container'>
            <div className='action-icon'>
                {/* Plus Icon */}
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="currentColor" enable-background="new 0 0 24 24"><title>plus</title><path d="M20 11.25H12.75V4h-1.5v7.25H4v1.5h7.25V20h1.5v-7.25H20v-1.5Z"></path></svg>
            </div>

            <form className='form-new-message' onSubmit={handleSubmitNewMessage}>
                {/* Emoji Icon placeholder or actual if needed, putting generic smiley for now */}
                {/* <div className='action-icon' style={{marginRight: 10}}>
                     <svg viewBox="0 0 24 24" height="24" width="24" ...><path .../></svg>
                </div> */}
                <input
                    className='message-input'
                    type="text"
                    placeholder="Type a message"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    // onKeyDown={handleKeyDown} // Optional: Enable enter to send
                    name="mensaje"
                    autoComplete="off"
                />
            </form>

            <div className='action-icon' onClick={handleSendMessage} role="button" tabIndex={0}>
                {/* Send Icon */}
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="currentColor" enable-background="new 0 0 24 24"><title>send</title><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
            </div>
        </div>
    )
}
