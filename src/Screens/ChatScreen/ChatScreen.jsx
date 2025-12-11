import React, { useContext } from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import { ContactListContext } from '../../Context/ContactListContext'

export default function ChatScreen() {

    return (
    <div>
        <h1>Pantalla de contactos</h1>
        <ContactSideBar/>
    </div>
    )
}
