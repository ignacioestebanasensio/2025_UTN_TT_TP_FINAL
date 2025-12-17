import React, { useEffect, useState } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import MessagesList from '../../Components/MessagesList/MessagesList'
import AddNewMessage from '../../Components/AddNewMessage/AddNewMessage'
import "./MessagesScreen.css"
import { ContactListContext } from '../../Context/ContactListContext'
export default function MessagesScreen() {
    const {
        contactSelected,
    } = useContext(ContactDetailContext)

    const {loadingContactsState} = useContext(ContactListContext)

    return (
        <div className='messages-screen-container'>
            <ContactSidebar />
            <div className='chat-interface'>
                {
                    loadingContactsState
                        ? <div style={{ color: "white", padding: 20 }}>Cargando...</div>
                        : <>
                            <header className='chat-header'>
                                <div className='header-contact-info'>
                                    <div className='header-avatar-container'>
                                        <img
                                            src={contactSelected.contact_avatar}
                                            alt={contactSelected.contact_name}
                                            className='header-avatar'
                                        />
                                    </div>
                                    <div className='header-text'>
                                        <span className='header-contact-name'>{contactSelected.contact_name}</span>
                                        <span className='header-status-text'>last seen today at 13:34</span>
                                    </div>
                                </div>
                                <div className='header-actions'>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="currentColor" enable-background="new 0 0 24 24"><title>video-call-filled</title><path d="M19.006 3.705a.75.75 0 0 0-.512-.218H2.57c-.413 0-.75.337-.75.75v15.526c0 .414.337.75.75.75h15.924c.414 0 .75-.336.75-.75V3.705Zm-2 15.276H3.32v-14.03h13.686v14.03Zm5.188-12.723-4.188 2.05v7.379l4.188 2.05a.55.55 0 0 0 .548-.029.55.55 0 0 0 .258-.466V6.752a.55.55 0 0 0-.258-.466.55.55 0 0 0-.548-.028Z"></path></svg>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="currentColor" enable-background="new 0 0 24 24"><title>search-alt</title><path d="M10 3c-3.866 0-7 3.134-7 7 0 3.866 3.134 7 7 7 3.866 0 7-3.134 7-7 0-3.866-3.134-7-7-7Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"></path><path d="M17 15.59 20.59 19.17 22 17.76 18.41 14.17 17 15.59Z"></path></svg>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="currentColor" enable-background="new 0 0 24 24"><title>menu</title><path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7Zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9Zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15Z"></path></svg>
                                </div>
                            </header>
                            <MessagesList />
                            <AddNewMessage />
                        </>
                }
            </div>
        </div>
    )
}
