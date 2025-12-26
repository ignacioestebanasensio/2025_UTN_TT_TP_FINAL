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
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="currentColor" enable-background="new 0 0 24 24"><title>plus</title><path d="M20 11.25H12.75V4h-1.5v7.25H4v1.5h7.25V20h1.5v-7.25H20v-1.5Z"></path></svg>
            </div>

            <form className='form-new-message' onSubmit={handleSubmitNewMessage}>
                <input
                    className='message-input'
                    type="text"
                    placeholder="Type a message"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    name="mensaje"
                    autoComplete="off"
                />
            </form>

            <div className='send-icon' onClick={handleSendMessage} role="button" tabIndex={0}>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>wds-ic-send-filled</title><path d="M5.4 19.425C5.06667 19.5583 4.75 19.5291 4.45 19.3375C4.15 19.1458 4 18.8666 4 18.5V14L12 12L4 9.99997V5.49997C4 5.1333 4.15 4.85414 4.45 4.66247C4.75 4.4708 5.06667 4.44164 5.4 4.57497L20.8 11.075C21.2167 11.2583 21.425 11.5666 21.425 12C21.425 12.4333 21.2167 12.7416 20.8 12.925L5.4 19.425Z" fill="currentColor"></path></svg>
            </div>
        </div>
    )
}