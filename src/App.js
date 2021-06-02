import React from 'react';
import {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from "./components/LoginForm";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>;

    return (
        <ChatEngine
            height='100vh'
            projectID='f40e85e2-ecc3-48ed-9370-474936759390'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppState) =>  <ChatFeed {...chatAppState}/>}
        />
    );
}

export default App;