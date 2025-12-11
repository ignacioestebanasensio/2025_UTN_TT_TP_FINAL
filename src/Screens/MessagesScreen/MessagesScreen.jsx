import React, { useEffect, useState } from 'react'
import ContactSideBar from '../../Components/ContactSideBar/ContactSideBar'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'

export default function MessagesScreen() {
    const {
        contactSelected,
        loadingContact,
        loadContactById
    } = useContext(ContactDetailContext)

    return (
    <div>
        <h1>Pantalla de mensajes</h1>
        <ContactSideBar/>
        {
            loadingContact
            ? <div>Cargando...</div>
            : <h2>Contacto seleccionado: {contactSelected.contact_name}</h2>
        }
    </div>
    )
}
