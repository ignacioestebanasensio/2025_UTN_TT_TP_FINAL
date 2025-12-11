import React, { useContext } from 'react'
import "./ContactSidebar.css"
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'
import { ThemeContext } from '../../Context/ThemeContext'
export default function ContactSideBar() {

    const {isDark, toggleTheme} = useContext(ThemeContext)

    return (
        <aside className={`aside ` + (isDark ? "aside-dark" : "")}>
            <button onClick={toggleTheme}>Cambiar tema</button>
            <div>
                <ContactSearchForm/>
                <a>Crear contacto</a>
            </div>
            <ContactList/>
        </aside>
    )
}

