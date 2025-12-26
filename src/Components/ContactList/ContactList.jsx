import React, { useContext } from 'react'

import { Link } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'
import "./ContactList.css"
export default function ContactList() {
    const { loadingContactsState,
        contactState,
    } = useContext(ContactListContext)

    if (loadingContactsState) {
        return (
            <div>
                Cargando contactos...</div>
        )
    }

    if (contactState.length === 0) {
        return (
            <div>No hay contactos...</div>
        )
    }

    return (
        <div className="contact-list-container">
            {contactState.map((contact) => (
                <Link
                    key={contact.contact_id}
                    to={"/chat/" + contact.contact_id + "/messages"}
                    className="contact-item"
                >
                    <div className="avatar-container">
                        <img
                            className="contact-avatar"
                            src={contact.contact_avatar}
                            alt={contact.contact_name}
                        />
                    </div>

                    <div className="contact-info">
                        <div className="contact-header">
                            <h2 className="contact-name">{contact.contact_name}</h2>
                            <span className="last-message-time">
                                {new Date(contact.last_message_created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>

                        <div className="contact-body">
                            <p className="last-message-content">
                                {contact.last_message_state === 'SEEN' && <span className='message-status-icon'><svg viewBox="0 0 18 18" color="blue" height="18" width="18" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg></span>}
                                {contact.last_message_content}
                            </p>
                            {contact.contact_unseen_messages > 0 && (
                                <div className="unseen-badge">
                                    {contact.contact_unseen_messages}
                                </div>
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}