import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); 

//never keeo hardcoded data in your components folder
//also we'll not keep hardcoded strings(urls) in components
//you'll find it in utils/config

