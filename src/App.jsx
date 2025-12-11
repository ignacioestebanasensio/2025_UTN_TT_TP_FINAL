import { useState } from 'react'
import ContactSideBar from './Components/ContactSideBar/ContactSideBar'
import { Routes, Route } from 'react-router'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import MessagesScreen from './Screens/MessagesScreen/MessagesScreen'
import "./global.css"
import ContactListContextProvider from './Context/ContactListContext'
import ContactDetailContextProvider from './Context/ContactDetailContext'
function App() {
    return (
        <div>
            {/*<ContactSideBar/>*/}
            <Routes>
                <Route 
                    element={<ContactListContextProvider/>}
                    >
                        <Route 
                            path="/"
                            element={<ChatScreen/>}
                            />

                        <Route
                            path="/chat/:contact_id" 
                            element={<ContactDetailContextProvider/>}
                            >
                                <Route
                                path="/chat/:contact_id/messages" 
                                element={<MessagesScreen/>}
                                />
                        </Route>
                </Route>
            </Routes>
        </div>
    )

    
}

export default App
