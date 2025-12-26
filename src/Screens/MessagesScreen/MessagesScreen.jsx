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
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>video-call-refreshed</title><path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V10.5L21.15 7.35C21.3167 7.18333 21.5 7.14167 21.7 7.225C21.9 7.30833 22 7.46667 22 7.7V16.3C22 16.5333 21.9 16.6917 21.7 16.775C21.5 16.8583 21.3167 16.8167 21.15 16.65L18 13.5V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H4ZM4 18H16V6H4V18Z" fill="currentColor"></path></svg>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>search-refreshed</title><path d="M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="currentColor"></path></svg>
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