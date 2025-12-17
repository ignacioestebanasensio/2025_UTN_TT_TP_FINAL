import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import "./MessagesList.css"

const MessagesList = () => {
    const { contactSelected } = useContext(ContactDetailContext)
    return (
        <div className='messages-list-container'>
            {
                contactSelected.messages.map((message) => {
                    const isSentByMe = message.send_by_me
                    return (
                        <div key={message.message_id} className={`message-row ${isSentByMe ? 'sent' : 'received'}`}>
                            <div className='message-bubble'>
                                <div className='message-content-wrapper'>
                                    <p className='message-text'>{message.message_content}</p>
                                    <div className='message-meta'>
                                        <span className='message-time'>
                                            {new Date(message.message_created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                                        </span>
                                        {isSentByMe && (
                                            <span className='message-status'><svg viewBox="0 0 18 18" color="blue" height="18" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                                        </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default MessagesList